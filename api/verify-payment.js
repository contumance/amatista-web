export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { orderID, pluginId } = req.body;

  if (!orderID || !pluginId) {
    return res.status(400).json({ error: 'Missing orderID or pluginId' });
  }

  // Base de datos segura en el backend
  const SECURE_DB = {
    "impulso-primario": { price: "40.00", githubAssetId: "434469762" }, //AQUI_TU_ASSET_ID
    "onix": { price: "1.00", githubAssetId: "434434139" }, //AQUI_TU_ASSET_ID
    "amatista": { price: "17.00", githubAssetId: "434438509" }, //AQUI_TU_ASSET_ID
    "obsidiana": { price: "17.00", githubAssetId: "434442289" } //AQUI_TU_ASSET_ID
  };

  const pluginData = SECURE_DB[pluginId];
  if (!pluginData) {
    return res.status(400).json({ error: 'Invalid pluginId' });
  }

  // Variables de entorno de Vercel
  const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
  const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;
  const PAYPAL_API = process.env.PAYPAL_ENV === 'live'
    ? 'https://api-m.paypal.com'
    : 'https://api-m.sandbox.paypal.com';

  const GITHUB_PAT = process.env.GITHUB_PAT;
  const GITHUB_OWNER = process.env.GITHUB_OWNER || 'contumance'; // Reemplazar
  const GITHUB_REPO = process.env.GITHUB_REPO || 'amatista-releases'; // Reemplazar

  try {
    // 1. Obtener Token de Acceso de PayPal
    const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString('base64');
    const tokenRes = await fetch(`${PAYPAL_API}/v1/oauth2/token`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials'
    });

    const tokenData = await tokenRes.json();
    if (!tokenRes.ok) {
      console.error("PayPal Auth Error:", tokenData);
      return res.status(500).json({ error: 'Error autenticando con PayPal' });
    }
    const accessToken = tokenData.access_token;

    // 2. Verificar los detalles de la Orden
    const orderRes = await fetch(`${PAYPAL_API}/v2/checkout/orders/${orderID}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });

    const orderData = await orderRes.json();
    if (!orderRes.ok) {
      return res.status(400).json({ error: 'Error verificando la orden' });
    }

    // 3. Validaciones estrictas de seguridad
    // - Asegurarse que el estado es COMPLETED o APPROVED
    if (orderData.status !== 'COMPLETED' && orderData.status !== 'APPROVED') {
      return res.status(400).json({ error: 'La orden no está completada' });
    }

    // - Asegurarse que el monto es el correcto
    const purchaseUnit = orderData.purchase_units[0];
    const amountPaid = purchaseUnit.amount.value;
    const currency = purchaseUnit.amount.currency_code;

    if (amountPaid !== pluginData.price || currency !== 'USD') {
      return res.status(400).json({ error: 'Monto pagado inválido para este producto' });
    }

    // 4. Obtener link de descarga temporal desde GitHub
    // Llamada a la API de GitHub usando el PAT para descargar el Asset
    const githubRes = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases/assets/${pluginData.githubAssetId}`, {
      headers: {
        'Authorization': `token ${GITHUB_PAT}`,
        'Accept': 'application/octet-stream' // Esto obliga a GitHub a responder con un 302 Redirect al archivo en AWS S3
      },
      redirect: 'manual' // Evitamos que Fetch siga el redirect automáticamente
    });

    let downloadUrl = '';

    if (githubRes.status === 302) {
      downloadUrl = githubRes.headers.get('location');
    } else {
      console.error("GitHub API Error:", await githubRes.text());
      return res.status(500).json({ error: 'Error obteniendo el archivo desde GitHub' });
    }

    // Retornamos el enlace S3 seguro y temporal al frontend
    return res.status(200).json({
      success: true,
      downloadUrl: downloadUrl
    });

  } catch (err) {
    console.error("Server Error:", err);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}
