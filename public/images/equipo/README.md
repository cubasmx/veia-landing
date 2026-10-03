# Fotos del equipo (VEIA)

Esta carpeta guarda las fotos que se muestran en la sección **“Quiénes somos /
El equipo”** de la página de inicio (`src/components/Equipo.astro`).

Los archivos que están aquí ahora (`julio.jpg`, `ana-paula.jpg`) son
**placeholders generados** (un degradado con la leyenda “FOTO PENDIENTE”).
No son fotos reales y no deben quedarse en producción.

## Qué se necesita

| Archivo          | Persona    | Medidas     | Formato        |
| ---------------- | ---------- | ----------- | -------------- |
| `julio.jpg`      | Julio      | 800 × 1000  | JPG o WebP     |
| `ana-paula.jpg`  | Ana Paula  | 800 × 1000  | JPG o WebP     |

- **Proporción 4:5 (vertical).** El componente recorta con `object-fit: cover`,
  así que la cara debe quedar centrada y con aire arriba.
- **Mínimo 800 × 1000 px**; ideal 1200 × 1500 px. Peso máximo ~300 KB por foto.
- **Qué sí:** foto real de cada quien, rostro de frente, luz natural o de estudio,
  fondo neutro (pared clara, exterior desenfocado). Se vale sonreír.
- **Qué no:** fotos de stock, imágenes generadas con IA, capturas de redes,
  filtros pesados o fotos de grupo recortadas.
- **Créditos:** anotar aquí quién tomó cada foto, por si hay que acreditarla.

## Cómo reemplazar

1. Guardar la foto real con el **mismo nombre exacto** (`julio.jpg`,
   `ana-paula.jpg`) en esta carpeta.
2. Correr `npm run build` para confirmar que todo sigue en orden.
3. Actualizar el estado en `~/Documentos/VEIA-Marca-Propia/04-Landing-Overhaul.md`.

> Nota: si algún día se cambia el nombre del archivo, hay que actualizarlo en
> `src/components/Equipo.astro`.
