# veia-landing

Sitio de VEIA hecho con Astro. Producción: **https://veia.com.mx**.

## Despliegue

1. **Producción** — https://veia.com.mx en el **VPS `mail`** (Hostinger,
   `2.25.128.172`): Caddy sirve `/var/www/veia` y ejecuta PHP-FPM (formulario de
   contacto `enviar.php`). Base del sitio: `/`. Desplegar con:

   ```bash
   ./deploy-vps.sh
   ```

2. **Espejo en GitHub Pages** — https://cubasmx.github.io/veia-landing/
   (workflow `.github/workflows/deploy.yml` en cada push a `main`). Base:
   `/veia-landing/` (por defecto).

## DNS de veia.com.mx (Hostinger hPanel)

- `A @` → `2.25.128.172` (VPS).
- `CNAME www` → `veia.com.mx`.
- No mover los nameservers ni tocar el `MX` (correo en el mismo VPS).

> Nota: hubo un periodo (2026-10-02) con el sitio en GitHub Pages mientras el VPS
> estuvo caído; se revirtió al VPS. Si el VPS vuelve a caer, se puede repuntar el
> `A @` a las IPs de GitHub Pages (185.199.108–111.153) + `CNAME www →
> cubasmx.github.io`, pero entonces el formulario PHP deja de funcionar.

Notas:

- El script sincroniza sin `--delete` para conservar assets que no salgan del build.
- El cliente SANHER y los logos de clientes viven en `public/images/` y se
  referencian con `{base}images/...`.
- Build local: `npm ci && npm run build`. Para el VPS: `ASTRO_BASE=/ npm run build`.
