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
        { nombre: "Sitios web", imagen: "sitios-web", icono: "sitio" },
        { nombre: "Automatización", imagen: "automatizacion", icono: "automatizacion" },
        { nombre: "Tienda en línea", imagen: "tienda-en-linea", icono: "tienda" },
        { nombre: "Branding", imagen: "branding", icono: "capas" },
        { nombre: "Logos", imagen: "logos", icono: "pluma" },
        { nombre: "Diseño", imagen: "diseno", icono: "diseno" },
        { nombre: "Redes sociales", imagen: "redes-sociales", icono: "redes" },
        { nombre: "Sistemas IT", imagen: "sistemas-it", icono: "servidores" },
        { nombre: "Compra de equipo de cómputo", imagen: "compra-equipo", icono: "compra" },
        { nombre: "Venta de equipo de cómputo", imagen: "venta-equipo", icono: "venta" },
        { nombre: "Reparación de equipo de cómputo", imagen: "reparacion", icono: "reparacion" },
        { nombre: "Actualización de equipos y servidores", imagen: "actualizacion", icono: "actualizacion" },
        { nombre: "Cámaras de vigilancia con servidor propio", imagen: "camaras", icono: "camara" },
        { nombre: "CRM", imagen: "crm", icono: "crm" },
        { nombre: "ERP", imagen: "erp", icono: "erp" },
        { nombre: "Estrategias publicitarias", imagen: "publicidad", icono: "publicidad" },
        { nombre: "Desarrollo de APIs", imagen: "apis", icono: "desarrollo" },
        { nombre: "Aplicaciones a medida", imagen: "aplicaciones", icono: "app" },
        { nombre: "Formación y capacitación en tecnología", imagen: "formacion", icono: "formacion" },
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
    h2: "Cada línea, con su propia ficha.",
    intro:
      "Ocho líneas tienen ficha propia. El resto —branding, redes, equipos, cámaras, APIs— se cotiza a medida según lo que necesites.",
    aside: {
      pill: "Diagnóstico",
      titulo: "¿No sabes cuál te toca?",
      texto: "Cuéntanos qué problema tienes y te decimos cómo se resuelve, sin compromiso.",
      enlace: "Cuéntanos qué necesitas",
      mensaje: "Hola, quiero contarles qué necesito resolver en mi negocio.",
    },
    extras: {
      rotulo: "También hacemos",
      lista: [
        { nombre: "Automatización", icono: "automatizacion" },
        { nombre: "Branding", icono: "capas" },
        { nombre: "Logos", icono: "pluma" },
        { nombre: "Redes sociales", icono: "redes" },
        { nombre: "Sistemas IT", icono: "servidores" },
        { nombre: "Compra de equipo de cómputo", icono: "compra" },
        { nombre: "Venta de equipo de cómputo", icono: "venta" },
        { nombre: "Reparación de equipo de cómputo", icono: "reparacion" },
        { nombre: "Actualización de equipos y servidores", icono: "actualizacion" },
        { nombre: "Cámaras de vigilancia con servidor propio", icono: "camara" },
        { nombre: "Desarrollo de APIs", icono: "desarrollo" },
        { nombre: "Aplicaciones a medida", icono: "app" },
        { nombre: "Formación y capacitación en tecnología", icono: "formacion" },
      ],
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
  equipo: {
    overline: "Equipo",
    h2: "Sobre nosotros",
    personas: [
      {
        nombre: "Julio Cubas",
        rol: "Dirección · Desarrollo · Sistemas",
        foto: "images/equipo/julio.webp",
        portafolio: "https://cubasmx.github.io/julio-cubas/",
      },
      {
        nombre: "Ana Paula",
        rol: "Branding · Diseño · Contenido",
        foto: "images/equipo/ana-paula.webp",
        portafolio: "https://celaya51.github.io/portafolio-ana-paula/",
      },
    ],
    enlace: "Ver portafolio",
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
    enlace: "Ver todas las líneas",
  },
  footer: {
    frase: "Consultoría · Tecnología · Branding · Diseño",
  },
};

export const nav = [
  { texto: "Equipo", href: "#equipo" },
  { texto: "Cómo trabajamos", href: "#proceso" },
  { texto: "Dudas", href: "#faq" },
  { texto: "Contacto", href: "#contacto" },
];
