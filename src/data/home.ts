// Copy del home, tomado de docs/rediseno/04-contenido.md.
export const home = {
  seo: {
    titulo: "Soluciones tecnológicas para tu negocio | VEIA",
    descripcion:
      "Sitio web, tienda, marca, sistemas y equipo de cómputo para profesionistas, negocios locales y pymes. Un solo proveedor, trato directo.",
  },
  hero: {
    overline: "Consultoría tecnológica · Guadalajara",
    h1: "Tecnología que tu negocio entiende y [usa].",
    lead: "Sitio web, tienda en línea, marca, sistemas y el equipo de cómputo que los hace funcionar. Para profesionistas, negocios locales y pymes: ocho líneas y un solo equipo, el que diseña, implementa y responde cuando algo falla.",
    primario: "Agendar diagnóstico",
    secundario: "Ver las 8 líneas",
    confianza: [
      "Trato directo con quien lo hace",
      "Soporte local en Guadalajara y Zapopan",
      "Alcance y precio por escrito",
      "Sin permanencia forzada",
    ],
    panel: {
      titulo: "Tu operación, en un solo lugar",
      pill: "8 líneas",
      filas: [
        { icono: "sitio", nombre: "Sitio web", nota: "Presencia, catálogo y Google" },
        { icono: "tienda", nombre: "Tienda en línea", nota: "Cobros, envíos e inventario" },
        { icono: "crm", nombre: "CRM", nota: "Seguimiento de clientes y cotizaciones" },
        { icono: "equipo", nombre: "Equipo de cómputo", nota: "Venta, configuración y soporte" },
      ],
      nota: "Guadalajara · Zapopan · atención remota en todo México",
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
      enlace: "Agendar llamada",
      mensaje: "Hola, quiero agendar una llamada para saber qué servicio necesito.",
    },
  },
  problema: {
    overline: "El punto de partida",
    h2: "Todo por WhatsApp, todo en Excel, todo en la cabeza del dueño.",
    intro:
      "No hace falta un diagnóstico profundo para reconocerlo. Si algo de esto te suena, el problema no es la herramienta: es que nadie definió cómo debe trabajar el negocio.",
    puntos: [
      {
        titulo: "La información vive en tres lugares",
        texto: "El catálogo en fotos de WhatsApp, las ventas en un cuaderno y los clientes en la libreta de alguien. Ninguno se habla con el otro.",
      },
      {
        titulo: "Cada cambio depende de una persona",
        texto: "Si se va el vendedor, se va el seguimiento. Si falta quien armó el Excel, nadie sabe qué fórmula tocó.",
      },
      {
        titulo: "Se compra herramienta antes del proceso",
        texto: "Se paga un sistema que nadie usa porque no correspondía a cómo trabaja el negocio. Primero se define, luego se compra.",
      },
    ],
  },
  proceso: {
    overline: "Cómo trabajamos",
    h2: "Cuatro pasos, sin sorpresas.",
    intro: "Cada etapa termina con algo que puedes revisar: un documento, una propuesta o una entrega funcionando.",
    pasos: [
      { titulo: "Diagnóstico", texto: "Vemos cómo trabajas hoy: qué usas, quién decide y dónde se pierde el tiempo. De aquí sale qué necesitas y qué no.", tiempo: "01 · 1 sesión de 20 a 60 min" },
      { titulo: "Propuesta y alcance", texto: "Por escrito: qué incluye, qué no, cuánto cuesta y en qué orden. Sin letras chiquitas ni «todo incluido».", tiempo: "02 · 2 a 5 días hábiles" },
      { titulo: "Ejecución por entregas", texto: "Avanzas viendo resultados parciales, no una caja negra. Cada entrega se revisa antes de seguir.", tiempo: "03 · según alcance" },
      { titulo: "Entrega y soporte", texto: "Recibes accesos, documentación y una sesión de uso. El soporte es opcional y va por escrito.", tiempo: "04 · al cierre" },
    ],
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
        hizo: "Landing con propiedades destacadas, información de la inmobiliaria, formulario y WhatsApp directo, más SEO básico y presencia en Google.",
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
        q: "¿Por qué no publican precios?",
        a: "Porque una página de un servicio y una tienda con inventario no cuestan lo mismo. Te damos alcance y precio por escrito antes de empezar.",
      },
      {
        q: "¿El sitio queda a mi nombre?",
        a: "Dominio, hosting, cuentas de anuncios y repositorio se registran a tu nombre desde el inicio. Si por operación los abrimos nosotros, se transfieren al cierre con inventario de accesos.",
      },
      {
        q: "¿En cuánto tiempo está listo?",
        a: "Tiempo estimado: sitios simples, desde 5 días hábiles; tienda en línea o identidad de marca, de 3 a 6 semanas; sistemas, por módulos y en fases.",
      },
      {
        q: "¿Qué pasa si algo falla después?",
        a: "Hay soporte mensual opcional, de lunes a viernes, 9:00–18:00 (hora CDMX), con tiempos de respuesta acordados por escrito. No prometemos 24/7.",
      },
      {
        q: "¿Qué hacen con mis datos?",
        a: "Se usan solo para responder y ejecutar el proyecto. No los vendemos. Para operar usamos hosting y correo, y si nos escribes por WhatsApp, Meta. El detalle está en el aviso de privacidad.",
      },
      {
        q: "¿Trabajan fuera de Guadalajara?",
        a: "Sí, a distancia en todo México. Reuniones por videollamada y entrega digital; el soporte presencial de equipo de cómputo es en Guadalajara y Zapopan.",
      },
    ],
  },
  cierre: {
    h2: "Empecemos por una llamada.",
    texto: "Cuéntanos qué necesitas y qué tienes hoy. Te decimos si podemos resolverlo, cómo y en cuánto tiempo. Respondemos en horario hábil.",
    primario: "Escribir por WhatsApp",
    secundario: "Llenar el formulario",
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
