# Fotos del equipo (VEIA)

Fotos que se muestran en la sección **“Sobre nosotros”** del home
(`src/components/Equipo.astro`).

| Archivo           | Persona    | Origen                                                        |
| ----------------- | ---------- | ------------------------------------------------------------- |
| `julio.webp`      | Julio      | Retrato proporcionado por Julio (2026-11-17), 1511×2015.       |
| `ana-paula.webp`  | Ana Paula  | Foto de su portafolio (https://celaya51.github.io/portafolio-ana-paula/). |

- Ambas se recortaron a **4:5 (800 × 1000)** y se pasaron a **blanco y negro**
  para que la pareja se vea consistente, con `object-fit: cover`.
- Peso: ~60–75 KB cada una en WebP.
- Si se reemplazan, mantener el mismo nombre y proporción; el componente recorta
  con la cara en el tercio superior.
