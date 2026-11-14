// Fichas de las 8 líneas de servicio. El texto proviene de
// docs/rediseno/04-contenido.md y no se reescribe aquí.
export type Grupo = "Presencia" | "Ventas" | "Operación";

export type Caso = {
  cliente: string;
  giro: string;
  logo: string;
  url: string;
  reto: string;
  hizo: string;
  hoy: string;
};

export type Servicio = {
  slug: string;
  nombre: string;
  eyebrow: string;
  grupo: Grupo;
  icono: string;
  enlace: string;
  resumen: string;
  seo: { titulo: string; descripcion: string };
  hero: {
    h1: string;
    lead: string;
    primario: { texto: string; destino: "whatsapp" | "contacto" };
    secundario: { texto: string; destino: "ancla" | "whatsapp"; valor: string };
  };
  aside: { titulo: string; items: string[]; nota: string };
  problema: { h2: string; parrafos: string[] };
  incluye: { h2: string; items: { titulo: string; texto: string }[] };
  proceso: { h2: string; pasos: { titulo: string; texto: string }[] };
  entregables: { h2: string; items: string[] };
  caso: Caso | null;
  faq: { h2: string; preguntas: { q: string; a: string }[] };
  cierre: { h2: string; texto: string; boton: string };
  whatsapp: string;
  relacionados: string[];
  /**
   * Soporte mensual opcional. Solo lo llevan las líneas donde el cliente se queda
   * con algo que hay que mantener (sitio, tienda). Sin `precio`, el bloque se
   * publica sin cifra y remite a cotización.
   */
  soporte?: {
    h2: string;
    intro: string;
    incluye: string[];
    fuera: string[];
    nota: string;
    precio?: string;
  };
};

export const servicios: Servicio[] = [
  {
    slug: "sitio-web",
    nombre: "Sitio web",
    eyebrow: "Presencia · Sitio web",
    grupo: "Presencia",
    icono: "sitio",
    enlace: "Ver sitio web",
    resumen:
      "Tu negocio visible, claro y con la información que el cliente busca antes de llamar.",
    seo: {
      titulo: "Diseño de páginas web en Guadalajara | VEIA",
      descripcion:
        "Sitios web a medida con tu dominio, textos, medición y ficha de Google. Trato directo con quien los hace. Cotiza tu proyecto.",
    },
    hero: {
      h1: "Que te encuentren y lleguen [convencidos].",
      lead: "Diseñamos y desarrollamos el sitio con tu dominio, tus textos y un objetivo claro: que quien te busque entienda qué haces y te escriba. Incluye ficha de Google y medición de contactos.",
      primario: { texto: "Cotiza tu sitio", destino: "whatsapp" },
      secundario: { texto: "Ver cómo trabajamos", destino: "ancla", valor: "#proceso" },
    },
    aside: {
      titulo: "Ideal si…",
      items: [
        "Te buscan en Google y encuentran un perfil de Facebook de 2019.",
        "Tienes sitio, pero no dice a qué te dedicas ni cómo contactarte.",
        "Quieres mostrar tu catálogo o portafolio sin depender de redes.",
      ],
      nota: "Tiempo estimado: desde 5 días hábiles en un sitio simple; de 3 a 5 semanas en uno corporativo, contado desde que tenemos textos, fotos y accesos.",
    },
    problema: {
      h2: "Tener página no es lo mismo que tener presencia.",
      parrafos: [
        "Hay negocios que ya tienen sitio y siguen mandando el enlace con una disculpa: «está viejo, pero ahí están mis datos». El visitante entra, no entiende qué venden, no encuentra horarios y se va con la competencia que sí lo explica en la primera pantalla.",
        "El otro extremo es no existir. Todo llega por recomendación y WhatsApp, y cuando alguien busca el nombre del negocio encuentra un perfil abandonado o nada. Ahí se pierde la primera conversación antes de que ocurra.",
      ],
    },
    incluye: {
      h2: "Qué incluye",
      items: [
        { titulo: "Arquitectura de contenido", texto: "Definimos qué va en cada página y qué debe hacer el visitante." },
        { titulo: "Diseño a tu medida", texto: "Sobre tu identidad actual; si no hay, la ajustamos al proyecto." },
        { titulo: "Textos base", texto: "Redactamos el contenido con lo que nos cuentes del negocio." },
        { titulo: "Desarrollo responsivo", texto: "Se ve y funciona igual en celular, tableta y computadora." },
        { titulo: "Dominio y ficha de Google", texto: "Configuramos DNS, HTTPS y tu perfil de Google Business." },
        { titulo: "Medición de contactos", texto: "Search Console y eventos de contacto para saber qué pasa." },
      ],
    },
    proceso: {
      h2: "Cómo se hace",
      pasos: [
        { titulo: "Descubrimiento", texto: "Una sesión para definir a quién le hablas y qué quieres que haga el visitante." },
        { titulo: "Contenido y diseño", texto: "Mapa del sitio, textos y propuesta visual; apruebas antes de programar." },
        { titulo: "Desarrollo", texto: "Se construye en un ambiente de prueba que puedes abrir y revisar." },
        { titulo: "Publicación", texto: "Sale a tu dominio, con HTTPS, analítica y una sesión de uso." },
      ],
    },
    entregables: {
      h2: "Qué recibes",
      items: [
        "Dominio y hosting a tu nombre, con los accesos documentados.",
        "El sitio publicado, con HTTPS y correo configurado si aplica.",
        "Search Console y analítica instaladas en tus cuentas.",
        "Ficha de Google Business Profile verificada o corregida.",
        "Sesión de capacitación grabada y guía breve para editar.",
      ],
    },
    soporte: {
      h2: "Soporte mensual, si lo quieres",
      intro:
        "Al entregar, el sitio queda a tu nombre y puedes operarlo tú. Si prefieres no estar cambiando textos ni pendiente de respaldos, hay un plan de soporte mensual opcional: una bolsa de cambios de contenido, revisión técnica y respaldo, con respuesta en horario hábil. Arranca con tres meses y después sigue mes a mes; si no lo quieres, el sitio se queda documentado y sin mensualidad.",
      incluye: [
        "Cambios de contenido en lo que ya existe: textos, precios, horarios, datos de contacto, fotos y banners que tú entregues.",
        "Publicar y retirar promociones o avisos en los espacios que el sitio ya tiene.",
        "Altas y cambios de servicios o productos usando los componentes ya construidos.",
        "Revisión de formularios, botones, enlaces y accesos, más mantenimiento técnico menor.",
        "Actualizaciones de seguridad y respaldo del sitio, con prueba de que la copia restaura.",
        "Resumen mensual de lo que se hizo, para ver en qué se usó la bolsa.",
      ],
      fuera: [
        "Páginas, secciones o funciones nuevas.",
        "Rediseños y cambios de estructura o de navegación.",
        "Integraciones con otros sistemas (pagos, CRM, ERP, facturación).",
        "Campañas, contenido para redes, sesiones de foto o video.",
      ],
      precio: "$1,200 MXN al mes",
      nota: "Lunes a viernes, 9:00–18:00 (hora CDMX), con respuesta de hasta 4 horas hábiles; los cambios sencillos se publican en dos días hábiles desde que tenemos el material completo. La bolsa no se acumula de un mes a otro y lo que se salga se cotiza antes de hacerlo. Los errores de nuestra entrega no consumen bolsa.",
    },
    caso: {
      cliente: "SANHER Bienes Raíces",
      giro: "Bienes raíces · Guadalajara",
      logo: "images/logo-sanher.svg",
      url: "https://sanherbienesraices.com/",
      reto: "Sus propiedades se movían por portales y recomendación; no tenían un sitio propio donde concentrar inventario y contacto.",
      hizo: "Landing con propiedades destacadas, información de la inmobiliaria, formulario y WhatsApp directo, más SEO y presencia en Google.",
      hoy: "El sitio está en línea en su propio dominio, con las propiedades, el formulario y el WhatsApp a la mano.",
    },
    faq: {
      h2: "Dudas frecuentes",
      preguntas: [
        { q: "¿Quién escribe los textos?", a: "Los redactamos a partir de una sesión y de tu material. Tú los revisas y apruebas antes de publicar." },
        { q: "¿Puedo editar el sitio después?", a: "Sí. Entregamos accesos de administrador y una sesión grabada. Si prefieres no tocar nada, hay soporte mensual opcional." },
        { q: "¿El sitio es mío?", a: "Sí: dominio, hosting y contenido quedan a tu nombre. Al liquidar el proyecto se entregan los accesos; cualquier retención por adeudo se pacta por escrito en el contrato." },
        { q: "¿Cuánto tarda?", a: "Tiempo estimado: un sitio de una página, desde 5 días hábiles; uno corporativo, de 3 a 5 semanas. El reloj empieza cuando tenemos textos, fotos y accesos." },
      ],
    },
    cierre: {
      h2: "Tu sitio puede estar en línea este mes.",
      texto: "Cuéntanos qué hace tu negocio y a quién le vende. Te decimos qué páginas necesita y qué podemos resolver con lo que ya tienes.",
      boton: "Cotiza tu sitio",
    },
    whatsapp: "Hola, quiero cotizar un sitio web para mi negocio.",
    relacionados: ["ecommerce", "publicidad", "diseno"],
  },
  {
    slug: "ecommerce",
    nombre: "Tienda en línea",
    eyebrow: "Ventas · Tienda en línea",
    grupo: "Ventas",
    icono: "tienda",
    enlace: "Ver tienda en línea",
    resumen:
      "Cobra, controla inventario y deja de depender de que alguien conteste el WhatsApp.",
    seo: {
      titulo: "Tienda en línea para tu negocio | VEIA",
      descripcion:
        "Catálogo, carrito, pagos e inventario conectados a tu operación. Implementación y campañas de lanzamiento. Cotiza.",
    },
    hero: {
      h1: "Vender en línea sin perder el [control].",
      lead: "Montamos la tienda con catálogo, carrito, pagos y envíos, conectada al inventario que ya usas. No es una página bonita: es una operación que puedes atender.",
      primario: { texto: "Cotiza tu tienda", destino: "whatsapp" },
      secundario: { texto: "Ver el proceso", destino: "ancla", valor: "#proceso" },
    },
    aside: {
      titulo: "Ideal si…",
      items: [
        "Vendes por WhatsApp con fotos que se repiten y nadie sabe qué queda.",
        "Tienes catálogo físico y quieres cobrar en línea o contra pedido.",
        "Necesitas variantes (talla, color, medida) y control de existencias.",
      ],
      nota: "Tiempo estimado: de 3 a 6 semanas en una tienda nueva; de 5 a 10 semanas si hay migración con catálogo grande.",
    },
    problema: {
      h2: "Vender por WhatsApp funciona hasta que deja de funcionar.",
      parrafos: [
        "Al principio alcanza: mandas fotos, cotizas, cobras por transferencia y anotas el pedido en un cuaderno. Cuando llegan diez conversaciones al mismo tiempo, algo se cae: un pedido que no se surtió, un precio que cambió, un cliente que preguntó tres veces lo mismo.",
        "Y no hay forma de saber qué producto se mueve. El inventario vive en la cabeza de quien despacha. Si esa persona falta, la tienda se detiene.",
      ],
    },
    incluye: {
      h2: "Qué incluye",
      items: [
        { titulo: "Catálogo con variantes", texto: "Talla, color o medida, con precio y existencias por separado." },
        { titulo: "Carrito y cobro", texto: "Pago en línea con Mercado Pago, Stripe o Conekta, o contra pedido." },
        { titulo: "Envíos y recolección", texto: "Reglas de envío, paqueterías y recolección en tienda." },
        { titulo: "Inventario y pedidos", texto: "Un panel para ver qué entró, qué salió y qué falta." },
        { titulo: "Facturación CFDI", texto: "Timbrado integrado; tu contador valida el régimen fiscal." },
        { titulo: "Medición de conversión", texto: "Sabes qué producto se ve, qué se agrega y qué se paga." },
      ],
    },
    proceso: {
      h2: "Cómo se hace",
      pasos: [
        { titulo: "Modelo de venta", texto: "Catálogo, envíos, impuestos y devoluciones definidos antes de montar." },
        { titulo: "Tienda base", texto: "Plataforma y tema configurados con tu identidad y un catálogo de prueba." },
        { titulo: "Carga y pagos", texto: "Productos, fotos y pasarela probados en modo de prueba." },
        { titulo: "Lanzamiento", texto: "Compras de prueba, CFDI y correos; después, campañas y capacitación." },
      ],
    },
    entregables: {
      h2: "Qué recibes",
      items: [
        "Tienda publicada en tu dominio, con pagos en modo productivo.",
        "Panel de pedidos e inventario con accesos de administrador.",
        "Catálogo cargado según la plantilla que nos entregues.",
        "Pasarela y facturación configuradas en tus cuentas.",
        "Capacitación de operación: altas, pedidos, devoluciones y reportes.",
      ],
    },
    soporte: {
      h2: "Soporte mensual, si lo quieres",
      intro:
        "La tienda queda a tu nombre y la puedes operar tú. El soporte mensual opcional es para cuando prefieres que alguien más cargue productos, ajuste precios y revise que el cobro siga funcionando: una bolsa de cambios, revisión técnica y respaldo, con respuesta en horario hábil. Arranca con tres meses y después sigue mes a mes; sin soporte, la tienda se entrega documentada y sin mensualidad.",
      incluye: [
        "Altas y cambios de productos: precio, fotos, variantes, existencias y categorías.",
        "Publicar y retirar promociones, cupones y avisos en los espacios que ya existen.",
        "Revisión de la compra de punta a punta: carrito, pasarela, correos de pedido y facturación.",
        "Corrección de errores en el catálogo o en los enlaces de pago.",
        "Actualizaciones de seguridad y respaldo de tienda y base de datos, con prueba de restauración.",
        "Resumen mensual de lo que se hizo y de los pedidos que fallaron.",
      ],
      fuera: [
        "Funciones nuevas (apartado, mayoreo, suscripciones, multi-tienda).",
        "Integraciones nuevas con paqueterías, ERP o puntos de venta.",
        "Carga masiva de catálogos y migraciones.",
        "Rediseños, fotografía de producto y campañas.",
      ],
      precio: "$1,200 MXN al mes",
      nota: "Lunes a viernes, 9:00–18:00 (hora CDMX), con respuesta de hasta 4 horas hábiles. La bolsa no se acumula de un mes a otro y lo que se salga se cotiza antes de hacerlo. Una caída de la tienda por nuestra configuración se atiende fuera de la bolsa, sin costo.",
    },
    caso: null,
    faq: {
      h2: "Dudas frecuentes",
      preguntas: [
        { q: "¿Shopify o WooCommerce?", a: "Depende. Shopify si vendes retail y quieres menos mantenimiento; WooCommerce si ya tienes WordPress y un catálogo acotado. Te decimos cuál conviene y por qué." },
        { q: "¿Puedo cobrar con mi cuenta actual?", a: "Sí, si tu pasarela permite integración. Revisamos comisiones y requisitos del giro antes de configurar." },
        { q: "¿Quién carga los productos?", a: "Puedes hacerlo tú con la plantilla, o lo hacemos nosotros con tu catálogo. La carga masiva se cotiza aparte." },
        { q: "¿Necesito facturar?", a: "Si vendes a empresas o lo pide tu régimen, integramos CFDI 4.0. Las reglas fiscales las valida tu contador." },
      ],
    },
    cierre: {
      h2: "Tu catálogo puede estar cobrando en línea.",
      texto: "Dinos cuántos productos tienes, cómo cobras hoy y quién despacha. Con eso te decimos qué plataforma conviene y qué falta para abrir.",
      boton: "Cotiza tu tienda",
    },
    whatsapp: "Hola, quiero cotizar una tienda en línea para mi negocio.",
    relacionados: ["crm", "sitio-web", "publicidad"],
  },
  {
    slug: "diseno",
    nombre: "Marca y diseño",
    eyebrow: "Presencia · Marca y diseño",
    grupo: "Presencia",
    icono: "diseno",
    enlace: "Ver marca y diseño",
    resumen:
      "Identidad, material impreso y plantillas para que todo se vea del mismo negocio.",
    seo: {
      titulo: "Diseño de identidad visual y marca | VEIA",
      descripcion:
        "Logotipo, paleta, tipografías y piezas aplicadas. Identidad coherente para tu negocio. Solicita una cotización.",
    },
    hero: {
      h1: "Que todo lo que sale se vea del mismo [negocio].",
      lead: "Ordenamos tu identidad: logotipo, colores, tipografías y las piezas de todos los días. Para que un menú, una publicación y una cotización parezcan de la misma empresa.",
      primario: { texto: "Pide tu identidad", destino: "whatsapp" },
      secundario: { texto: "Ver qué incluye", destino: "ancla", valor: "#incluye" },
    },
    aside: {
      titulo: "Ideal si…",
      items: [
        "Tu logo tiene diez años o lo hizo un familiar.",
        "Cada quien usa una tipografía y un color distintos.",
        "Vas a abrir un negocio y quieres arrancar con base.",
      ],
      nota: "Tiempo estimado: de 3 a 6 semanas para una identidad completa. Piezas sueltas, según volumen.",
    },
    problema: {
      h2: "El desorden visual también cuesta ventas.",
      parrafos: [
        "Un negocio puede ser serio y aun así parecer improvisado: logo pixeleado en la fachada, tipografías distintas en cada publicación, colores que cambian según quién hizo el diseño. El cliente no lo dice, pero lo registra.",
        "Cada pieza nueva empieza de cero porque no hay reglas. Se paga dos veces: una por el diseño suelto y otra por corregir lo que salió mal.",
      ],
    },
    incluye: {
      h2: "Qué incluye",
      items: [
        { titulo: "Logotipo y versiones", texto: "Principal, horizontal, monocromo y usos mínimos." },
        { titulo: "Paleta y tipografías", texto: "Colores con códigos y fuentes con licencia definida." },
        { titulo: "Papelería", texto: "Tarjeta, firma de correo y hoja membretada." },
        { titulo: "Plantillas para redes", texto: "Publicaciones y portadas editables por tu equipo." },
        { titulo: "Menú, catálogo o brochure", texto: "La pieza que usas a diario, con jerarquía clara." },
        { titulo: "Guía breve de uso", texto: "Qué se puede hacer y qué no, en pocas páginas." },
      ],
    },
    proceso: {
      h2: "Cómo se hace",
      pasos: [
        { titulo: "Revisión de marca", texto: "Qué tienes, qué funciona y qué conviene conservar." },
        { titulo: "Ruta visual", texto: "Dos o tres direcciones para elegir antes de detallar." },
        { titulo: "Sistema", texto: "Logo, color, tipografía y piezas base ya aplicadas." },
        { titulo: "Entrega y guía", texto: "Archivos editables, versiones y reglas de uso." },
      ],
    },
    entregables: {
      h2: "Qué recibes",
      items: [
        "Archivos vectoriales del logotipo y sus versiones.",
        "Paleta con códigos HEX, CMYK y Pantone cuando aplique.",
        "Tipografías licenciadas o alternativas libres equivalentes.",
        "Plantillas editables y piezas base en los formatos acordados.",
        "Guía de uso breve y sesión de traspaso con quien diseñe después.",
      ],
    },
    caso: null,
    faq: {
      h2: "Dudas frecuentes",
      preguntas: [
        { q: "¿Puedo conservar mi logo actual?", a: "Sí. Si funciona, lo ordenamos: versiones, mínimos y usos. No cambiamos por cambiar." },
        { q: "¿Cuántas propuestas incluyen?", a: "Dos o tres rutas y dos rondas de ajuste. Los cambios fuera de eso se cotizan." },
        { q: "¿Entregan archivos editables?", a: "Sí: vectores, fuentes y plantillas. Son tuyos y quedan documentados." },
        { q: "¿También imprimen?", a: "Diseñamos y dejamos listo para imprenta. La impresión la cotiza tu proveedor; podemos recomendar uno." },
      ],
    },
    cierre: {
      h2: "Deja de improvisar cada pieza.",
      texto: "Cuéntanos qué vendes y dónde te ven tus clientes. Con eso definimos si necesitas identidad completa o solo ordenar las piezas que ya tienes.",
      boton: "Pide tu identidad",
    },
    whatsapp: "Hola, quiero cotizar el diseño de mi identidad.",
    relacionados: ["sitio-web", "publicidad", "ecommerce"],
  },
  {
    slug: "publicidad",
    nombre: "Publicidad",
    eyebrow: "Presencia · Publicidad",
    grupo: "Presencia",
    icono: "publicidad",
    enlace: "Ver publicidad",
    resumen: "Campañas en Google y Meta medidas en clientes, no en likes.",
    seo: {
      titulo: "Publicidad en Meta y Google | VEIA",
      descripcion:
        "Campañas con audiencia, medición y reporte quincenal. Sabes cuánto entra y qué anuncio lo trajo. Hablemos.",
    },
    hero: {
      h1: "Saber qué anuncio trajo al [cliente].",
      lead: "Armamos y damos seguimiento a campañas en Meta y Google, con medición instalada. La pregunta deja de ser «¿funcionó?» y pasa a ser «¿cuánto costó y qué regresó?».",
      primario: { texto: "Revisemos tu campaña", destino: "contacto" },
      secundario: { texto: "Ver el proceso", destino: "ancla", valor: "#proceso" },
    },
    aside: {
      titulo: "Ideal si…",
      items: [
        "Ya inviertes en anuncios y no sabes qué regresó.",
        "Tienes oferta clara y puedes atender más demanda.",
        "Tu sitio no mide clics, formularios ni mensajes de WhatsApp.",
      ],
      nota: "Tiempo estimado: de 2 a 3 semanas para la primera campaña, contando medición. La inversión en anuncios va aparte y se paga a tu nombre.",
    },
    problema: {
      h2: "Impulsar publicaciones no es una campaña.",
      parrafos: [
        "Meter dinero a «impulsar» es fácil. Difícil es saber si el anuncio trajo a alguien que compró o solo likes de gente que nunca va a comprar. Sin medición, cada peso es una apuesta.",
        "También pasa lo contrario: campañas que funcionan y nadie atiende. Si el negocio tarda dos días en contestar un mensaje, el presupuesto se gastó en un prospecto que ya se fue.",
      ],
    },
    incluye: {
      h2: "Qué incluye",
      items: [
        { titulo: "Oferta y audiencia", texto: "Qué vendes, a quién y con qué mensaje, antes de pautar." },
        { titulo: "Campañas en Meta", texto: "Estructura, públicos y creatividades con prueba." },
        { titulo: "Campañas en Google", texto: "Búsqueda y rendimiento según lo que la gente busca." },
        { titulo: "Piezas de anuncio", texto: "Textos e imágenes en los formatos de cada plataforma." },
        { titulo: "Medición instalada en tus cuentas", texto: "GA4, conversiones y eventos de WhatsApp o formulario." },
        { titulo: "Reporte quincenal", texto: "Lectura de resultados y siguiente decisión, no capturas." },
      ],
    },
    proceso: {
      h2: "Cómo se hace",
      pasos: [
        { titulo: "Auditoría", texto: "Qué mides hoy, qué falta y qué acción vale dinero." },
        { titulo: "Plan", texto: "Oferta, audiencia, presupuesto y estructura de campaña." },
        { titulo: "Montaje", texto: "Piezas, públicos y medición probados antes de encender." },
        { titulo: "Lectura y ajuste", texto: "Revisión quincenal: qué se apaga y qué se escala." },
      ],
    },
    entregables: {
      h2: "Qué recibes",
      items: [
        "Cuentas de anuncios a tu nombre, con accesos de administrador.",
        "Medición configurada: GA4, conversiones y eventos.",
        "Piezas de anuncio en los formatos usados.",
        "Reporte quincenal con lectura y recomendación.",
        "Sesión para que tu equipo revise el tablero.",
      ],
    },
    caso: null,
    faq: {
      h2: "Dudas frecuentes",
      preguntas: [
        { q: "¿Cuánto hay que invertir?", a: "La inversión en anuncios la defines tú y se paga directo a la plataforma. Nuestro trabajo se cotiza aparte, según alcance." },
        { q: "¿Garantizan ventas?", a: "No. El resultado de una campaña depende de la oferta, el mercado y la atención. Nos comprometemos a entregar medición, lectura y ajustes documentados." },
        { q: "¿Manejan las redes sociales?", a: "No como servicio principal. Hacemos campañas pagadas y las piezas que necesitan; la operación diaria de redes no está incluida." },
        { q: "¿Qué necesito de mi lado?", a: "Alguien que conteste mensajes en el día y capacidad de atender la demanda. Si no, la campaña solo acelera el problema." },
      ],
    },
    cierre: {
      h2: "Antes de invertir más, mide lo que ya gastaste.",
      texto: "Revisamos tus cuentas y te decimos qué está midiendo mal y qué conviene cambiar. Si no hay nada que sostener, también te lo decimos.",
      boton: "Revisemos tu campaña",
    },
    whatsapp: "Hola, quiero revisar mis campañas de publicidad.",
    relacionados: ["sitio-web", "ecommerce", "crm"],
  },
  {
    slug: "equipo-de-computo",
    nombre: "Equipo de cómputo",
    eyebrow: "Operación · Equipo de cómputo",
    grupo: "Operación",
    icono: "equipo",
    enlace: "Ver equipo de cómputo",
    resumen:
      "Venta, configuración y soporte de las computadoras y la red del negocio.",
    seo: {
      titulo: "Equipo de cómputo y soporte técnico | VEIA",
      descripcion:
        "Suministro, configuración, respaldo y mantenimiento para oficinas. Tiempos de respuesta acordados por escrito.",
    },
    hero: {
      h1: "La computadora correcta y alguien que la [mantenga].",
      lead: "Suministramos el equipo, lo configuramos y nos quedamos para el mantenimiento. Red, respaldos y soporte con tiempos de respuesta por escrito, no con promesas de «ahorita».",
      primario: { texto: "Cotiza equipo o soporte", destino: "whatsapp" },
      secundario: { texto: "Ver qué incluye", destino: "ancla", valor: "#incluye" },
    },
    aside: {
      titulo: "Ideal si…",
      items: [
        "Compras equipos al aventón y nadie los configura igual.",
        "No hay respaldo y ya perdiste información una vez.",
        "Cuando algo falla, cada quien llama a un técnico distinto.",
      ],
      nota: "Suministro: de 1 a 2 semanas según stock. Soporte: L–V, 9:00–18:00.",
    },
    problema: {
      h2: "El equipo no es el problema; la falta de dueño sí.",
      parrafos: [
        "Una oficina con diez computadoras compradas en tres momentos distintos tiene diez configuraciones distintas. Nadie sabe cuál tiene garantía, cuál respalda y cuál ya no actualiza.",
        "Cuando falla la de cobranza, se resuelve como se puede: con el sobrino, con el técnico de la esquina o comprando otra a las prisas. Sale más caro que haber tenido a alguien encargado.",
      ],
    },
    incluye: {
      h2: "Qué incluye",
      items: [
        { titulo: "Diagnóstico de equipo", texto: "Qué tienes, qué edad y qué conviene reemplazar." },
        { titulo: "Suministro con garantía", texto: "Equipo nuevo o reacondicionado declarado, nunca sin aviso." },
        { titulo: "Configuración e instalación", texto: "Usuario, correo, software, impresoras y red." },
        { titulo: "Respaldo y antivirus", texto: "Copia automática y restauración probada, no solo configurada." },
        { titulo: "Red y Wi-Fi", texto: "Router, switch y Wi-Fi con red de invitados separada." },
        { titulo: "Mantenimiento y soporte", texto: "Preventivo programado y correctivo con tiempo acordado." },
      ],
    },
    proceso: {
      h2: "Cómo se hace",
      pasos: [
        { titulo: "Levantamiento", texto: "Cuántos equipos y usuarios, y qué software es indispensable." },
        { titulo: "Propuesta", texto: "Qué se compra, qué se conserva y qué cuesta cada opción." },
        { titulo: "Entrega", texto: "Configuración, etiquetado de inventario y prueba con el usuario." },
        { titulo: "Soporte", texto: "Canal definido, tiempos por escrito y revisión periódica." },
      ],
    },
    entregables: {
      h2: "Qué recibes",
      items: [
        "Inventario de equipo: serie, usuario, compra y fin de garantía.",
        "Equipos configurados y probados con el software del negocio.",
        "Respaldo activo con una restauración de prueba.",
        "Acuerdo de soporte con tiempos de respuesta.",
        "Documentación de red, contraseñas en gestor y contactos de garantía.",
      ],
    },
    caso: null,
    faq: {
      h2: "Dudas frecuentes",
      preguntas: [
        { q: "¿Venden equipo reacondicionado?", a: "Sí, solo si se declara y el cliente lo acepta. No entregamos equipo usado como nuevo ni armamos clones." },
        { q: "¿Cubren soporte 24/7?", a: "No. El horario es L–V, 9:00–18:00, con respuesta de hasta 4 horas hábiles. La guardia fuera de horario solo con contrato aparte." },
        { q: "¿Reparan computadoras?", a: "Configuramos, mantenemos y tramitamos la garantía del fabricante. La reparación a nivel componente se deriva a un proveedor local." },
        { q: "¿Puedo comprar solo una laptop?", a: "Podemos cotizarla, pero sin contexto de uso no aportamos mucho: eso se resuelve en tienda. Nuestro valor está en el conjunto y el soporte." },
      ],
    },
    cierre: {
      h2: "Deja de apagar incendios con la computadora.",
      texto: "Dinos cuántos equipos tienes, cuántos usuarios y qué pasa cuando algo falla. Te proponemos qué reemplazar, qué conservar y cómo darle soporte.",
      boton: "Cotiza equipo o soporte",
    },
    whatsapp: "Hola, quiero cotizar equipo de cómputo y soporte.",
    relacionados: ["erp", "crm", "desarrollo-a-medida"],
  },
  {
    slug: "crm",
    nombre: "CRM",
    eyebrow: "Ventas · CRM",
    grupo: "Ventas",
    icono: "crm",
    enlace: "Ver CRM",
    resumen:
      "Sabes a quién le cotizaste, qué quedó pendiente y cuándo volver a llamar.",
    seo: {
      titulo: "Implementación de CRM para pymes | VEIA",
      descripcion:
        "Ordena prospectos, seguimiento y equipo comercial en un solo lugar. HubSpot, Zoho u Odoo, con capacitación.",
    },
    hero: {
      h1: "Un CRM que tu equipo [sí] va a usar.",
      lead: "Configuramos HubSpot, Zoho u Odoo CRM según cómo vende tu equipo. El objetivo no es tener la herramienta: es que nadie vuelva a preguntar a quién le tocaba llamar.",
      primario: { texto: "Agenda un diagnóstico", destino: "contacto" },
      secundario: { texto: "Preguntar por WhatsApp", destino: "whatsapp", valor: "" },
    },
    aside: {
      titulo: "Ideal si…",
      items: [
        "Las cotizaciones se pierden entre WhatsApp y la libreta.",
        "Nadie sabe qué cliente quedó pendiente de seguimiento.",
        "El reporte de ventas se arma a mano cada mes.",
      ],
      nota: "Tiempo estimado: de 2 a 6 semanas, según equipo y datos. Licencias aparte, a tu nombre.",
    },
    problema: {
      h2: "El seguimiento no se pierde por falta de software.",
      parrafos: [
        "Se pierde porque vive en tres celulares y en la cabeza de cada vendedor. Cuando alguien sale, se va con él la lista de a quién le tocaba llamada y qué se le prometió.",
        "Comprar un CRM no lo arregla. Si el equipo sigue registrando en WhatsApp porque el sistema pide ocho campos, vuelve el mismo problema con una licencia mensual encima.",
      ],
    },
    incluye: {
      h2: "Qué incluye",
      items: [
        { titulo: "Mapeo del proceso", texto: "Cómo vende hoy tu equipo, etapa por etapa." },
        { titulo: "Plataforma elegida", texto: "HubSpot, Zoho u Odoo, según tamaño y presupuesto." },
        { titulo: "Etapas y campos", texto: "Lo necesario para trabajar, no un formulario infinito." },
        { titulo: "Conexión con WhatsApp", texto: "La conversación queda ligada al contacto." },
        { titulo: "Migración de contactos", texto: "Limpieza y carga de lo que ya tienes." },
        { titulo: "Capacitación y manual", texto: "Dos sesiones y una guía corta en español." },
      ],
    },
    proceso: {
      h2: "Cómo se hace",
      pasos: [
        { titulo: "Diagnóstico comercial", texto: "Quién vende, cómo y dónde se pierde el seguimiento." },
        { titulo: "Configuración", texto: "Etapas, permisos, plantillas y campos mínimos." },
        { titulo: "Migración y pruebas", texto: "Contactos depurados y flujo probado con el equipo." },
        { titulo: "Adopción", texto: "Capacitación, revisión a 30 días y ajustes." },
      ],
    },
    entregables: {
      h2: "Qué recibes",
      items: [
        "CRM configurado en tu cuenta, con usuarios y permisos reales.",
        "Base de contactos depurada e importada.",
        "Plantillas de mensaje y correo con tu marca.",
        "Tablero de avance comercial y reporte base.",
        "Manual breve y grabación de las sesiones.",
      ],
    },
    caso: null,
    faq: {
      h2: "Dudas frecuentes",
      preguntas: [
        { q: "¿HubSpot, Zoho u Odoo?", a: "HubSpot si el proceso es simple y quieres ecosistema; Zoho si el costo pesa; Odoo si después viene inventario o facturación. Se decide con tu caso, no con el catálogo." },
        { q: "¿Es un CRM a la medida?", a: "No. Implementamos una plataforma existente y la configuramos a tu proceso. Si el proceso no cabe, se evalúa desarrollo a medida y se dice por qué." },
        { q: "¿Cuánto cuesta la licencia?", a: "Depende del número de usuarios y del plan; se paga directo al proveedor. Te ayudamos a dimensionarla para no comprar de más." },
        { q: "¿Y si nadie lo usa?", a: "Es el riesgo real. Por eso capacitamos a dos personas clave y revisamos adopción a los 30 días. Sin uso, el CRM no sirve." },
      ],
    },
    cierre: {
      h2: "Ordena el seguimiento antes de contratar más vendedores.",
      texto: "Cuéntanos cuántos venden, dónde están hoy los contactos y qué se pierde. Con eso decidimos si alcanza con una plataforma o hace falta otra cosa.",
      boton: "Agenda un diagnóstico",
    },
    whatsapp: "Hola, quiero ordenar el seguimiento de clientes con un CRM.",
    relacionados: ["erp", "desarrollo-a-medida", "ecommerce"],
  },
  {
    slug: "erp",
    nombre: "ERP",
    eyebrow: "Operación · ERP",
    grupo: "Operación",
    icono: "erp",
    enlace: "Ver ERP",
    resumen:
      "Inventario, compras, ventas y reportes conectados, sin capturar lo mismo tres veces.",
    seo: {
      titulo: "Implementación de ERP para pymes | VEIA",
      descripcion:
        "Inventario, compras, ventas y finanzas en un solo sistema. Implementación por módulos con acompañamiento.",
    },
    hero: {
      h1: "Un solo dato para inventario, ventas y [finanzas].",
      lead: "Implementamos Odoo por módulos, con localización México y acompañamiento en el primer cierre. No vendemos un ERP completo en cuatro semanas: ordenamos por olas.",
      primario: { texto: "Hablemos de tu operación", destino: "contacto" },
      secundario: { texto: "Ver cómo se implementa", destino: "ancla", valor: "#proceso" },
    },
    aside: {
      titulo: "Ideal si…",
      items: [
        "Tienes cinco hojas de cálculo que no cuadran entre sí.",
        "El cierre de mes depende de una sola persona.",
        "Varias sucursales y nadie ve el inventario completo.",
      ],
      nota: "Tiempo estimado: de 6 a 16 semanas por ola. Requiere un líder interno con tiempo.",
    },
    problema: {
      h2: "Cuando el negocio crece, el Excel se queda chico.",
      parrafos: [
        "Al principio una hoja resuelve todo. Después aparece la segunda sucursal, el segundo vendedor y la segunda versión del archivo. Cada área tiene su verdad y ninguna coincide al cierre.",
        "El dueño termina siendo el integrador de datos: pide reportes, los compara y decide con información de ayer. Eso funciona hasta que deja de funcionar.",
      ],
    },
    incluye: {
      h2: "Qué incluye",
      items: [
        { titulo: "Diagnóstico por proceso", texto: "Qué duele más: inventario, cobranza o facturación." },
        { titulo: "Alcance por módulos", texto: "Se empieza por lo que más pesa, no por todo." },
        { titulo: "Odoo con CFDI", texto: "Localización México y facturación integrada." },
        { titulo: "Migración de datos", texto: "Productos, clientes, saldos y almacenes depurados." },
        { titulo: "Pruebas por proceso", texto: "Venta, compra y pago probados antes de salir." },
        { titulo: "Capacitación por rol", texto: "Cada área aprende lo que va a usar." },
      ],
    },
    proceso: {
      h2: "Cómo se hace",
      pasos: [
        { titulo: "Levantamiento", texto: "Procesos actuales, sistemas y brechas documentadas." },
        { titulo: "Alcance por ola", texto: "Qué módulos entran primero y qué se deja para después." },
        { titulo: "Configuración y carga", texto: "Empresa, impuestos, productos y datos maestros." },
        { titulo: "Salida y cierre", texto: "Producción por etapas y acompañamiento en el primer cierre." },
      ],
    },
    entregables: {
      h2: "Qué recibes",
      items: [
        "Sistema configurado con empresa, impuestos y almacenes.",
        "Datos maestros migrados y conciliados por escrito.",
        "Facturación CFDI operando en tus cuentas.",
        "Capacitación por rol y manual breve.",
        "Acompañamiento en el primer cierre de mes.",
      ],
    },
    caso: null,
    faq: {
      h2: "Dudas frecuentes",
      preguntas: [
        { q: "¿Es Odoo u otro sistema?", a: "Odoo es la base habitual por costo y módulos. Si ya usas SAP B1, Contpaqi o Alegra, se evalúa integración en lugar de reemplazo." },
        { q: "¿Cuánto tarda?", a: "De 6 a 16 semanas por ola, según módulos y calidad de los datos. No prometemos un ERP completo en un mes." },
        { q: "¿Incluye contabilidad?", a: "Configuramos el sistema y la facturación; la contabilidad la valida tu contador. No sustituimos su criterio." },
        { q: "¿Qué necesito poner de mi lado?", a: "Un líder interno con tiempo, catálogo de productos, saldos iniciales y tu contador en la mesa. Sin eso, el proyecto se detiene." },
      ],
    },
    cierre: {
      h2: "Ordena la operación antes de que crezca más.",
      texto: "Dinos qué sistema usan, cuántas sucursales tienen y qué duele al cierre de mes. Te proponemos un alcance por módulos, con orden y fechas.",
      boton: "Hablemos de tu operación",
    },
    whatsapp: "Hola, quiero revisar la implementación de un ERP.",
    relacionados: ["crm", "desarrollo-a-medida", "equipo-de-computo"],
  },
  {
    slug: "desarrollo-a-medida",
    nombre: "Desarrollo a medida",
    eyebrow: "Operación · Desarrollo a medida",
    grupo: "Operación",
    icono: "desarrollo",
    enlace: "Ver desarrollo a medida",
    resumen:
      "Cuando tu operación no cabe en un sistema de caja: lo construimos contigo.",
    seo: {
      titulo: "Desarrollo de software a medida | VEIA",
      descripcion:
        "Software para el proceso que ninguna plataforma resuelve igual. Prototipo, entregas por fases y código del cliente.",
    },
    hero: {
      h1: "Software para el proceso que no cabe en una [caja].",
      lead: "Construimos el sistema que tu operación necesita cuando ninguna plataforma la resuelve sin torcerla. Con prototipo antes de programar, entregas por fases y el código a tu nombre.",
      primario: { texto: "Cuéntanos el proceso", destino: "contacto" },
      secundario: { texto: "Ver cómo se trabaja", destino: "ancla", valor: "#proceso" },
    },
    aside: {
      titulo: "Ideal si…",
      items: [
        "Tu proceso central vive en un Excel con macros.",
        "La plataforma te obliga a trabajar como no trabajas.",
        "Necesitas integrar sistemas que no se hablan entre sí.",
      ],
      nota: "Tiempo estimado: de 4 a 12 semanas por módulo. Requiere un responsable interno que decida.",
    },
    problema: {
      h2: "Adaptar el negocio al software sale caro.",
      parrafos: [
        "Hay procesos que son la ventaja del negocio: cómo cotizas, cómo produces, cómo asignas. Cuando la herramienta obliga a cambiarlos, se pierde justo lo que funcionaba.",
        "El otro extremo es el Excel con macros que solo entiende quien lo hizo. Funciona hasta que esa persona falta, el archivo se corrompe o hay que dar acceso a alguien más.",
      ],
    },
    incluye: {
      h2: "Qué incluye",
      items: [
        { titulo: "Alcance y criterios", texto: "Qué debe hacer y cómo se comprueba que quedó." },
        { titulo: "Prototipo navegable", texto: "Se ve y se prueba antes de escribir código." },
        { titulo: "Desarrollo por fases", texto: "Entregas cada dos semanas con demostración." },
        { titulo: "Integraciones", texto: "Conexión con lo que ya usas vía API." },
        { titulo: "Pruebas con usuarios", texto: "Se prueba en el trabajo real, no en demo." },
        { titulo: "Documentación y traspaso", texto: "Código, accesos y manual de operación." },
      ],
    },
    proceso: {
      h2: "Cómo se trabaja",
      pasos: [
        { titulo: "Definición", texto: "Proceso, alcance y criterios de aceptación firmados." },
        { titulo: "Prototipo", texto: "Pantallas y modelo de datos antes de programar." },
        { titulo: "Iteraciones", texto: "Bloques de dos semanas con demo y ajuste." },
        { titulo: "Entrega", texto: "Producción, pruebas, capacitación y traspaso." },
      ],
    },
    entregables: {
      h2: "Qué recibes",
      items: [
        "Código en repositorio a tu nombre, con README y licencia.",
        "Documentación de arquitectura y decisiones.",
        "Ambientes de prueba y producción separados.",
        "Capacitación grabada y manual de operación.",
        "Plan de mantenimiento y traspaso si decides irte.",
      ],
    },
    caso: null,
    faq: {
      h2: "Dudas frecuentes",
      preguntas: [
        { q: "¿Por qué no usar una plataforma?", a: "Si una plataforma cubre el 80% del proceso, conviene esa y lo decimos. El desarrollo se justifica cuando el proceso es la ventaja del negocio." },
        { q: "¿Quién es dueño del código?", a: "Tú. Se entrega en tu repositorio, con licencia y documentación. La entrega y el traspaso se detallan en el contrato." },
        { q: "¿Cuánto tarda?", a: "De 4 a 12 semanas por módulo; más si hay integraciones. Se entrega por fases, no todo al final." },
        { q: "¿Qué pasa después de la entrega?", a: "Requiere mantenimiento mensual. Si no lo contratas, se entrega congelado y documentado, sin soporte correctivo." },
      ],
    },
    cierre: {
      h2: "Si el proceso es tuyo, el sistema también.",
      texto: "Descríbenos qué proceso duele, quién lo usa y qué sistemas hay que integrar. Te decimos si conviene desarrollo o si alcanza con lo que ya existe.",
      boton: "Cuéntanos el proceso",
    },
    whatsapp: "Hola, tengo un proceso que quiero resolver con software.",
    relacionados: ["crm", "erp", "equipo-de-computo"],
  },
];

export const grupos: { nombre: Grupo; rotulo: string; slugs: string[] }[] = [
  { nombre: "Presencia", rotulo: "01 · Presencia", slugs: ["sitio-web", "diseno", "publicidad"] },
  { nombre: "Ventas", rotulo: "02 · Ventas", slugs: ["ecommerce", "crm"] },
  { nombre: "Operación", rotulo: "03 · Operación", slugs: ["equipo-de-computo", "erp", "desarrollo-a-medida"] },
];

export const porSlug = (slug: string) => servicios.find((s) => s.slug === slug);
