import type { APIRoute } from "astro";
import { servicios } from "../data/servicios";

const estaticas = [
  "",
  "contacto/",
  "aviso-de-privacidad/",
  "portafolio/",
  "plantillas/",
];

export const GET: APIRoute = ({ site }) => {
  const raiz = site ?? new URL("https://veia.com.mx");
  const rutas = [
    ...estaticas,
    ...servicios.map((s) => `servicios/${s.slug}/`),
  ];

  const urls = rutas
    .map((r) => {
      const loc = new URL(r, raiz).href;
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>2026-11-09</lastmod>\n  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
