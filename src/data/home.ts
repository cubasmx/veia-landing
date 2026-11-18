// Copy del home, tomado de docs/rediseno/04-contenido.md y ajustado con las
// indicaciones de Julio (2026-11-17).
export const home = {
  seo: {
    titulo: "Agencia de tecnología, branding y diseño | VEIA",
    descripcion:
      "Somos la agencia para profesionistas, negocios locales y PyMEs: sitios web, tiendas en línea, branding, sistemas, equipo de cómputo, CRM, ERP, APIs y desarrollo a medida.",
  },
  hero: {
    overline: "Consultoría · Tecnología · Branding · Diseño",
    h1: "Tecnología que tu negocio entiende y [necesita].",
    lead: "Somos la agencia para profesionistas, negocios locales y PyMEs.",
    primario: "Cuéntanos qué necesitas",
    confianza: [
      "Trato directo con quien lo hace",
      "Soporte local en Guadalajara y Zapopan",
      "Alcance y precio por escrito",
      "Sin permanencia forzada",
    ],
    // Cada entrada es un banner del carrusel del hero: icono, título y CTA a
    // WhatsApp. Sin descripciones.
    carrusel: {
      rotulo: "Ofrecemos",
      cta: "Cotizar por WhatsApp",
      servicios: [
        { nombre: "Sitios web", icono: "sitio" },
        { nombre: "Automatización", icono: "automatizacion" },
        { nombre: "Tienda en línea", icono: "tienda" },
        { nombre: "Branding", icono: "capas" },
        { nombre: "Logos", icono: "pluma" },
        { nombre: "Diseño", icono: "diseno" },
        { nombre: "Redes sociales", icono: "redes" },
        { nombre: "Sistemas IT", icono: "servidores" },
        { nombre: "Compra de equipo de cómputo", icono: "compra" },
        { nombre: "Venta de equipo de cómputo", icono: "venta" },
        { nombre: "Reparación de equipo de cómputo", icono: "reparacion" },
        { nombre: "Actualización de equipos y servidores", icono: "actualizacion" },
        { nombre: "Cámaras de vigilancia con servidor propio", icono: "camara" },
        { nombre: "CRM", icono: "crm" },
        { nombre: "ERP", icono: "erp" },
        { nombre: "Estrategias publicitarias", icono: "publicidad" },
        { nombre: "Desarrollo de APIs", icono: "desarrollo" },
        { nombre: "Aplicaciones a medida", icono: "app" },
        { nombre: "Formación y capacitación en tecnología", icono: "formacion" },
      ],
    },
  },
  clientes: {
    rotulo: "Ya trabajan con nosotros",
    lista: [
      { nombre: "SANHER Bienes Raíces", logo: "images/logo-sanher.svg", href: "https://sanherbienesraices.com/", alto: false },
      { nombre: "Legend Horizon Living", logo: "images/logo-legend.webp", href: "https://legendtower.com.mx/", alto: true },
      { nombre: "Uditore", logo: "images/logo-uditore-full.png", href: "https://uditore.mx/", alto: false },
      { nombre: "Tocomadera", logo: "images/logo-tocomadera.png", href: "https://tocomadera.mx/", alto: false },
      { nombre: "Ascendia", logo: "img/ascendia-logo.png", href: "https://ascendia.mx/", alto: false, clara: true },
    ],
  },
  servicios: {
    overline: "Servicios",
    h2: "Ocho formas de resolver, un mismo equipo.",
    intro:
      "No vendemos paquetes cerrados: revisamos qué necesita tu operación y armamos el alcance con lo que ya tienes.",
    aside: {
      pill: "Diagnóstico",
      titulo: "¿No sabes cuál te toca?",
      texto: "En 20 minutos revisamos tu operación y te decimos qué sí necesitas y qué no.",
      enlace: "Cuéntanos qué necesitas",
      mensaje: "Hola, quiero agendar una llamada para saber qué servicio necesito.",
    },
  },
  proceso: {
    overline: "Cómo trabajamos",
    h2: "¿Cómo trabajamos?",
    intro:
      "Cinco etapas. Cada una termina con algo que puedes revisar antes de pasar a la siguiente.",
    pasos: [
      {
        titulo: "Análisis",
        texto:
          "Tenemos una primera reunión para conocer las necesidades de tu empresa o negocio.",
      },
      {
        titulo: "Planeación",
        texto:
          "Tras evaluar los resultados del análisis se propone un plan a medida.",
      },
      {
        titulo: "Fase de pruebas",
        texto:
          "Tras la aprobación del plan, se deja todo listo para el siguiente paso.",
      },
      {
        titulo: "Producción",
        texto:
          "Terminada la fase de pruebas, se entrega el producto completado.",
      },
      {
        titulo: "Retroalimentación y ajustes",
        texto:
          "Normalmente se espera que existan ajustes* y que estos se lleven a cabo en la misma línea de trabajo.",
      },
    ],
    nota: "* Los ajustes se hacen dentro de la misma línea de trabajo acordada.",
  },
  casos: {
    overline: "Casos",
    h2: "Trabajos reales, contados sin adornos.",
    intro:
      "Qué necesitaba cada negocio, qué hicimos y cómo se ve hoy. Los sitios están en línea: puedes abrirlos y juzgar por ti mismo.",
    lista: [
      {
        cliente: "SANHER Bienes Raíces",
        giro: "Bienes raíces · Guadalajara",
        logo: "images/logo-sanher.svg",
        url: "https://sanherbienesraices.com/",
        reto: "Sus propiedades se movían por portales y recomendación; no tenían un sitio propio donde concentrar inventario y contacto.",
        hizo: "Landing con propiedades destacadas, información de la inmobiliaria, formulario y WhatsApp directo, más SEO y presencia en Google.",
        hoy: "El sitio está en línea en su propio dominio, con las propiedades, el formulario y el WhatsApp a la mano.",
        servicio: "sitio-web",
        enlace: "Ver sitio web",
      },
      {
        cliente: "Tocomadera",
        giro: "Diseño de muebles y espacios",
        logo: "images/logo-tocomadera.png",
        url: "https://tocomadera.mx/",
        reto: "Su portafolio visual vivía disperso y era difícil mostrarlo a clientes residenciales, comerciales y corporativos.",
        hizo: "Sitio con portafolio organizado por tipo de proyecto, galería de piezas y contacto directo para cotizar.",
        hoy: "El portafolio vive en tocomadera.mx, ordenado y con contacto directo.",
        servicio: "sitio-web",
        enlace: "Ver sitio web",
      },
      {
        cliente: "Uditore",
        giro: "Despacho contable y fiscal",
        logo: "images/logo-uditore-full.png",
        url: "https://uditore.mx/",
        reto: "Muchos servicios y paquetes sin un lugar claro donde el cliente entendiera el alcance.",
        hizo: "Sitio con servicios explicados, paquetes por tipo de contribuyente, testimonios y canales de contacto visibles.",
        hoy: "Los servicios y paquetes se explican por tipo de contribuyente, con contacto siempre visible.",
        servicio: "sitio-web",
        enlace: "Ver sitio web",
      },
    ],
  },
  equipo: {
    overline: "Sobre nosotros",
    h2: "Dos personas, no un call center.",
    intro:
      "VEIA es un equipo de dos personas en Guadalajara. Quien te contesta por WhatsApp es quien diseña, programa e implementa: sin ejecutivos de cuenta ni intermediarios.",
    personas: [
      {
        nombre: "Julio Cubas",
        rol: "Dirección, desarrollo y sistemas",
        linea:
          "Lleva la relación con cada negocio, arma el sitio y resuelve la parte técnica: sistemas, servidores y equipo de cómputo.",
        foto: "images/equipo/julio.webp",
        portafolio: "https://cubasmx.github.io/julio-cubas/",
      },
      {
        nombre: "Ana Paula",
        rol: "Diseño, marca y contenido",
        linea:
          "Cuida cómo se ve tu proyecto y que el texto diga lo que tu negocio quiere decir, sin relleno ni copiar y pegar.",
        foto: "images/equipo/ana-paula.webp",
        portafolio: "https://celaya51.github.io/portafolio-ana-paula/",
      },
    ],
    enlace: "Ver portafolio",
  },
  diferenciadores: {
    overline: "Por qué nosotros",
    h2: "Tres cosas que puedes comprobar.",
    items: [
      {
        icono: "usuario",
        titulo: "Trato directo con quien ejecuta",
        texto: "No hay ejecutivo que pase el proyecto a un equipo que nunca conociste. Quien cotiza es quien diseña y quien responde.",
      },
      {
        icono: "capas",
        titulo: "Alcance técnico, no catálogo",
        texto: "Del sitio al ERP con el mismo criterio: si una plataforma alcanza, se implementa; si no, se desarrolla. Se dice cuál y por qué.",
      },
      {
        icono: "check",
        titulo: "Criterio para decir que no",
        texto: "Si no necesitas un sistema, te lo decimos y no cotizamos. Si el proyecto excede lo que podemos sostener, lo derivamos.",
      },
    ],
  },
  faq: {
    overline: "Dudas",
    h2: "Lo que preguntan antes de contratar.",
    preguntas: [
      {
        q: "¿Soy dueño del producto?",
        a: "Sí, eres dueño del producto final hecho a medida.",
      },
      {
        q: "¿Ofrecen soporte?",
        a: "El soporte es opcional y tiene costo extra.",
      },
      {
        q: "¿Cuánto cuesta?",
        a: "Los precios varían según el proyecto.",
      },
    ],
  },
  cierre: {
    h2: "Cuéntanos sobre tu negocio o proyecto.",
    texto: "Queremos ver hasta dónde podemos llegar.",
    primario: "Escribir por WhatsApp",
    secundario: "Llamar por teléfono",
    telefono: "525659898908",
  },
  otrasLineas: {
    overline: "Otras líneas",
    h2: "Esto también lo hacemos.",
    enlace: "Ver las ocho líneas",
  },
  footer: {
    frase: "Un equipo pequeño, del sitio al sistema.",
  },
};

export const nav = [
  { texto: "Casos", href: "#casos" },
  { texto: "Cómo trabajamos", href: "#proceso" },
  { texto: "Dudas", href: "#faq" },
  { texto: "Contacto", href: "#contacto" },
];
