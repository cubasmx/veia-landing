// Base de publicación: `/` en el VPS y `/veia-landing/` en GitHub Pages.
// Toda ruta interna pasa por `ruta()` para no romper el espejo.
export const base = import.meta.env.BASE_URL;

/** Une la base con una ruta relativa (sin barra inicial) o un ancla. */
export function ruta(destino = ""): string {
  if (destino.startsWith("#")) return `${base}${destino}`;
  return `${base}${destino.replace(/^\/+/, "")}`;
}

/** URL absoluta a partir de la base y el sitio configurado en astro.config. */
export function absoluta(sitio: URL | undefined, destino = ""): string {
  return new URL(ruta(destino), sitio ?? "https://veia.com.mx").href;
}

const escapar = (texto: string) =>
  texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/**
 * Convierte `[palabra]` en `<em class="serif">palabra</em>`.
 * Devuelve HTML seguro para usar con `set:html`.
 */
export function resaltar(texto: string): string {
  return texto
    .split(/(\[[^\]]+\])/g)
    .map((parte) =>
      parte.startsWith("[") && parte.endsWith("]")
        ? `<em class="serif">${escapar(parte.slice(1, -1))}</em>`
        : escapar(parte)
    )
    .join("");
}

export const WHATSAPP = "525659898908";

/** Enlace de WhatsApp con mensaje precargado. */
export function whatsapp(mensaje: string): string {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
}
