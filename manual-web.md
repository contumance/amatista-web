# Manual de Mantenimiento Web - Amatista Efectos

Este documento detalla los pasos necesarios para gestionar, mantener y actualizar la tienda web de Amatista Efectos.

---

## 1. Agregar un Nuevo Plugin a la Tienda

Para agregar un nuevo producto, debes actualizar tres archivos clave: el frontend (catálogo), la base de datos del plugin y el backend de pagos.

### Paso 1.1: Actualizar la base de datos en el Frontend (`plugin.js`)
1. Abre el archivo `plugin.js`.
2. Busca el objeto `pluginDatabase`.
3. Añade un nuevo bloque para tu plugin siguiendo la estructura de los demás. Ejemplo:
   ```javascript
   "nuevo-plugin": {
       id: "nuevo-plugin",
       badgeClass: "tag-paid", // o "tag-free"
       osWinOnly: true,
       images: ["assets/nuevo-plugin.png"],
       price: "17.00", // Deja en "" si es gratis
       downloadUrl: "", // Solo usado para descargas directas gratuitas
       videoId: "YOUTUBE_VIDEO_ID",
       docsHash: "#nuevo-plugin",
       translations: {
           es: { ... },
           en: { ... }
       }
   }
   ```

### Paso 1.2: Agregar la tarjeta al Catálogo (`index.html`)
1. Abre `index.html` y busca la sección `<div class="plugins-grid" id="guitar-plugins">` (o la pestaña correspondiente).
2. Copia y pega todo el bloque HTML de un `.plugin-card` existente.
3. Modifica la imagen, el título, y asegúrate de que el enlace del botón de "Ver más" apunte a tu nuevo ID:
   `<a href="plugin.html?id=nuevo-plugin" class="btn btn-primary">Ver más</a>`

### Paso 1.3: Registrar el producto en el Backend Seguro (`api/verify-payment.js`)
1. Abre `api/verify-payment.js`.
2. Busca el objeto `SECURE_DB` (aproximadamente en la línea 13).
3. Añade una nueva línea con el ID exacto que usaste en `plugin.js`, su precio oficial y su Asset ID de GitHub:
   ```javascript
   "nuevo-plugin": { price: "17.00", githubAssetId: "AQUI_VA_EL_ID" }
   ```

---

## 2. Configurar GitHub Releases y Obtener el Asset ID

Para que los clientes puedan descargar de forma segura, los archivos `.zip` se alojan en tu repositorio privado (`contumance/amatista-releases`).

### Paso 2.1: Crear la Release en GitHub
1. Comprime tu plugin en formato `.zip`.
2. Ve a tu repositorio privado `amatista-releases` en GitHub.
3. En el panel derecho, haz clic en **Releases** y luego en **Draft a new release**.
4. Crea un nuevo **Tag** (por ejemplo, `nuevo-plugin-v1.0.0`).
5. Ponle un título a la release.
6. **Importante:** Arrastra y suelta tu archivo `.zip` en el recuadro inferior ("Attach binaries by dropping them here...").
7. Haz clic en **Publish release**.

### Paso 2.2: Obtener el Asset ID usando la Terminal
Tu backend no lee el nombre del archivo, sino el número identificador único (Asset ID) que GitHub le asignó.
Abre tu terminal y usa GitHub CLI (`gh`) con este comando, reemplazando `<NOMBRE-DEL-TAG>` por el tag que creaste en el paso 2.1:

```bash
gh api repos/contumance/amatista-releases/releases/tags/<NOMBRE-DEL-TAG> --jq '.assets[] | {id, name}'
```

**Ejemplo:**
```bash
gh api repos/contumance/amatista-releases/releases/tags/onix-overdrive-v1.0.0 --jq '.assets[] | {id, name}'
```
**Resultado:**
```json
{
  "id": 434434139,
  "name": "OnixOverdrive_1.0.0_Amatista.zip"
}
```
8. Copia ese número (`434434139`) y pégalo en el `SECURE_DB` de `api/verify-payment.js`.

---

## 3. Cambiar entre Modo Sandbox (Pruebas) y Modo Live (Producción)

Cuando necesites hacer pruebas sin gastar dinero, debes usar el entorno Sandbox de PayPal. Para salir al público, debes usar el modo Live. Ambos entornos requieren cambiar credenciales en **dos lugares**.

### Paso 3.1: Configuración en el Backend
Tienes que modificar las variables de entorno de tu servidor. 
- **En tu computadora (Local):** Se cambian en el archivo `.env`.
- **En Producción:** Se cambian en el panel de **Vercel** > Project Settings > Environment Variables.

Debes actualizar tres variables según el modo que quieras usar:
```env
# MODO SANDBOX (Pruebas)
PAYPAL_ENV=sandbox
PAYPAL_CLIENT_ID=TU_CLIENT_ID_DE_SANDBOX
PAYPAL_CLIENT_SECRET=TU_SECRET_DE_SANDBOX

# MODO LIVE (Producción)
PAYPAL_ENV=live
PAYPAL_CLIENT_ID=TU_CLIENT_ID_LIVE_REAL
PAYPAL_CLIENT_SECRET=TU_SECRET_LIVE_REAL
```

### Paso 3.2: Configuración en el Frontend (`plugin.html`)
El SDK de PayPal en la página web también necesita saber en qué modo está trabajando para mostrar la ventana de pago correcta.
Abre `plugin.html` y busca el `<script>` de PayPal en el `<head>`. Debes cambiar el parámetro `client-id` en la URL para que coincida con el modo que estás usando:

**Para Sandbox:**
```html
<script src="https://www.paypal.com/sdk/js?client-id=TU_CLIENT_ID_DE_SANDBOX&currency=USD"></script>
```

**Para Live (Producción):**
```html
<script src="https://www.paypal.com/sdk/js?client-id=TU_CLIENT_ID_LIVE_REAL&currency=USD"></script>
```

> [!WARNING]
> Si el Frontend está en modo Sandbox pero el Backend (`.env`) está en modo Live (o viceversa), **las compras fallarán** con un error de verificación al contactar al servidor. Asegúrate siempre de cambiar ambos lugares al mismo tiempo al pasar a producción.