# Manual de Mantenimiento Web - Amatista Efectos

Este documento detalla los pasos para gestionar, mantener y actualizar la tienda web de Amatista Efectos. 
El flujo actual utiliza una **arquitectura 100% estática sin backend**. Los pagos se realizan mediante formularios nativos de PayPal inyectados desde el frontend, y las descargas se entregan a través de enlaces directos de GitHub Releases.

---

## 1. Agregar un Nuevo Plugin de Pago a la Tienda

Para publicar un nuevo producto, debes seguir estos tres pasos secuenciales:

### Paso 1.1: Registrar el plugin en la Base de Datos (`plugin.js`)
1. Abre el archivo `plugin.js`.
2. Busca el diccionario `pluginDatabase`.
3. Añade un nuevo bloque para tu plugin. El campo `price` es crucial porque define el monto que se cobrará en PayPal.
   ```javascript
   "nuevo-plugin": {
       id: "nuevo-plugin",
       badgeClass: "tag-paid",
       osWinOnly: true, // o false si tiene versión mac
       images: ["assets/nuevo-plugin.png"],
       price: "20.00", // Precio oficial en USD
       downloadUrl: "", // Deja en blanco para plugins de pago
       videoId: "YOUTUBE_VIDEO_ID",
       docsHash: "#nuevo-plugin",
       translations: {
           es: { ... },
           en: { ... }
       }
   }
   ```

### Paso 1.2: Agregar la tarjeta visual al Catálogo (`index.html`)
1. Abre `index.html` y ve a la sección de plugins (ej. `<div class="plugins-grid" id="guitar-plugins">`).
2. Copia y pega un bloque HTML existente de otro plugin (como el de Ónix).
3. Modifica la imagen, título, descripción y, lo más importante, el botón de "Ver más" para que apunte al nuevo ID:
   `<a href="plugin.html?id=nuevo-plugin" class="btn btn-primary">Ver más</a>`

### Paso 1.3: Habilitar la Descarga Ofuscada (`gracias.html`)
1. Sube tu archivo `.zip` del plugin a GitHub Releases (en tu repositorio `amatista-releases`) y obtén el enlace directo de descarga pública.
2. **Importante:** Para evitar que cualquiera lea el enlace en el código fuente, debes ofuscarlo a **Base64**. Abre la consola de tu navegador (F12 > Console) y escribe:
   `btoa("TU_ENLACE_DE_GITHUB_AQUI")`
3. Copia el resultado encriptado (ej: `aHR0cHM...==`).
4. Abre el archivo `gracias.html`, baja hasta la sección de scripts y busca el diccionario `downloads`.
5. Agrega el nuevo enlace ofuscado:
   ```javascript
   const downloads = {
       "onix": "aHR0cHM6Ly...",
       "nuevo-plugin": "TU_ENLACE_BASE64_AQUI"
   };
   ```
5. Actualiza también el diccionario `names` en el mismo archivo para que se muestre el nombre correcto en pantalla:
   ```javascript
   const names = {
       "onix": "Ónix Overdrive",
       "nuevo-plugin": "Nombre de mi Nuevo Plugin"
   };
   ```

---

## 2. Cambiar el Precio de un Plugin Existente

Cambiar un precio es sumamente rápido con la arquitectura actual.

1. Abre `plugin.js` y busca el plugin en `pluginDatabase`.
2. Modifica la propiedad `price` al nuevo valor:
   ```javascript
   price: "15.00",
   ```
3. Guarda el archivo. El sistema actualizará automáticamente la etiqueta de precio en la página web y el monto real que se enviará en el formulario de pago a PayPal.

## 3. Configuración de la Cuenta de PayPal (Producción vs Pruebas)

Actualmente, **la tienda está configurada en modo REAL (Producción)**. Cualquier persona que haga clic en comprar, enviará dinero real a la cuenta configurada.

### 3.1 Cambiar la cuenta que recibe el dinero
Si necesitas cambiar a qué cuenta de PayPal llega el dinero de las ventas:
1. Abre el archivo `plugin.js`.
2. Busca la línea (aprox. línea 345) que tiene el campo `business`:
   ```html
   <input type="hidden" name="business" value="nathiamaro@gmail.com">
   ```
3. Reemplaza ese correo electrónico por el nuevo correo de PayPal. **Asegúrate de que sea una cuenta válida que pueda recibir pagos.**

### 3.2 Hacer pruebas sin gastar dinero (Modo Sandbox)
Si vas a realizar modificaciones estructurales y quieres probar el flujo de pago sin usar una tarjeta de crédito real, debes usar el entorno de pruebas de PayPal (Sandbox).

1. En `plugin.js`, busca la acción del formulario:
   ```html
   <form action="https://www.paypal.com/cgi-bin/webscr" ...>
   ```
2. Modifica la URL para añadir la palabra `sandbox`:
   ```html
   <form action="https://www.sandbox.paypal.com/cgi-bin/webscr" ...>
   ```
3. **Importante:** Al usar Sandbox, el correo de la variable `business` (paso 3.1) **no puede ser tu correo real**. Debes usar un correo ficticio de "Vendedor" proporcionado por el portal de desarrolladores de PayPal (ej: `sb-xxx@business.example.com`).
4. Haz tus pruebas locales usando una cuenta de "Comprador" ficticia de Sandbox.
5. **CRÍTICO:** Cuando termines las pruebas, **debes deshacer estos cambios**. Vuelve a colocar la URL real (`www.paypal.com`) y el correo real de la tienda (ej: `nathiamaro@gmail.com`) antes de subir los cambios a GitHub. De lo contrario, los clientes no podrán comprar.

---

## Consideraciones de Seguridad (Trade-offs)

Al no tener un servidor (backend) verificando que el pago sea válido antes de entregar el archivo, la lógica recae en el flujo natural del usuario:

- **Redirección de PayPal:** PayPal garantiza que el usuario solo llegará a `gracias.html` si completó exitosamente un pago.
- **Transparencia:** Si alguien inspecciona el código fuente de `gracias.html` (Ver código fuente), podrá leer los enlaces directos a tus archivos `.zip` en GitHub.
- **Beneficio:** Esta arquitectura reduce a cero tus costos de servidor, elimina mantenimientos complejos de backend, dependencias (`npm`, APIs) y asegura tiempos de respuesta instantáneos al estar alojado en GitHub Pages. Recomendado fuertemente para volumen de ventas inicial o intermedio en software indie.