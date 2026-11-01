# El Remanso — versión HTML, CSS y JavaScript

## Qué incluye
- Landing page completa con el contenido HTML de la exportación original de Next.js.
- Imágenes y logos originales, **sin cambiar nombres ni carpetas**.
- Estilos visuales y responsive originales preservados en `css/base.css` (CSS compilado de Tailwind, ahora estático; **no se requiere Tailwind, React, Next.js ni npm**).
- `css/styles.css`: personalizaciones legibles, estados de menú y FAQ.
- `js/main.js`: interacciones escritas en JavaScript puro.
- Metadatos SEO, Open Graph, Twitter y URL canonical; `robots.txt` y `sitemap.xml`.
- `404.html`.

## Estructura
```
El_Remanso_HTML_CSS_JS/
├── index.html             # Contenido y estructura semántica
├── 404.html
├── favicon.png
├── robots.txt
├── sitemap.xml
├── css/
│   ├── base.css           # Utilidades y responsive originales
│   └── styles.css         # Cambios nuevos: editar este archivo
├── js/
│   └── main.js            # Menú, FAQ, carrusel y contacto
└── images/
    ├── Imagenes/         # Fotografías: nombres originales
    ├── Logos/            # Logotipos: nombres originales
    └── favicon/
```

## Cómo usarlo en VS Code
1. Abrí **la carpeta raíz** `El_Remanso_HTML_CSS_JS` en VS Code.
2. Abrí `index.html` con Live Server (no requiere npm).
3. Editá textos en `index.html`, estilos nuevos en `css/styles.css`, comportamiento en `js/main.js`.
4. Para reemplazar una foto, mantené el nombre y ruta originales, o actualizá su `src`.
5. Antes de subir a Hostinger, probá escritorio, tablet, celular, navegación, FAQ, carrusel y formulario.
6. Guardá una copia completa de `public_html`. Subí el **contenido** de esta carpeta a `public_html`, no la carpeta contenedora.

## IMPORTANTE: formulario de contacto
En el ZIP exportado no se pudo confirmar un endpoint o servicio de envío de correos. En esta reconstrucción el botón abre el cliente de correo del visitante mediante `mailto:` con los datos cargados. **No envía el mensaje automáticamente**. Para tener envío directo desde la web, se necesita un servicio de formularios o un backend, y verificarlo antes de publicar. No afirmar que el formulario está conectado hasta entonces.

## Importante: fidelidad y SEO
- El HTML proviene de la salida estática original, limpiado de scripts y datos de hidratación Next.js.
- `base.css` se conservó para respetar las clases y breakpoints exactos. Es un archivo de utilidades compiladas, no CSS escrito desde cero. Para mantenerlo prolijo, los cambios se hacen en `styles.css`.
- Las reseñas y los datos de horarios/prestaciones son los que figuraban en la exportación; **verificar vigencia antes de publicar**.
- El enlace de certificado original contiene `draft=true`: verificar su acceso público.
- La exportación original incluye Google Tag Manager/analítica dentro de scripts que se eliminaron junto con Next.js. **No se reinstaló sin verificar el ID y consentimiento**. Revisar analítica antes de publicar.
- Revisar posicionamiento, indexación, Search Console, formulario y accesibilidad después de publicar.
- La exportación puede contener estilos o efectos que dependían de React; se replicaron los controles identificados, pero es necesaria una revisión visual y funcional en navegadores reales.
- Las fuentes Cormorant Garamond y Quicksand se cargan desde Google Fonts; sin conexión se usan fuentes alternativas.

## Ajustes de revisión 2
- El botón flotante de WhatsApp queda visible y conserva el efecto de pulso.
- El botón de menú móvil cambia de hamburguesa a X al abrirse y vuelve al cerrarse.
- El pequeño ícono de PDF que aparece sobre WhatsApp en algunas capturas no se encuentra en el HTML exportado; podría provenir de una extensión del navegador. No se añadió un enlace PDF sin un destino confirmado.
