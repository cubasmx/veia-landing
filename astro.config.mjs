import { defineConfig } from "astro/config";

// Sitio estático. Producción: https://veia.com.mx (VPS, Caddy + PHP-FPM).
// - VPS en la raíz del dominio: ASTRO_BASE=/ npm run build (ver deploy-vps.sh).
// - Espejo en GitHub Pages de proyecto: base /veia-landing/ (por defecto).
const base = process.env.ASTRO_BASE || "/veia-landing/";

export default defineConfig({
  output: "static",
  site: "https://veia.com.mx",
  base,
});
