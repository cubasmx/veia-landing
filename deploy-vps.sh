#!/usr/bin/env bash
# Despliega veia-landing al VPS (producción: https://veia.com.mx).
# Requisitos:
#   - Acceso SSH `ssh vps` como root (alias en ~/.ssh/config de la máquina desde
#     la que se despliega; antes se usaba la llave /home/mantis/.ssh/hostinger-vps,
#     que ya no existe).
#   - `rsync` y `node`/`npm` locales.
set -euo pipefail

HOST="${1:-vps}"
WEBROOT="/var/www/veia"
SSH_OPTS="-o IdentitiesOnly=yes"

echo "▶ Build con base en raíz (/) para veia.com.mx"
ASTRO_BASE=/ npm run build

echo "▶ Sincronizando dist/ → ${HOST}:${WEBROOT}/ (sin --delete: conserva extras)"
rsync -avz -e "ssh ${SSH_OPTS}" dist/ "${HOST}:${WEBROOT}/"

echo "▶ Ajustando propietario y permisos"
ssh ${SSH_OPTS} "${HOST}" "chown -R www-data:www-data ${WEBROOT}"

echo "▶ Verificación"
ssh ${SSH_OPTS} "${HOST}" "sha256sum ${WEBROOT}/favicon.png"
curl -fsS -o /dev/null -w 'veia.com.mx=%{http_code}\n' https://veia.com.mx/
