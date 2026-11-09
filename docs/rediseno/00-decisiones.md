# 00 — Decisiones del rediseño

**Rama:** `rediseno-soluciones-tecnologicas` · **Fecha:** 2026-11-09
**Estado:** en ejecución local. Nada se publica ni se sube al VPS sin autorización de Julio.

## Aprobado por Julio (2026-11-09)

1. **Nuevo posicionamiento:** soluciones tecnológicas para profesionistas, negocios locales y pymes.
2. **Ocho líneas:** sitio web, e-commerce, diseño, publicidad, equipo de cómputo, CRM, ERP y desarrollo a medida.
3. **Identidad:** se evoluciona la actual (morado/magenta/amarillo, Satoshi + Instrument Serif). No se cambia logo ni colores base.
4. **Equipo de cómputo:** venta/suministro + soporte y mantenimiento. No renta/leasing ni asesoría de compra sin venta.
5. **CRM/ERP/desarrollo:** modelo mixto. Plataforma existente cuando alcanza; desarrollo a medida cuando el proceso lo justifica.
6. **Alcance de esta versión:** home nuevo + una página por cada una de las 8 líneas.
7. **Precios:** no se publican. Todo va a cotización.
8. **/plantillas:** se conserva, pero sale de la navegación principal.

## Decisiones de coordinación (Julio)

- **Rutas:** `/servicios/<slug>` con slugs `sitio-web`, `ecommerce`, `diseno`, `publicidad`, `equipo-de-computo`, `crm`, `erp`, `desarrollo-a-medida`.
- **Agrupación en home y menú:** Presencia (sitio, diseño, publicidad) · Ventas (e-commerce, CRM) · Operación (equipo de cómputo, ERP, desarrollo).
- **Navegación principal:** Servicios (desplegable) · Casos · Cómo trabajamos · Dudas · Contacto. Sin ítem "Nosotros": el equipo se presenta en el home.
- **CTA principal:** WhatsApp con mensaje precargado por página. **CTA secundario:** formulario de contacto para CRM, ERP y desarrollo a medida.
- **Contacto:** se reutiliza `public/enviar.php` (nombre, negocio, teléfono, correo, mensaje) con la página `/contacto`.
- **Se conservan:** `/portafolio` y `/plantillas` (esta última solo desde el pie y la FAQ).
- **No se toca:** el widget del bot sigue oculto (`MOSTRAR_BOT = false`).
- **Compatibilidad de despliegue:** todo enlace interno sigue usando `import.meta.env.BASE_URL`, porque el espejo de GitHub Pages publica bajo `/veia-landing/`.

## Reglas de contenido

- Manda `01-posicionamiento.md` §10 (qué no decir) y `03-oferta-tecnica.md` §9 (glosario).
- Ninguna cifra, testimonio, certificación ni alianza sin documento que la respalde.
- Los cinco clientes mostrados son reales y enlazan a su sitio: SANHER, Legend Horizon Living, Uditore, Tocomadera, Ascendia.
- Casos: solo los tres ya publicados (SANHER, Tocomadera, Uditore), con la misma redacción validada en el sitio actual.

## Pendiente de aprobación visual

El mockup `mockup/index.html` reproduce el home y la plantilla de servicio. Las tres decisiones marcadas por Vera son:

1. Retirar el degradado de botones y tarjetas; dejarlo solo en el banner CTA.
2. Rejilla de servicios 3+3+3 con tarjeta-aside "¿No sabes cuál te toca?".
3. Radios 16/20 y tarjetas con borde de 1 px en lugar de sombra.

Se implementan así salvo indicación contraria de Julio.

## Estado de la implementación (2026-11-09)

- Rama local `rediseno-soluciones-tecnologicas`; **sin commit, sin push y sin desplegar**.
- `npm run build` limpio: 14 páginas (home, 8 servicios, contacto, aviso, portafolio, plantillas, 404, sitemap).
- Verificado con Chromium headless: 0 enlaces internos rotos, 0 desbordes horizontales a 320/390/768/1024/1440, un solo `h1` por página, sin precios ni emojis en las páginas nuevas.
- Axe (WCAG 2.1 AA): 0 violaciones en home, servicios, contacto, aviso, portafolio, plantillas y 404.
- Formulario probado con envío simulado: valida campos, exige aceptación del aviso y muestra confirmación.
- Menú móvil y desplegable de servicios probados con teclado (Enter/Esc) y `aria-expanded`.
- Sin JavaScript todo el contenido es visible (el revelado solo se activa con la clase `.js`).

## Pendientes antes de publicar

1. **Datos del responsable** en el aviso de privacidad: nombre legal, domicilio completo y correo de privacidad (`privacidad@veia.com.mx` o `contacto@`). Hoy se usa "VEIA, Guadalajara, Jalisco" y `contacto@veia.com.mx`.
2. **Autorización escrita** de SANHER, Tocomadera y Uditore para seguir apareciendo como casos con nombre y dominio.
3. **Fotos del equipo**: `public/images/equipo/*.jpg` son placeholders. La sección "Quiénes somos" va sin fotos hasta que existan las reales.
4. **Redes sociales**: no hay handles oficiales; el componente no renderiza iconos muertos.
5. **Confirmar** si la cotización es sin costo (se retiró la frase del FAQ por no estar aprobada).
6. **Analítica**: el sitio no instala cookies ni GA4. Si se instala, hacen falta banner con rechazo, Consent Mode y actualizar el aviso.
7. **Espejo de GitHub Pages**: el formulario PHP no funciona ahí; el front ofrece WhatsApp como respaldo.
8. **Despliegue**: requiere autorización explícita de Julio (`./deploy-vps.sh`).
