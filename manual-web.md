# Arquitectura Segura con Vercel y GitHub

He refactorizado tu página web para que sea 100% segura. Hemos pasado de una arquitectura puramente "Frontend" a una aplicación "Full-stack Serverless" utilizando **Vercel** y la API de **GitHub**.

## Cambios Realizados

1. **Backend Creado (`api/verify-payment.js`):**
   - He creado un endpoint seguro en el servidor.
   - El código en el backend tiene tu nueva "Base de datos segura" (donde se configuran los precios oficiales y los IDs de los archivos de GitHub).
   - Cuando alguien paga, el servidor contacta a PayPal en secreto y verifica que el usuario no haya alterado el precio en su navegador y que el pago esté `COMPLETED`.

2. **Links Expirables Gratuitos:**
   - He implementado la mejor solución 100% gratuita para enlaces expirables. 
   - El backend solicita a la API de GitHub descargar el archivo desde tu repositorio **Privado**.
   - GitHub responde con una URL temporal de Amazon S3 que **expira automáticamente a los 5 minutos**.
   - El backend le entrega esa URL segura al cliente para la descarga final.

3. **Frontend Limpio (`plugin.js`):**
   - He borrado todos los `downloadUrl` secretos de los plugins de pago en `plugin.js`.
   - Modifiqué la lógica del botón de PayPal para que se comunique con `/api/verify-payment`.

## Pasos para el Despliegue en Vercel

Sigue estos pasos para poner tu nueva arquitectura segura en producción:

### 1. Preparar los Archivos en GitHub
1. Entra a tu cuenta de GitHub y crea un nuevo Repositorio **Privado** (ej. `amatista-releases`).
2. Sube los archivos `.zip` de tus plugins creando una "Release" en ese repositorio.
3. Consigue el `Asset ID` de cada `.zip` que subas (puedes usar la API de GitHub o herramientas online para obtener el ID de un asset de una release).
4. Genera un **Personal Access Token (PAT)** en GitHub con permisos para leer repositorios privados.

### 2. Configurar la Base de Datos Segura
Abre el archivo `api/verify-payment.js` en tu código local.
Busca la sección `SECURE_DB` (línea 13) y reemplaza la palabra `"AQUI_TU_ASSET_ID"` por el número de Asset ID de GitHub correspondiente a cada plugin. También confirma que los precios sean correctos.

### 3. Subir a Vercel
1. Haz un commit y push de tu código actual (con la carpeta `api/` incluida) a tu repositorio web principal en GitHub (puede ser público).
2. Entra a [Vercel.com](https://vercel.com) y vincula tu cuenta de GitHub.
3. Haz clic en "Add New Project" y selecciona el repositorio de tu página web.
4. En el apartado **Environment Variables**, añade estas variables críticas antes de darle a Deploy:
   - `PAYPAL_CLIENT_ID`: Tu Client ID de PayPal (Test o Live).
   - `PAYPAL_CLIENT_SECRET`: Tu llave secreta de PayPal (la consigues en el mismo lugar que el Client ID).
   - `PAYPAL_ENV`: Escribe `live` o `sandbox` (según qué credenciales pusiste).
   - `GITHUB_PAT`: El Token de acceso personal que creaste en GitHub.
   - `GITHUB_OWNER`: Tu nombre de usuario en GitHub.
   - `GITHUB_REPO`: El nombre de tu repositorio privado (ej. `amatista-releases`).

5. ¡Haz clic en **Deploy**!

> [!NOTE]
> Una vez desplegado, Vercel compilará automáticamente tu sitio estático y detectará la carpeta `/api/` para convertir el archivo `verify-payment.js` en una Serverless Function lista para usarse de forma segura.

## Pruebas Locales

Si deseas hacer la prueba local del $1, ahora debes correr el servidor con **Vercel CLI** en lugar de usar Python, ya que Python no sabe interpretar las funciones de backend.
1. Abre tu terminal.
2. Escribe `npm i -g vercel` (si tienes Node.js instalado).
3. Escribe `vercel dev` para levantar el servidor localmente con soporte de backend.



## Notas practicas

### 1.3 Ejemplos comandos gh

`Alvaro@192 amatista-releases % gh api repos/contumance/amatista-releases/releases/tags/carbonado-v1.2.0 --jq '.assets[] | {id, name}'
{
  "id": 433285768,
  "name": "CarbonadoBoost_1.2.0_Amatista.zip"
}
Alvaro@192 amatista-releases % gh api repos/contumance/amatista-releases/releases/tags/onix-overdrive-v1.0.0 --jq '.assets[] | {id, name}'
{
  "id": 434434139,
  "name": "OnixOverdrive_1.0.0_Amatista.zip"
}
Alvaro@192 amatista-releases % gh api repos/contumance/amatista-releases/releases/tags/amatista-distortion-v1.0.0 --jq '.assets[] | {id, name}'
{
  "message": "Not Found",
  "documentation_url": "https://docs.github.com/rest/releases/releases#get-a-release-by-tag-name",
  "status": "404"
}
gh: Not Found (HTTP 404)
Alvaro@192 amatista-releases % gh api repos/contumance/amatista-releases/releases/tags/amatista-v1.0.0 --jq '.assets[] | {id, name}' 
{
  "id": 434438509,
  "name": "AmatistaDistortion_1.0.0_Amatista.zip"
}
Alvaro@192 amatista-releases % gh api repos/contumance/amatista-releases/releases/tags/obsidiana-v1.0.0 --jq '.assets[] | {id, name}'
{
  "id": 434442289,
  "name": "ObsidianaFuzz_1.0.0_Amatista.zip"
}
Alvaro@192 amatista-releases %` 