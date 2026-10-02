# veia-landing

Sitio de VEIA hecho con Astro. Producción: **https://veia.com.mx**.

## Despliegue

1. **Producción** — https://veia.com.mx, servido por **GitHub Pages** con dominio
   propio (custom domain). El workflow `.github/workflows/deploy.yml` construye y
   publica en cada push a `main`. Base del sitio: `/` (con dominio propio, GitHub
   Pages sirve el sitio de proyecto en la raíz del dominio).
2. **URL de proyecto de GitHub Pages** — https://cubasmx.github.io/veia-landing/
   redirige a veia.com.mx mientras el custom domain esté configurado.
3. **VPS Hostinger** (`deploy-vps.sh`, Caddy, webroot `/var/www/veia`) — el VPS
   quedó **fuera de servicio**; se conserva el script por si se levanta de nuevo.

### DNS de veia.com.mx (Hostinger hPanel)

- `A @` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `CNAME www` → `cubasmx.github.io`
- No mover los nameservers ni tocar el `MX` para el sitio web.

Notas:

- El VPS conserva assets que no salen del build de Astro: `images/` (assets de las plantillas VEIA) y `plantillas/` (demos autocontenidos). El script sincroniza sin `--delete` para no borrarlos.
- `public/enviar.php` era el handler PHP del formulario de contacto. En GitHub Pages
  no se ejecuta (hosting estático); el CTA real del sitio es **WhatsApp**. Si se
  quiere formulario, migrar a un servicio estático (Web3Forms/Formspree).
- El cliente SANHER y los logos de clientes viven en `public/images/` y se referencian con `{base}images/...`.
- Build local: `npm ci && npm run build`. Para una base distinta (p. ej. VPS):
  `ASTRO_BASE=/ npm run build`.
