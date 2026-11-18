# Fondos del carrusel y del banner final

Una foto por servicio del carrusel del hero y una para el banner de cierre.

- **Origen:** Pexels (licencia libre para uso comercial, sin atribución).
  Se localizaron con búsqueda de imágenes y se descargaron del CDN de Pexels.
- **Optimización:** dos anchos por imagen (`-640` y `-1200` en WebP) y
  `srcset`/`sizes`. El carrusel solo descarga la foto del banner activo (y
  precarga la siguiente), así que en móvil cada cambio cuesta ~25 KB.
- **Banner de cierre:** `cierre-800.webp` / `cierre-1600.webp`, misma idea.

Si se cambia una foto, mantener los dos anchos y el nombre del slug que usa
`src/data/home.ts` (`hero.carrusel.servicios[].imagen`).
