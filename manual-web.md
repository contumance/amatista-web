# Manual de Mantenimiento Web - Amatista Efectos

Este documento detalla los pasos para gestionar, mantener y actualizar la tienda web de Amatista Efectos. 
El flujo actual utiliza una **arquitectura 100% estática sin backend**. Los pagos se realizan mediante formularios nativos de PayPal inyectados desde el frontend, y las descargas se entregan a través de enlaces directos de GitHub Releases.

---

## 1. Añadir un Nuevo Plugin a la Tienda (Gumroad)

Para publicar un nuevo producto, el proceso se ha simplificado gracias a la integración con Gumroad.

### Paso 1: Subir el producto a Gumroad
1. Crea el nuevo producto en tu cuenta de Gumroad y configúralo con sus archivos y precios.
2. Copia el enlace directo de compra que te proporciona Gumroad (ej. `https://gumroad.com/l/tu-producto`).

### Paso 2: Registrar el plugin en la Base de Datos (`plugin.js`)
1. Abre el archivo `plugin.js`.
2. Busca el diccionario `pluginDatabase`.
3. Añade un nuevo bloque para tu plugin. El campo `gumroadUrl` es crucial porque define a dónde irá el usuario a pagar y descargar.
   ```javascript
   "nuevo-plugin": {
       id: "nuevo-plugin",
       badgeClass: "tag-paid",
       osWinOnly: true, // o false si tiene versión mac
       images: ["assets/nuevo-plugin.png"],
       price: "20.00", // Precio oficial en USD
       gumroadUrl: "https://gumroad.com/l/tu-producto", // ENLACE DE GUMROAD AQUÍ
       downloadUrl: "", // Deja en blanco para plugins de pago
       videoId: "YOUTUBE_VIDEO_ID",
       docsHash: "#nuevo-plugin",
       translations: {
           es: { ... },
           en: { ... }
       }
   }
   ```

### Paso 3: Agregar la tarjeta visual al Catálogo (`index.html`)
1. Abre `index.html` y ve a la sección de plugins (ej. `<div class="plugins-grid" id="guitar-plugins">`).
2. Copia y pega un bloque HTML existente de otro plugin (como el de Ónix).
3. Modifica la imagen, título, descripción y el botón de "Ver más" para que apunte al nuevo ID:
   `<a href="plugin.html?id=nuevo-plugin" class="btn btn-primary">Ver más</a>`

¡Y listo! Al hacer clic en el botón de compra, el usuario será redirigido a Gumroad para completar el pago de forma segura y descargar los archivos automáticamente.

---

## 2. Cambiar el Precio de un Plugin Existente

Cambiar un precio es sumamente rápido con la arquitectura actual.

1. Entra a tu cuenta de Gumroad y cambia el precio de tu producto allí.
2. Abre `plugin.js` y busca el plugin en `pluginDatabase`.
3. Modifica la propiedad `price` al nuevo valor (esto solo es visual para la página):
   ```javascript
   price: "15.00",
   ```
4. Guarda el archivo. El sistema actualizará automáticamente la etiqueta de precio en la página web.