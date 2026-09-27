import { defineConfig } from "astro/config";

// Sitio estático: se despliega en GitHub Pages y en el VPS (veia.com.mx).
// - GitHub Pages de proyecto: base /veia-landing/ (por defecto).
// - VPS en la raíz del dominio: ASTRO_BASE=/ npm run build (ver deploy-vps.sh).
const base = process.env.ASTRO_BASE || "/veia-landing/";

export default defineConfig({
  output: "static",
  site: "https://cubasmx.github.io/veia-landing/",
  base,
});
