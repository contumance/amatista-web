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

### Paso 1.3: Habilitar la Descarga (`gracias.html`)
1. Sube tu archivo `.zip` del plugin a GitHub Releases (en tu repositorio `amatista-releases`) y obtén el enlace directo de descarga pública.
2. Abre el archivo `gracias.html`.
3. Baja hasta la sección de scripts y busca el diccionario `downloads`.
4. Agrega el nuevo enlace:
   ```javascript
   const downloads = {
       "onix": "https://...",
       "nuevo-plugin": "https://github.com/contumance/amatista-releases/releases/download/.../nuevo.zip"
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

---

## 3. Pruebas y Simulaciones (Sandbox)

Si deseas probar el proceso de pago **sin gastar dinero real**, debes apuntar el formulario al entorno de pruebas (Sandbox) de PayPal temporalmente.

1. Abre `plugin.js` y busca el texto `<form action="https://www.paypal.com/cgi-bin/webscr"`.
2. Cambia la URL añadiendo `sandbox`:
   ```html
   <form action="https://www.sandbox.paypal.com/cgi-bin/webscr" ...>
   ```
3. **Importante:** Al usar Sandbox, debes cambiar también la variable `business` para usar el correo electrónico ficticio de tu cuenta de vendedor en Sandbox (ej: `sb-12345@business.example.com`).
4. Haz tu prueba local. Cuando termines, **deshaz estos cambios** (vuelve a `www.paypal.com` y usa tu correo real `alvaroh.gonz@gmail.com`).

---

## Consideraciones de Seguridad (Trade-offs)

Al no tener un servidor (backend) verificando que el pago sea válido antes de entregar el archivo, la lógica recae en el flujo natural del usuario:

- **Redirección de PayPal:** PayPal garantiza que el usuario solo llegará a `gracias.html` si completó exitosamente un pago.
- **Transparencia:** Si alguien inspecciona el código fuente de `gracias.html` (Ver código fuente), podrá leer los enlaces directos a tus archivos `.zip` en GitHub.
- **Beneficio:** Esta arquitectura reduce a cero tus costos de servidor, elimina mantenimientos complejos de backend, dependencias (`npm`, APIs) y asegura tiempos de respuesta instantáneos al estar alojado en GitHub Pages. Recomendado fuertemente para volumen de ventas inicial o intermedio en software indie.