# VEIA — Plan de sitios web, soporte y automatización

Fecha: 18 de septiembre de 2026  
Estado: propuesta para prueba comercial. No es un tarifario definitivo ni un sistema ya implementado.

## 1. Objetivo

Ofrecer sitios web desde paquetes económicos, acompañados opcionalmente por soporte recurrente. Incentivar la contratación de tres meses mediante un descuento real en la construcción del sitio, manteniendo disponible la compra sin soporte.

El soporte debe aportar valor visible: actualizar precios, imágenes, textos, promociones y datos, además de revisar el funcionamiento del sitio.

## 2. Acuerdos para la prueba

- Todos los paquetes de sitios pueden contratar soporte, incluido el más económico.
- Presentar sitio + tres meses de soporte como opción principal y recomendada.
- Mantener visible la alternativa de solo sitio, sin mensualidades.
- Ofrecer dos niveles: Esencial y Activo.
- Aplicar un descuento menor en el sitio con Esencial y mayor con Activo.
- Mostrar precio del sitio, mensualidades, fechas y total antes de contratar.
- Obtener autorización expresa para los tres cargos automáticos.
- Probar inicialmente con cinco clientes y medir el tiempo real de atención.
- Los precios de soporte son propuestas aceptadas para validar; falta confirmar costos e impuestos.

## 3. Planes de soporte

| Concepto | Esencial | Activo |
|---|---|---|
| Precio mensual de prueba | $490 MXN | $900 MXN |
| Cambios de contenido | Hasta 45 minutos al mes | Hasta 2 horas al mes |
| Revisión técnica | Incluida, con alcance definido | Incluida, con alcance definido |
| Respaldos | Incluidos, con alcance definido | Incluidos, con alcance definido |
| Uso previsto | Actualizaciones ocasionales | Promociones y actualizaciones frecuentes |
| Soporte durante tres meses, antes de definir tratamiento fiscal | $1,470 MXN | $2,700 MXN |

Las bolsas de tiempo sustituyen las propuestas anteriores de contar solicitudes. Se pueden agrupar varios ajustes pequeños en una misma entrega. No se ofrece trabajo ilimitado.

### Cambios incluidos propuestos

- Textos de servicios, horarios, descripciones y datos de contacto.
- Precios, menús y tarifas en secciones existentes.
- Sustitución de fotos, imágenes o banners entregados por el cliente.
- Colocación y retiro de promociones en espacios existentes.
- Altas o cambios de productos y servicios usando componentes ya construidos, dentro del tiempo disponible.
- Revisión de formularios, botones, enlaces y acceso al sitio.
- Mantenimiento técnico menor compatible con la tecnología contratada.
- Resumen mensual de los trabajos realizados.

### Condiciones operativas propuestas; pendientes de cerrar

- El cliente entrega textos e imágenes listos para publicar.
- Registrar minutos de edición, comunicación y tareas técnicas por separado.
- Avisar y cotizar antes de superar la bolsa de cambios.
- Horas no acumulables.
- Correcciones de errores propios de entrega no consumen la bolsa.
- Revisión técnica fuera de la bolsa de contenido, con una lista de tareas y un costo interno limitados.
- Como referencia inicial: respuesta en un día hábil y cambios sencillos normalmente en dos días hábiles desde la recepción del material completo. Validar capacidad antes de prometerlo.
- Definir frecuencia, retención, ubicación y alcance de restauración de respaldos según cada infraestructura. La referencia conversada fue semanal y antes de cambios importantes; aún no es una política final.

### Se cotiza por separado

- Páginas o secciones nuevas, rediseños y funcionalidades nuevas.
- Tienda en línea e integraciones.
- Redacción extensa, diseño publicitario, fotografía y campañas.
- Recuperación de sitios previamente dañados.
- Hosting, dominio y licencias, salvo inclusión expresa en la cotización.

## 4. Paquetes de sitios: referencias, no tarifas finales

| Paquete | Alcance ilustrativo | Precio sin soporte utilizado como ejemplo |
|---|---|---:|
| Presencia | Una página breve: servicios, contacto y WhatsApp | $2,900 MXN |
| Landing | Una página más completa con galería y formulario | $4,500 MXN |
| Sitio negocio | Hasta cinco páginas | $7,500 MXN |

Los ejemplos anteriores de precios con descuento ($2,400, $3,800 y $6,500) no quedan fijados: deben recalcularse para los dos niveles de soporte.

El paquete económico debe tener plantilla y alcance inicial definidos. El soporte permite actualizar el contenido; no amplía automáticamente el alcance de construcción.

## 5. Descuentos y rentabilidad

- El descuento debe salir del margen esperado del soporte, después de cubrir tiempo y costos.
- No financiar la construcción con mensualidades futuras que podrían fallar.
- El precio cobrado por el desarrollo debe cubrir su costo.
- Comparar el ahorro con contratar los mismos servicios por separado.
- Evitar anunciar que sitio + soporte es más barato que solo sitio si el total es mayor.

Fórmula de evaluación:

Margen del paquete = ingreso del sitio + soporte efectivamente cobrado − costo de construcción − costo total de atención − infraestructura y licencias atribuibles − comisiones y demás costos aplicables.

Medir también adquisición por publicidad y obligaciones fiscales al evaluar rentabilidad.

## 6. Cobros recurrentes

Propuesta técnica inicial: Stripe Billing para cargos recurrentes a tarjeta. La domiciliación directa a una cuenta bancaria mediante CLABE sería una integración diferente.

- Cobrar construcción y soporte como conceptos identificables.
- Registrar fecha de inicio del soporte; se propuso usar la publicación del sitio.
- Programar tres mensualidades y guardar la aceptación del cliente.
- Utilizar el checkout del proveedor; no guardar números de tarjeta en el CRM.
- Sincronizar estado de pagos mediante notificaciones del proveedor.
- Dejar los reintentos de cobro en la pasarela y prevenir registros duplicados.
- Enviar avisos de cobro fallido y permitir actualizar el medio de pago.
- Definir cancelación, reembolsos y tratamiento del descuento antes de vender.
- La autorización de tarjeta no garantiza el cobro ni sustituye condiciones comerciales claras.

### Decisión pendiente: después de los tres meses

Alternativas:

1. Finalizar automáticamente y ofrecer continuidad antes del vencimiento. Fue la recomendación inicial para la prueba.
2. Continuar mensualmente, con renovación explicada y aceptada desde el inicio y cancelación sencilla.

Ninguna alternativa está confirmada todavía.

Comisiones, disponibilidad, condiciones contractuales y tratamiento fiscal deben verificarse al configurar la cuenta. Un recibo de pago no debe confundirse con la facturación fiscal que corresponda.

## 7. CRM, automatización y correo

Arquitectura recomendada, todavía no implementada ni confirmada como compra:

| Componente | Propuesta | Función |
|---|---|---|
| CRM | EspoCRM | Clientes, oportunidades, tareas y seguimiento |
| Pagos | Stripe Billing | Suscripciones y estado de cobros |
| Automatización | n8n | Conectar eventos, fechas, CRM y correo |
| Correo | Servidor existente indicado por el usuario en Hostinger | Envío SMTP |
| Captación | Landing y formulario | Registrar prospectos y campaña de origen |

Odoo queda como alternativa si más adelante se requiere integrar procesos adicionales. No es necesario adoptar un ERP completo para validar la oferta.

Antes de conectar el servidor de correo, verificar SMTP autenticado, entrega y configuración de SPF, DKIM y DMARC. Su disponibilidad fue reportada por el usuario; no se ha inspeccionado.

### Datos mínimos del CRM

- Contacto, negocio y datos de comunicación.
- Origen y campaña.
- Etapa comercial, responsable y siguiente acción.
- Paquete de sitio y nivel de soporte.
- Fecha de contratación, publicación, inicio y fin del soporte.
- Referencias del cliente y suscripción en la pasarela.
- Estado de pago, sin almacenar datos sensibles de tarjeta.
- Constancia de autorización de cobro y preferencias de comunicación.
- Vencimientos de dominio, hosting y licencias.
- Solicitudes, tiempo consumido y trabajo realizado.

Stripe será la referencia de cobros y el CRM la referencia de atención.

### Automatizaciones propuestas

| Evento | Acción |
|---|---|
| Nuevo interesado | Crear contacto, registrar campaña y asignar seguimiento |
| Cotización enviada | Programar recordatorio y detenerlo al responder o comprar |
| Pago confirmado | Registrar pago, enviar bienvenida y cuestionario |
| Sitio publicado | Registrar inicio del soporte y calendario de cobros |
| Pago fallido | Avisar al cliente y crear tarea interna |
| Cierre mensual | Preparar resumen basado en trabajo real |
| Próximo fin del plan | Ofrecer continuidad |
| Próximo vencimiento de servicios | Enviar aviso según fechas registradas |

Empezar con cobro, registro y seguimiento. Agregar el resto conforme avance la prueba. Separar comunicaciones de servicio de promociones y respetar las preferencias de contacto.

## 8. Implementación por etapas

1. Fijar alcance y precio de cada sitio, costos internos y tratamiento de impuestos.
2. Calcular descuentos de Esencial y Activo.
3. Cerrar condiciones de soporte, calendario, cancelación y final del periodo.
4. Configurar productos y suscripciones en modo de prueba.
5. Crear campos y etapas esenciales en el CRM.
6. Conectar pagos, CRM y correo.
7. Probar compra, pago fallido, cancelación, fin del periodo y eventos duplicados.
8. Preparar landing y anuncio de Facebook e Instagram con precios y condiciones visibles.
9. Incorporar cinco clientes y registrar todo el tiempo dedicado.
10. Ajustar precios, descuentos o alcance antes de aumentar publicidad.

## 9. Indicadores del piloto

- Costo por interesado y por cliente adquirido.
- Conversión a compra y elección de soporte.
- Ingreso efectivamente cobrado.
- Minutos de cambios, atención y revisión técnica por cliente.
- Margen por sitio y por plan.
- Cobros fallidos y cancelaciones.
- Continuidad al cuarto mes.
- Motivos de compra, rechazo y baja.

## 10. Decisiones pendientes antes del anuncio

- [ ] Alcance definitivo y precio de cada sitio.
- [ ] Descuento por sitio y nivel de soporte.
- [ ] Definir si los precios publicados incluyen impuestos.
- [ ] Anticipo y calendario de pago del desarrollo.
- [ ] Inicio de soporte y fechas de las tres mensualidades.
- [ ] Qué sucede al terminar el tercer mes.
- [ ] Condiciones de cancelación, reembolsos e impagos.
- [ ] Política de respaldos y límites de mantenimiento técnico.
- [ ] Plazos de respuesta y entrega.
- [ ] Precio de trabajo adicional.
- [ ] Confirmar plataforma de cobro y CRM.
- [ ] Validar servidor de correo y automatizaciones.
- [ ] Presupuesto y segmento del anuncio piloto.

## 11. Referencias técnicas consultadas durante la planeación

Las capacidades y precios de proveedores deben volver a comprobarse antes de implementar.

- [Stripe México: precios](https://stripe.com/mx/pricing)
- [Stripe Billing: precios](https://stripe.com/mx/billing/pricing)
- [Programación de suscripciones en Stripe](https://docs.stripe.com/billing/subscriptions/subscription-schedules)
- [Funciones de EspoCRM](https://www.espocrm.com/features/)
- [EspoCRM Advanced Pack](https://www.espocrm.com/extensions/advanced-pack/)
- [Envío de correo SMTP en n8n](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.sendemail/)

