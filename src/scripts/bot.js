// Widget de chat del asistente VEIA (vanilla, sin dependencias).
// Se carga desde src/components/Bot.astro, que solo se renderiza con
// MOSTRAR_BOT = true. Si /api/bot no responde, nunca rompe la página:
// cae a los textos curados del FAQ y, si no hay match, ofrece WhatsApp.

const WA = "https://wa.me/525659898908";
const WA_BASE = `${WA}?text=${encodeURIComponent("Hola VEIA, vengo del chat del sitio")}`;
const TIMEOUT_MS = 12000;

// Preguntas del FAQ (máx. 6) y textos curados para el modo degradado.
const FAQ = [
  {
    q: "¿El sitio y el dominio son míos?",
    a: "Tu sitio vive en tu propio dominio (.com o .mx). No te atamos a un subdominio nuestro: si mañana quieres moverlo, se va contigo.",
  },
  {
    q: "¿Cuánto tardan en entregarlo?",
    a: "Desde 5 días hábiles en el paquete más sencillo hasta 20–30 días en una tienda en línea. El plazo empieza cuando tenemos tus textos y fotos.",
  },
  {
    q: "¿Cómo se paga?",
    a: "50% para iniciar y 50% al aprobar el sitio. Sin cargos escondidos ni renovaciones sorpresa.",
  },
  {
    q: "¿Qué pasa después de la entrega (soporte)?",
    a: "El sitio es tuyo. Si no quieres preocuparte por él, hay planes de soporte mensual opcionales (monitoreo, respaldos, ajustes y ficha de Google).",
  },
  {
    q: "¿Atienden fuera de Guadalajara?",
    a: "Nuestra base es la Zona Metropolitana de Guadalajara, pero trabajamos a distancia con negocios de todo México.",
  },
  {
    q: "¿Por qué cobran distinto a las páginas “desde $1,499”?",
    a: "Diseñamos a la medida, publicamos en tu propio dominio y hay un equipo real detrás. Abre el portafolio y júzgalo tú.",
  },
];

const panel = document.getElementById("bot-panel");
if (panel) {
  const burbuja = document.getElementById("bot-burbuja");
  const cerrarBtn = document.getElementById("bot-cerrar");
  const mensajes = document.getElementById("bot-mensajes");
  const form = document.getElementById("bot-form");
  const texto = document.getElementById("bot-texto");
  const enviarBtn = document.getElementById("bot-enviar");

  let ultimoFoco = null;
  let bloqueado = false;
  let controlador = null;
  let ultimaPregunta = "";

  const sesion = (() => {
    try {
      const k = "veia-bot-session";
      let s = sessionStorage.getItem(k);
      if (!s) {
        s = (crypto.randomUUID && crypto.randomUUID()) || `s-${Date.now()}-${Math.random().toString(16).slice(2)}`;
        sessionStorage.setItem(k, s);
      }
      return s;
    } catch {
      return `s-${Date.now()}`;
    }
  })();

  const focoAtrapable = () =>
    panel.querySelectorAll('a[href], button:not([disabled]), textarea:not([disabled])');

  function agregar(contenido, clase) {
    const d = document.createElement("div");
    d.className = `bot-msg ${clase}`;
    if (typeof contenido === "string") d.textContent = contenido;
    else d.appendChild(contenido);
    mensajes.appendChild(d);
    mensajes.scrollTop = mensajes.scrollHeight;
    return d;
  }

  function escribir(on) {
    const ex = mensajes.querySelector(".bot-escribiendo");
    if (on && !ex) {
      const d = document.createElement("div");
      d.className = "bot-escribiendo";
      d.setAttribute("role", "status");
      d.setAttribute("aria-label", "El asistente está escribiendo");
      d.innerHTML = "<i></i><i></i><i></i>";
      mensajes.appendChild(d);
      mensajes.scrollTop = mensajes.scrollHeight;
    }
    if (!on && ex) ex.remove();
  }

  function botonWa(etiqueta) {
    const a = document.createElement("a");
    a.className = "bot-cta-wa";
    a.href = WA_BASE;
    a.target = "_blank";
    a.rel = "noopener";
    a.innerHTML =
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Z"/></svg>';
    a.appendChild(document.createTextNode(etiqueta));
    mensajes.appendChild(a);
    mensajes.scrollTop = mensajes.scrollHeight;
  }

  function ctaWhatsApp(mensaje) {
    agregar(mensaje, "bot-msg--aviso");
    botonWa("Seguir por WhatsApp");
  }

  function limpiarChips() {
    mensajes.querySelectorAll(".bot-chips").forEach((c) => c.remove());
  }

  function pintarChips(lista) {
    limpiarChips();
    const c = document.createElement("div");
    c.className = "bot-chips";
    lista.forEach((item) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "bot-chip";
      b.textContent = item.q;
      b.addEventListener("click", () => enviarMensaje(item.q));
      c.appendChild(b);
    });
    mensajes.appendChild(c);
    mensajes.scrollTop = mensajes.scrollHeight;
  }

  function bloquear(on) {
    bloqueado = on;
    texto.disabled = on;
    enviarBtn.disabled = on;
    panel.setAttribute("aria-busy", on ? "true" : "false");
  }

  function estadoInicial() {
    limpiarChips();
    agregar("Hola 👋 Soy el asistente de VEIA. ¿En qué te ayudo? Puedes elegir una duda:", "bot-msg--bot");
    pintarChips(FAQ);
  }

  function respuestaLocal(entrada) {
    const p = entrada.toLowerCase().replace(/[¿?¡!.]/g, "");
    if (/(precio|cuesta|costo|cuánto|cuanto vale|cotiza)/.test(p)) return null;
    const hit = FAQ.find((f) => {
      const q = f.q.toLowerCase().replace(/[¿?¡!.“”"]/g, "");
      return q.includes(p) || p.includes(q.slice(0, 12));
    });
    return hit ? hit.a : null;
  }

  function manejarError(motivo) {
    console.warn("[bot] no se pudo responder:", motivo);
    const local = respuestaLocal(ultimaPregunta);
    if (local) {
      agregar(local, "bot-msg--bot");
      ctaWhatsApp("Si quieres afinar algún detalle, seguimos por WhatsApp.");
    } else {
      ctaWhatsApp("No pude responder ahora mismo. Si quieres, seguimos por WhatsApp.");
    }
  }

  async function enviarMensaje(valor) {
    if (bloqueado) return;
    const msg = (valor ?? texto.value).trim();
    if (!msg) return;
    ultimaPregunta = msg;
    limpiarChips();
    agregar(msg, "bot-msg--user");
    texto.value = "";
    texto.style.height = "auto";
    bloquear(true);
    escribir(true);

    if (controlador) controlador.abort();
    controlador = new AbortController();
    const t = setTimeout(() => controlador.abort(), TIMEOUT_MS);

    try {
      const r = await fetch("/api/bot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session: sesion, mensaje: msg }),
        signal: controlador.signal,
      });
      clearTimeout(t);
      const data = await r.json().catch(() => null);
      escribir(false);
      bloquear(false);

      if (data && data.ok === true) {
        if (data.respuesta) agregar(data.respuesta, "bot-msg--bot");
        if (data.handoff) {
          ctaWhatsApp("Eso se sale de lo que puedo resolver aquí. Te paso con el equipo por WhatsApp.");
        }
        return;
      }
      if (data && data.ok === false && data.error === "rate_limited") {
        bloquear(true);
        ctaWhatsApp("Hemos llegado al límite de mensajes de esta sesión. Para seguir, escríbenos por WhatsApp y te atendemos.");
        return;
      }
      manejarError(`http ${r.status}`);
    } catch (err) {
      clearTimeout(t);
      escribir(false);
      bloquear(false);
      manejarError(err && err.name === "AbortError" ? "timeout" : "red");
    }
  }

  // --- Apertura / cierre, foco y teclado ---
  function abrir() {
    ultimoFoco = document.activeElement;
    panel.hidden = false;
    document.body.classList.add("bot-panel-abierto");
    requestAnimationFrame(() => {
      panel.classList.add("abierto");
      texto.focus();
    });
    burbuja.setAttribute("aria-expanded", "true");
  }

  function cerrar() {
    panel.classList.remove("abierto");
    burbuja.setAttribute("aria-expanded", "false");
    document.body.classList.remove("bot-panel-abierto");
    setTimeout(() => {
      panel.hidden = true;
    }, 220);
    if (ultimoFoco && ultimoFoco.focus) ultimoFoco.focus();
    else burbuja.focus();
  }

  burbuja.addEventListener("click", () => (panel.hidden || !panel.classList.contains("abierto") ? abrir() : cerrar()));
  cerrarBtn.addEventListener("click", cerrar);

  document.addEventListener("keydown", (e) => {
    if (panel.hidden) return;
    if (e.key === "Escape") {
      e.preventDefault();
      cerrar();
      return;
    }
    if (e.key === "Tab") {
      const f = [...focoAtrapable()];
      if (!f.length) return;
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    enviarMensaje();
  });
  texto.addEventListener("input", () => {
    texto.style.height = "auto";
    texto.style.height = `${Math.min(texto.scrollHeight, 96)}px`;
  });
  texto.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      enviarMensaje();
    }
  });

  // Marca el documento para la convivencia con .ws-flotante (CSS global).
  document.body.classList.add("bot-presente");
  estadoInicial();
}
