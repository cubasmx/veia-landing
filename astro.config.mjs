import { defineConfig } from "astro/config";

// Sitio estático servido en la raíz de veia.com.mx.
// - Producción (GitHub Pages con dominio propio veia.com.mx): base "/".
//   Con dominio propio, GitHub Pages sirve el sitio de proyecto en la raíz.
// - Se mantiene ASTRO_BASE para builds alternos (p. ej. el VPS, deploy-vps.sh).
const base = process.env.ASTRO_BASE || "/";

export default defineConfig({
  output: "static",
  site: "https://veia.com.mx",
  base,
});
