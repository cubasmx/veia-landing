# 03 — Oferta técnica VEIA

**Autor:** Bruno (backend / datos) · **Uso:** definición interna para marketing, ventas y entrega.
**Regla base:** nada se ofrece si no lo puede sostener un equipo de 2 personas + agentes.
Todo lo que exceda ese límite se **licencia, subcontrata o deriva**, y se dice desde la propuesta.

---

## 1. Principios de entrega

**"Terminado" significa**, para cualquier línea:

1. Funciona en el entorno del cliente con datos reales, no solo en demo.
2. Está documentado: credenciales, arquitectura, decisiones y manual de operación en un solo lugar.
3. El cliente sabe usarlo: sesión de capacitación grabada + guía escrita breve.
4. Está respaldado y se probó una restauración (no solo el respaldo).
5. Hay un responsable nombrado del lado del cliente y un canal de soporte definido.

**Propiedad.** El cliente es dueño de: dominio, hosting, cuentas de anuncios, repositorio,
base de datos y licencias. VEIA trabaja con accesos delegados, nunca con cuentas propias
como único titular. Al cierre se entrega inventario de accesos y se transfieren owners.

**Código.** Desarrollo a medida se entrega en repositorio del cliente (GitHub/GitLab) con
licencia y README. Sin rehenes: no se retiene código ni accesos por pagos (más allá de
suspender servicio, que se avisa por escrito).

**Documentación mínima por proyecto:** ficha de arquitectura (1 página), inventario de
accesos, runbook de despliegue y respaldo, y registro de decisiones (ADR corto) para lo
no obvio.

**Respaldos.** Regla 3-2-1: 3 copias, 2 medios, 1 fuera del sitio. Base de datos diaria,
archivos según volumen; retención 30 días salvo requisito. Se documenta qué se respalda,
cada cuánto y cómo se restaura. Restauración de prueba al menos 1 vez al año.

**Actualizaciones.** Parches de seguridad críticos en ≤7 días desde que se publican;
actualizaciones mayores (CMS, Odoo, Node) se planean, no se improvisan. Todo cambio a
producción pasa por respaldo previo y ventana acordada.

**Traspaso.** Si el cliente se va, se entrega en ≤10 días hábiles: repo, dump de BD,
assets, accesos, documentación y una sesión de traspaso. Sin costo extra dentro del
primer año.

---

## 2. Fichas técnicas por línea

### 2.1 Sitio web

- **Entregamos:** sitio informativo/landing/catálogo, diseño a partir de identidad existente, formularios, SEO técnico (sitemap, metadatos, datos estructurados), analítica y despliegue con HTTPS.
- **Stack:** **Astro 5** (estático, rápido, el que ya usamos en veia.com.mx) + Tailwind; CMS Git-based (Sveltia/Decap) para contenido. **Alternativa:** WordPress + tema ligero + hosting administrado cuando el cliente publica mucho o ya tiene WP; Webflow si el cliente quiere editar todo sin apoyo técnico y acepta costo mensual.
- **Fases:** (1) descubrimiento y arquitectura de contenido → sitemap + wireframes; (2) diseño → Figma aprobado; (3) build → staging navegable; (4) QA + SEO técnico + analítica; (5) publicación y capacitación.
- **Requisitos del cliente:** textos finales, logos en vector, fotos (mín. 10 buenas), dominio, accesos de DNS/hosting, decisión de correo, quién aprueba.
- **No incluye / derivar:** redacción extensa (lo hace Sole), fotografía, campañas pagadas, sistemas de reservas complejos (derivar a Calendly/agenda propia), portales con login (pasa a "desarrollo a medida").
- **Riesgos:** contenido tarde (mitigar: congelar textos antes de diseño), aprobaciones por comité (un solo aprobador), rendimiento por imágenes pesadas (política de optimización y CDN).
- **Esfuerzo:** landing 1–2 semanas; corporativo 3–5. **Complejidad:** baja–media.
- **Calificar:** ¿quién escribe los textos? ¿quién aprueba? ¿ya hay dominio y hosting? ¿cuántas páginas/idiomas? ¿necesita editar solo o con apoyo?

### 2.2 E-commerce

- **Entregamos:** tienda con catálogo, carrito, pagos en línea, envíos, impuestos, correos transaccionales, facturación CFDI 4.0 y analítica de conversión.
- **Stack:** **Shopify** para retail real (pagos, inventario y apps resueltos; menos mantenimiento). **WooCommerce** si ya hay WordPress y catálogo ≤300 SKU con presupuesto ajustado. Pagos: **Mercado Pago / Stripe / Conekta**; CFDI con **Facturama** o **SW Sapien**. Nunca checkout propio desde cero.
- **Fases:** (1) modelo de catálogo, envíos y fiscal → definición; (2) tienda base + tema; (3) carga de productos y pagos en sandbox; (4) pruebas de compra, CFDI y correos; (5) lanzamiento + capacitación de operación.
- **Requisitos:** catálogo en plantilla (SKU, precio, stock, variantes, peso), fotos, políticas de envío/devolución, RFC y régimen fiscal, cuenta bancaria/mercado pago, decisión de paqueterías.
- **No incluye / derivar:** logística 3PL, atención a clientes, fotografía de producto, marketplaces (Amazon/ML) como canal completo — se cotiza aparte; integraciones con ERP legado se evalúan caso por caso.
- **Riesgos:** catálogo incompleto (mitigar: plantilla obligatoria y fecha de corte), fiscal mal definido (validar con contador antes de cobrar), pasarela rechazada por giro (prevalidar con proveedor).
- **Esfuerzo:** Shopify 3–6 semanas; WooCommerce 5–10 con migración. **Complejidad:** media–alta.
- **Calificar:** ¿cuántos SKU? ¿vende ya o empieza? ¿factura? ¿quién opera la tienda? ¿envía o solo recoge?

### 2.3 CRM

- **Entregamos:** embudo de ventas, contactos/empresas, actividades y recordatorios, plantillas de correo/WhatsApp, formularios y webhooks al CRM, reportes y capacitación del equipo comercial.
- **Stack:** **HubSpot** (Starter/Pro) para B2B con proceso simple y presupuesto; **Zoho CRM/Bigin** para pymes sensibles a costo; **Odoo CRM** cuando ya se planea ERP o se necesita cotización→factura en un solo sistema. **No** Holded en México: no resuelve CFDI.
- **Fases:** (1) mapeo del proceso comercial y campos → documento; (2) configuración de pipeline y permisos; (3) integración de formularios/WhatsApp/correo; (4) migración de contactos; (5) capacitación y adopción (2 sesiones).
- **Requisitos:** proceso de venta escrito (aunque sea en pizarrón), lista actual de clientes/prospectos en Excel/CSV, números de WhatsApp Business, definición de roles y permisos.
- **No incluye / derivar:** campañas de marketing automation avanzadas, telemarketing, limpieza manual de bases gigantes (se cotiza), telefonia/CTI compleja.
- **Riesgos:** nadie lo usa (mitigar: capacitar a 2 campeones internos y medir uso a 30 días), datos duplicados (deduplicar antes de migrar), licencias mal dimensionadas (calcular usuarios reales).
- **Esfuerzo:** 2–6 semanas. **Complejidad:** media.
- **Calificar:** ¿cuántos vendedores? ¿dónde viven hoy los contactos? ¿usa WhatsApp como canal principal? ¿quién será el dueño interno? ¿presupuesto mensual para licencias?

### 2.4 ERP

- **Entregamos:** implementación por módulos de **Odoo** (ventas, compras, inventario, facturación CFDI, contabilidad, POS, proyectos) o integración con el ERP existente. No inventamos contabilidad.
- **Stack:** **Odoo 17/18 Community o Enterprise** con localización México (CFDI), en VPS propio o Odoo Online; alternativa: **Alegra/Contpaqi/SAP B1** si el cliente ya los usa y solo necesita integración. Reportes con Odoo + Looker Studio.
- **Fases:** (1) diagnóstico de procesos y brechas → alcance por módulo; (2) configuración de empresa, impuestos, productos y almacenes; (3) migración de datos maestros; (4) pruebas por proceso (venta→factura→pago, compra→recepción); (5) salida a producción por olas + capacitación por rol.
- **Requisitos:** catálogo de productos/servicios, lista de clientes/proveedores, saldos iniciales, cuentas contables (las valida su contador), procesos actuales documentados, un líder interno con tiempo dedicado.
- **No incluye / derivar:** auditoría contable, nómina fiscal compleja, MRP avanzado multi-planta, migración de sistemas legados sin documentación. Se subcontrata a consultor Odoo certificado cuando el alcance excede 3 módulos o hay multiempresa.
- **Riesgos:** alcance abierto (mitigar: alcance por módulo y por ola, no "ERP completo"), contador ausente (exigir contador en mesa), datos sucios (limpieza antes de migrar), expectativa de cero fricción.
- **Esfuerzo:** 6–16 semanas por ola. **Complejidad:** alta.
- **Calificar:** ¿qué sistema usa hoy? ¿cuántos usuarios y sucursales? ¿quién lleva la contabilidad? ¿qué duele más: inventario, cobranza o facturación? ¿puede dedicar un líder interno 20%?

### 2.5 Desarrollo a medida

- **Entregamos:** software para un proceso que ninguna plataforma cubre bien: portales de clientes, integraciones, automatizaciones, APIs, paneles internos, apps web.
- **Stack:** **TypeScript + Node/Bun**, **PostgreSQL**, **Astro/Next** en frontend, **Docker** en VPS; colas con BullMQ, tareas con cron. Integraciones vía API/REST/webhooks. Si el cliente tiene stack, nos adaptamos.
- **Fases:** (1) definición de alcance y criterios de aceptación → documento firmado; (2) prototipo de UI + modelo de datos; (3) desarrollo por iteraciones de 2 semanas con demo; (4) pruebas y QA; (5) despliegue, monitoreo y traspaso.
- **Requisitos:** proceso documentado, usuarios piloto, accesos a sistemas a integrar, decisión de hosting, presupuesto para mantenimiento mensual.
- **No incluye / derivar:** apps móviles nativas (iOS/Android) → socio; IA/ML a medida → evaluar proveedor; software regulado (salud, financiero) → especialista; sistemas de alta disponibilidad 24/7 → no.
- **Riesgos:** alcance que crece (mitigar: control de cambios con costo y fecha), dependencia de un solo desarrollador (documentar y usar estándares), deuda técnica por prisa (revisión y pruebas mínimas obligatorias).
- **Esfuerzo:** 4–12 semanas por módulo; más si hay integraciones. **Complejidad:** alta.
- **Calificar:** ¿qué proceso duele y cuánto cuesta hoy? ¿qué sistemas hay que integrar? ¿quién usará el sistema? ¿acepta iteraciones con demo? ¿quién mantiene después?

### 2.6 Equipo de cómputo (suministro + soporte)

- **Entregamos:** laptops/desktops, periféricos, red y Wi-Fi (router, switch, puntos de acceso), configuración inicial, cuentas, respaldo, antivirus y soporte.
- **Equipo:** **Dell Latitude/OptiPlex** o **Lenovo ThinkPad** con Windows 11 Pro y garantía **3 años ProSupport**; periféricos Logitech; red **Ubiquiti UniFi** o **TP-Link Omada** para pymes. No armamos clones ni equipo reacondicionado sin aviso.
- **Fases:** (1) levantamiento de necesidades y presupuesto; (2) cotización y compra (el cliente paga directo al proveedor cuando sea posible); (3) configuración y entrega; (4) inventario y documentación; (5) soporte continuo.
- **Requisitos:** número de usuarios y sedes, software indispensable, presupuesto por equipo, quién autoriza compras, dónde se guardan los respaldos.
- **No incluye / derivar:** reparación a nivel componente, recuperación de datos de discos dañados, cableado estructurado certificado, servidores físicos on-premise. Se deriva a proveedor local.
- **Riesgos:** márgenes bajos (cobrar suministro como servicio, no como tienda), tiempos de importación (comprar con stock local), soporte 24/7 (no se ofrece).
- **Esfuerzo:** 1–2 semanas entregando; soporte mensual continuo. **Complejidad:** baja.
- **Calificar:** ¿cuántos equipos y usuarios? ¿tiene red actual? ¿quién da soporte hoy? ¿acepta comprar a proveedor con garantía? ¿cuánto downtime tolera?

### 2.7 Publicidad técnica (tracking y medición)

- **Entregamos:** GA4, Google Tag Manager (incluido server-side cuando haga falta), conversiones de Google Ads, **Meta Pixel + Conversions API**, Consent Mode v2, eventos de WhatsApp/llamada/formulario, y dashboard en Looker Studio.
- **Stack:** **GTM + GA4 + Consent Mode v2**, Meta CAPI, Google Ads, Looker Studio; si no hay web propia, landing de campaña con el stack de 2.1. Alternativa para presupuesto bajo: GA4 + pixel estándar sin server-side.
- **Fases:** (1) auditoría de medición actual y plan de eventos; (2) implementación en staging; (3) validación con DebugView/Tag Assistant; (4) publicación + dashboard; (5) revisión a 30 días.
- **Requisitos:** accesos de anuncios y analítica como administrador, aviso de privacidad y cookies, definición de qué es una conversión valiosa, quien revisa el dashboard.
- **No incluye / derivar:** operación diaria de campañas (la lleva Marco o el cliente), atribución perfecta cross-device, implementaciones con CDP empresarial.
- **Riesgos:** bloqueadores y consentimiento reducen datos (medir con modelos y no prometer exactitud), eventos mal nombrados (nomenclatura fija), accesos limitados (pedir admin desde el día 1).
- **Esfuerzo:** 1–3 semanas. **Complejidad:** baja–media.
- **Calificar:** ¿qué plataformas de ads usa? ¿tiene GA4/GTM? ¿quién es admin? ¿qué acción vale dinero? ¿tiene aviso de privacidad?

### 2.8 Diseño técnico (handoff y sistema)

- **Entregamos:** sistema de diseño ligero (tokens, componentes, tipografía, color, estados), prototipos en Figma y especificación lista para desarrollo, con accesibilidad **WCAG 2.2 AA** como mínimo.
- **Stack:** **Figma** + tokens exportables (JSON/CSS variables); componentes alineados al stack de build (Astro/Tailwind). Alternativa: partir de un UI kit licenciado y adaptarlo.
- **Fases:** (1) auditoría de marca y referencias; (2) tokens y fundamentos; (3) componentes clave y pantallas; (4) revisión de accesibilidad; (5) handoff documentado.
- **Requisitos:** manual de marca o logo vectorial, referencias visuales, audiencia, decisión de tono, quién aprueba.
- **No incluye / derivar:** naming y narrativa de marca (Vera/Sole), ilustración compleja, motion avanzado, investigación con usuarios a escala.
- **Riesgos:** diseño que el stack no sostiene (validar con desarrollo antes de aprobar), revisiones infinitas (2 rondas incluidas), fuentes licenciadas sin presupuesto.
- **Esfuerzo:** 1–3 semanas. **Complejidad:** baja–media.
- **Calificar:** ¿hay identidad definida? ¿cuántas pantallas? ¿quién aprueba? ¿hay requisitos de accesibilidad? ¿se usará en web y app?

---

## 3. Modelo de relación

| Modelo | Cuándo | Reglas |
|---|---|---|
| **Proyecto cerrado** | Alcance definible y acotado (sitio, tienda, implementación CRM) | Alcance y criterios de aceptación por escrito; 50% anticipo, 25% a mitad, 25% contra entrega; cambios fuera de alcance se cotizan |
| **Bolsa de horas** | Trabajo intermitente, mejoras, integraciones | Mínimo 10 h, vigencia 90 días, reporte quincenal de consumo; se factura al agotarse |
| **Soporte mensual** | Sitios/tiendas/sistemas en operación | Incluye monitoreo, respaldos, parches y N horas de atención; **no** incluye desarrollos nuevos |
| **Guardia extendida** | Cliente con operación crítica | Solo con contrato aparte y costo explícito; no se promete 24/7 por defecto |

**SLA realistas (equipo de 2 + agentes).** Horario de atención L–V, 9:00–18:00 CDMX.
Fuera de horario: solo incidentes P1 con guardia contratada.

| Prioridad | Ejemplo | Respuesta | Objetivo de solución |
|---|---|---|---|
| P1 | Sitio/tienda caída, cobros fallando | 2 h hábiles | 8 h hábiles |
| P2 | Función importante degradada | 4 h hábiles | 2 días hábiles |
| P3 | Error menor, consulta | 1 día hábil | 5 días hábiles |
| P4 | Mejora o cambio | 3 días hábiles | Se agenda |

**Escalamiento:** P1 → se avisa de inmediato a Julio y al cliente; se abre ticket con
hosting/proveedor; se publica actualización cada 2 h hábiles. Todo incidente P1 deja
postmortem breve (qué pasó, causa, acción). Los agentes pueden monitorear y responder
primera línea, pero **ningún cambio crítico se aplica sin humano**.

---

## 4. CRM y ERP

### Árbol de decisión

1. **¿Solo ordenar prospectos y seguimiento?** → **HubSpot** (mejor ecosistema y adopción) o **Zoho/Bigin** (costo menor). No se implementa ERP.
2. **¿Necesita cotización → factura CFDI, inventario, compras, POS o proyectos?** → **Odoo** con localización México. Un solo sistema, un solo dato.
3. **¿El proceso central no es venta ni inventario** (membresías, logística propia, producción especial)? → **desarrollo a medida** + integración con la contabilidad existente.
4. **¿Más de ~50 usuarios, multiempresa/multipaís o manufactura compleja?** → **no lo tomamos**; se deriva a integrador certificado (SAP B1, Dynamics, Odoo partner).
5. **¿Holded?** Solo si el cliente opera en España; en México no resuelve CFDI ni nómina.

### Módulos típicos por giro

| Giro | Núcleo | Extras |
|---|---|---|
| Servicios (agencias, consultoría) | CRM, proyectos, horas, cotizaciones, facturación | Portal de cliente, tableros de rentabilidad |
| Retail | POS, inventario, compras, e-commerce, facturación | Lealtad, multi-sucursal, códigos de barras |
| Despachos (legal, contable) | CRM, expedientes, tareas, tiempos, facturación | Control de documentos, firma electrónica |
| Inmobiliaria | CRM, propiedades, prospectos, citas | Portal web, integración con portales, comisiones |

### Migración de datos

1. Inventario de fuentes (Excel, sistema viejo, correo, WhatsApp).
2. Plantilla de importación y limpieza **antes** de cargar: deduplicar por RFC/correo/teléfono.
3. Carga en staging y conciliación de totales (clientes, saldos, inventario).
4. Carga final en ventana acordada + acta de saldos iniciales firmada por el cliente/contador.
5. Nunca se migra "todo lo que haya": se migra lo que se va a usar.

### Capacitación y costos recurrentes

Capacitación por rol (2 sesiones mínimo) + manual breve; a 30 días se revisa adopción.
El cliente debe cubrir y saber desde el día 1: **licencias** (Odoo por usuario, HubSpot/Zoho por usuario), **hosting/VPS**, **dominio**, **correo** (Google Workspace/Zoho Mail), **timbres CFDI**, **comisiones de pasarela** y apps de tienda. VEIA puede administrarlas, pero no las absorbe en la mensualidad salvo que se coticen.

---

## 5. Desarrollo a medida

**Criterios de aceptación.** Cada historia tiene condición verificable ("dado X, cuando Y, entonces Z"), aprobada por el cliente antes de desarrollar. Sin criterio escrito no hay "está mal" ni "ya casi".

**Control de versiones.** Git con ramas cortas (`main` protegida), PR obligatorio aunque seamos dos, commits descriptivos y etiquetas de versión. Repositorio del cliente o transferido al cierre.

**Ambientes.** `dev` (local), `staging` (datos de prueba, acceso del cliente) y `producción`. Nunca se prueba en producción. Configuración por variables de entorno; secretos en gestor de contraseñas, no en el repo.

**Pruebas.** Unitarias en lógica de negocio, integración en APIs y flujos críticos, E2E en los 2–3 recorridos que generan dinero. Cobertura no es meta; sí lo es que lo crítico esté cubierto.

**Despliegue.** Docker + Caddy en VPS, o plataforma del cliente; CI con GitHub Actions (lint, tests, build); despliegue con respaldo previo y posibilidad de rollback. Monitoreo de disponibilidad + errores (Uptime Kuma, Sentry) y alertas al canal del equipo.

**Mantenimiento y deuda técnica.** Todo sistema a medida requiere mensualidad de mantenimiento (estimado 15–20% del costo de construcción al año). Se lleva registro de deuda técnica y se paga por iteración; no se esconde. Si el cliente no contrata mantenimiento, se entrega congelado y se documenta que no hay soporte correctivo.

---

## 6. Equipo de cómputo

**Se suministra:** laptops/desktops con Windows 11 Pro y garantía 3 años, monitores, teclado/ratón, docks, impresoras, router/switch/access points para la red y UPS para equipos críticos. El cliente compra a proveedor establecido (Dell, Lenovo, HP) cuando sea posible; VEIA cobra configuración y soporte, no especula con hardware.

**Configuración:** alta de usuario, cuenta Microsoft/Google, correo, navegador, antivirus, respaldo (OneDrive/Google Drive o NAS), impresoras, Wi-Fi con red de invitados, etiquetado de inventario.

**Garantías y proveedores:** se tramita la garantía del fabricante; VEIA no repara a nivel componente. Proveedores locales de confianza para cableado y reparación; se declara quién responde por qué.

**Soporte:** remoto L–V 9:00–18:00 con respuesta ≤4 h hábiles; presencial en ZMG en 24–48 h hábiles; instalación de equipo nuevo y reemplazo por falla cubierta. **No cubre:** recuperación de datos, daño por líquido/golpe, software de terceros sin licencia, servidores on-premise, disponibilidad 24/7.

**Inventario:** hoja única (o activos en Odoo) con hostname, número de serie, usuario asignado, fecha de compra, proveedor, fin de garantía y licencias. Se actualiza en cada alta/baja y se entrega al cliente.

---

## 7. Seguridad y datos

**Mínimos exigibles en todo proyecto:**

- HTTPS obligatorio con HSTS; certificados renovados automáticamente (Caddy/Let's Encrypt).
- Respaldos 3-2-1, cifrados, con restauración probada.
- Cuentas **nominativas**; nada de usuarios compartidos. MFA en correo, hosting, CRM, anuncios y banco.
- Contraseñas en gestor (Bitwarden/1Password); nunca en WhatsApp, correo o documentos.
- Principio de mínimo privilegio; revisión de accesos al cierre de proyecto y cuando alguien sale.
- Parches de seguridad en ≤7 días; dependencias revisadas antes de actualizar.
- Registro de incidentes: qué pasó, cuándo, impacto, acción.

**Privacidad (LFPDPPP, nivel alto, sin asesoría legal).** Si se recaban datos personales: aviso de privacidad con finalidades, responsable, derechos ARCO y contacto; consentimiento donde aplique; medidas de seguridad administrativas y técnicas; cuidado en transferencias a terceros (CRM, correo, WhatsApp, pasarelas). Dudas legales se canalizan con Themis o abogado del cliente.

**Declarar en el sitio:** aviso de privacidad, política de cookies y consentimiento, términos y condiciones si hay venta, y datos de contacto del responsable. No se declara cumplimiento "certificado" ni se usan sellos que no existan.

---

## 8. Riesgos del portafolio (y mitigación)

1. **Dispersión:** 8 líneas con 2 personas. → Portafolio por etapas: web/e-commerce/tracking como entrada; CRM/ERP solo con prospecto calificado; socio para lo que no dominamos.
2. **Cuello de botella humano:** todo pasa por Julio/Bruno. → Documentar runbooks, usar agentes en primera línea, no vender más de 3 proyectos activos a la vez.
3. **Márgenes de hardware:** poco margen y mucha logística. → Cobrar suministro como servicio (configuración + soporte), comprar con proveedor local.
4. **Expectativa de 24/7:** clientes que asumen disponibilidad total. → SLA escrito y firmado; guardia solo con contrato.
5. **Incidente de seguridad o pérdida de datos:** reputación y responsabilidad. → Mínimos de la sección 7 en todo proyecto, respaldos probados y contrato con límites de responsabilidad.
6. **Sobreventa de marketing:** prometer ERP en 4 semanas o "IA" sin sustento. → Este documento manda; copy revisado por técnica antes de publicar.

---

## 9. Glosario para copy (qué sí y qué no)

| Se puede decir | No se puede decir |
|---|---|
| "Sitio rápido, medido con Lighthouse" | "El sitio más rápido de México" |
| "HTTPS y respaldos automáticos" | "Seguridad 100 % garantizada" |
| "Facturación CFDI 4.0 integrada" | "Cumplimiento fiscal garantizado" (lo valida el contador) |
| "CRM configurado a tu proceso" | "CRM a la medida" si es HubSpot/Zoho configurado |
| "Implementación por módulos, en olas" | "ERP completo en 4 semanas" |
| "Automatizamos tareas con reglas e integraciones" | "Inteligencia artificial que vende por ti" |
| "Soporte L–V con SLA de respuesta" | "Soporte 24/7" |
| "Datos alojados en [ubicación real]" | "Datos en México" si el hosting está fuera |
| "Medidas alineadas a la LFPDPPP" | "Certificados en protección de datos" |
| "Proyecto con alcance y entregables definidos" | "Todo incluido / sin límites" |

**Regla de oro:** si una frase no se puede verificar con una prueba, una métrica o un
documento, no va al sitio. Marketing propone; técnica valida antes de publicar.

