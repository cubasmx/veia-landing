# veia-landing

Sitio de VEIA hecho con Astro. Se despliega en dos lugares:

1. **GitHub Pages** — https://cubasmx.github.io/veia-landing/ (workflow `.github/workflows/deploy.yml` en cada push a `main`). Base por defecto: `/veia-landing/`.
2. **Producción** — https://veia.com.mx (VPS Hostinger, Caddy, webroot `/var/www/veia`).

## Desplegar a producción (VPS)

```bash
./deploy-vps.sh
```

Notas:

- El VPS conserva assets que no salen del build de Astro: `images/` (assets de las plantillas VEIA) y `plantillas/` (demos autocontenidos). El script sincroniza sin `--delete` para no borrarlos.
- `public/enviar.php` es el handler PHP del formulario de contacto; en GitHub Pages se sirve como archivo estático y en el VPS lo ejecuta PHP-FPM (Caddy).
- El cliente SANHER y los logos de clientes viven en `public/images/` y se referencian con `{base}images/...` para funcionar en ambas bases.
- Para probar el build con la base del VPS: `ASTRO_BASE=/ npm run build`.
