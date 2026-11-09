# VEIA · Sistema visual 02 — "socio tecnológico"

Estado: propuesta para validación con Julio. No modifica `src/`.
Base: sistema actual (`src/styles/global.css`, `Base.astro`, componentes).
Se conserva: logo, morado `#570080`, magenta `#F2006D`, amarillo `#FBDD41`,
Satoshi + Instrument Serif. Se evoluciona: proporciones, neutros, uso del
degradado, radios, densidad y tono.

---

## 1. Principios

1. **Sobriedad con acento.** El 80% de la superficie es papel, tinta y un solo
   morado; el color fuerte aparece donde hay que decidir.
2. **Jerarquía antes que decoración.** Un solo foco por pantalla; si un elemento
   no ayuda a entender o a actuar, se retira.
3. **Tecnología legible.** Nada de jerga visual de startup: sin blobs, sin
   glassmorphism, sin degradados en cada tarjeta.
4. **Calidez humana explícita.** Serifa itálica en las palabras clave, retratos
   reales del equipo y copy en primera persona; la confianza se demuestra, no se
   declara.
5. **Sistema, no piezas sueltas.** Todo sale de tokens: 8 iconos, 3 botones,
   4 radios, 2 sombras. La consistencia es la señal de madurez.

**Cómo se ve "tecnología" sin perder calidez:** precisión en la retícula y en
los trazos de los iconos (1.5 px, esquinas redondeadas), neutros cálidos con
tinte violeta en lugar de gris azulado, mucho aire, reglas finas de 1 px,
tipografía grande y firme con una sola palabra en serif itálica, y el amarillo
como gesto pequeño (subrayado, badge) que impide que el conjunto se vuelva
corporativo.

---

## 2. Paleta y proporciones

### 2.1 Colores de marca (sin cambios de hex)

| Token | Hex | Uso |
|---|---|---|
| `--morado` | `#570080` | Superficies de autoridad, botón primario, titulares sobre claro |
| `--magenta` | `#F2006D` | Acento, iconos activos, subrayados, cifras. Nunca texto pequeño sobre blanco |
| `--magenta-texto` | `#C4005A` | Variante de texto pequeño (6.0:1 sobre blanco) |
| `--amarillo` | `#FBDD41` | Resaltado, badge, detalle sobre morado. Nunca texto sobre blanco |

### 2.2 Neutros nuevos (cálidos, con tinte violeta)

Se sustituyen `--gris-claro #f7f7f7`, `--gris-borde #dbdde0`, `--gris-medio
#666c78` y `--tinta #3d4047` por una rampa coherente:

| Token | Hex | Uso |
|---|---|---|
| `--tinta` | `#14111A` | Texto principal, footer, superficie oscura |
| `--tinta-2` | `#2B2533` | Titulares secundarios, hover de superficies oscuras |
| `--neutro-600` | `#565063` | Texto de cuerpo (7.7:1 sobre blanco) |
| `--neutro-500` | `#6E6879` | Texto auxiliar (5.4:1), metadatos |
| `--neutro-300` | `#C9C4D2` | Bordes, separadores, iconos inactivos |
| `--neutro-200` | `#E3DFEA` | Bordes suaves, divisores de tabla |
| `--neutro-100` | `#F2F0F5` | Superficie alterna, fondo de tarjeta |
| `--papel` | `#FDFCFE` | Fondo base de página |
| `--blanco` | `#FFFFFF` | Tarjetas sobre superficie alterna |

### 2.3 Proporción 70 / 20 / 10

- **70% neutro:** papel y blanco. Toda la lectura ocurre aquí.
- **20% morado:** header de sección, una tarjeta ancla por rejilla, banner CTA,
  footer. Es el "peso" de la marca.
- **10% acento:** magenta + amarillo juntos, en dosis pequeñas (iconos, badges,
  subrayado serif, un detalle en el CTA). El magenta nunca compite con el morado
  por el mismo rol.

### 2.4 Reglas de contraste (calculadas)

| Combinación | Ratio | Veredicto |
|---|---|---|
| Blanco sobre `#570080` | 12.2:1 | AAA — botón primario y banner |
| Blanco sobre `#F2006D` | 4.2:1 | Falla AA en texto normal → solo ≥19 px bold |
| `#C4005A` sobre blanco | 6.0:1 | AA texto normal |
| `#F2006D` sobre blanco | 4.2:1 | Solo títulos grandes, iconos y bordes |
| `#565063` sobre blanco | 7.7:1 | AAA cuerpo |
| `#565063` sobre `#F2F0F5` | 6.8:1 | AA cuerpo |
| `#14111A` sobre `#FBDD41` | 13.3:1 | AAA — único texto válido sobre amarillo |
| `#FBDD41` sobre `#570080` | 9.0:1 | AAA detalle sobre morado |
| `#FBDD41` sobre blanco | 1.35:1 | Prohibido como texto |
| `#C9C4D2` sobre `#14111A` | 10.5:1 | AA cuerpo en oscuro |

### 2.5 Dónde SÍ y dónde NO

**Degradado** (morado→magenta, sin amarillo):
- SÍ: una sola vez por página, como fondo del banner CTA final, a 135° y con
  parada intermedia controlada (`#570080 0% → #7A0A63 62% → #A4006A 100%`).
- SÍ: detalle de 2 px en el borde superior del header al hacer scroll.
- NO: en botones, tarjetas, iconos, textos ni fondos de sección completa.
- NO: combinado con amarillo (el degradado de tres colores actual se retira).

**Amarillo:**
- SÍ: subrayado de palabra clave (barra de 6 px bajo texto), badge "Nuevo",
  rombo de bullet en el footer, foco sobre superficies oscuras.
- NO: como fondo de bloques grandes, en texto sobre blanco, ni en más de dos
  apariciones por pantalla.

---

## 3. Tipografía

Satoshi (400/500/700/900) para todo; Instrument Serif itálica solo para 1–3
palabras por titular. Ninguna otra familia.

| Rol | Tamaño (clamp) | Peso | Interlínea | Tracking |
|---|---|---|---|---|
| Display (hero home) | `clamp(2.6rem, 6.2vw, 4.5rem)` | 700 | 1.02 | -0.035em |
| H1 (hero servicio) | `clamp(2.1rem, 4.4vw, 3.3rem)` | 700 | 1.08 | -0.03em |
| H2 (sección) | `clamp(1.75rem, 3.4vw, 2.6rem)` | 700 | 1.12 | -0.025em |
| H3 (tarjeta) | `clamp(1.15rem, 1.8vw, 1.4rem)` | 700 | 1.25 | -0.02em |
| H4 (subbloque) | `1.0625rem` (17 px) | 700 | 1.35 | -0.01em |
| Body L (lead) | `clamp(1.0625rem, 1.3vw, 1.1875rem)` | 400 | 1.65 | 0 |
| Body | `1rem` | 400 | 1.65 | 0 |
| Small | `0.875rem` (14 px) | 500 | 1.55 | 0 |
| Caption / overline | `0.75rem` (12 px) | 700 | 1.4 | +0.14em, mayúsculas |

Reglas:
- Cuerpo: entre **58 y 72 caracteres** por línea (`max-width: 66ch`); leads 52ch.
- Titulares: máximo **20–24 caracteres** por línea; `text-wrap: balance`.
- Serif itálica: peso 400, sin tracking, mismo tamaño que el titular; solo en
  sustantivos con carga emocional ("confiable", "a tu medida", "crecer").
- Nunca justificar. Nunca mayúsculas en párrafos. Overline solo para etiquetas.
- Mínimo absoluto en móvil: 15 px (caption 12 px solo metadatos no esenciales).

---

## 4. Iconografía

**Estilo:** lineal, geométrico, construido en retícula de 24×24 con 2 px de
margen interno. Trazo `1.5`, `stroke-linecap: round`, `stroke-linejoin: round`,
esquinas interiores de radio 2. Sin relleno salvo puntos de acento (máx. 1 por
icono, en magenta). Sin perspectiva ni sombras.

- Tamaños: 20 px (inline en botones), 24 px (nav, listas), 32 px (tarjeta de
  servicio), 48 px (hero de servicio). Escalado siempre por múltiplos de 4.
- Alineación: caja de 24, contenido centrado ópticamente; el icono se alinea
  con la primera línea de texto, no con el bloque.
- `stroke: currentColor` para heredar estado; el acento se pinta con
  `--magenta` en el punto decorativo.
- Cada icono lleva `aria-hidden="true"` si el texto ya nombra el servicio.

| Servicio | Icono (descripción) |
|---|---|
| Sitio web | Ventana de navegador: rect 3-21 × 4-20, barra superior con 2 puntos, 2 líneas de contenido |
| E-commerce | Bolsa de compra: trapecio 5-19 × 8-21, asa semicircular, punto de acento en el centro |
| Diseño y marca | Dos formas superpuestas (círculo + cuadrado redondeado) y nodo de selección con manija |
| Publicidad digital | Megáfono a 45° con 3 ondas concéntricas y base |
| Equipo de cómputo | Monitor 3-20 × 4-15 con base en T; destornillador cruzado pequeño en la esquina |
| CRM | Tarjeta de contacto: rect redondeado, avatar circular, 2 líneas, pestaña de check |
| ERP | Cuatro módulos en cuadrícula unidos por una flecha circular continua |
| Desarrollo a medida | Llaves `{ }` con una barra `/` central y nodo de acento |

Ejemplos inline (los tres primeros):

```html
<!-- Sitio web -->
<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor"
     stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <rect x="3" y="4" width="18" height="16" rx="2"/>
  <path d="M3 8.5h18"/><path d="M6 6.3h.01M8.4 6.3h.01"/>
  <path d="M7 12h6M7 15.5h10"/>
</svg>

<!-- E-commerce -->
<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor"
     stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M5 8h14l-1.2 12.2a1.6 1.6 0 0 1-1.6 1.4H7.8a1.6 1.6 0 0 1-1.6-1.4Z"/>
  <path d="M9 8V6.5a3 3 0 0 1 6 0V8"/>
  <circle cx="12" cy="14" r="1.1" fill="#F2006D" stroke="none"/>
</svg>

<!-- Publicidad -->
<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor"
     stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M4 10v4a1.5 1.5 0 0 0 1.5 1.5H8l7 4V4.5l-7 4H5.5A1.5 1.5 0 0 0 4 10Z"/>
  <path d="M18.5 9a4 4 0 0 1 0 6M20.8 6.4a7.5 7.5 0 0 1 0 11.2"/>
</svg>
```

---

## 5. Componentes

Medidas base: alto de control 48 px (mínimo táctil 44); gaps en múltiplos de 4.

### 5.1 Header / nav
- Barra sticky de **72 px** (móvil 64), fondo `--papel` al 92% + `backdrop-filter:
  blur(8px)`, borde inferior 1 px `--neutro-200`. Sin sombra.
- Estructura: logo 28 px de alto · nav centrada (5 ítems: Servicios, Casos,
  Nosotros, Dudas, Contacto) · CTA "Agendar diagnóstico" (44 px alto, texto 13 px).
- Servicios abre un panel de 2 columnas con las 8 líneas (icono 20 + nombre).
  En móvil, panel acordeón dentro del menú a pantalla completa.
- Estados: link `--neutro-600` → hover `--tinta` con subrayado 2 px `--magenta`
  (offset 6 px); activo mismo tratamiento + `aria-current="page"`.
- Al hacer scroll > 24 px: borde superior de 2 px con el degradado de marca.

### 5.2 Botones (3 variantes)
Comunes: alto 48 (móvil ancho completo en hero), padding 0 24, radio 10 px,
texto 14 px/700/tracking 0, icono 18 px a la derecha, transición 180 ms.
- **Primario:** fondo `--morado`, texto blanco, sin sombra. Hover `#6B009E`
  (aclarado 12%), active `translateY(1px)`. Foco: outline 3 px `--tinta` offset 2.
- **Secundario:** fondo transparente, borde 1.5 px `--tinta`, texto `--tinta`.
  Hover: fondo `--tinta` + texto blanco. Foco igual.
- **Terciario / enlace:** sin caja, texto `--morado` 700 + flecha 16 px que
  avanza 3 px en hover; subrayado 1 px `--neutro-300` que pasa a `--magenta`.
- Prohibido: degradado en botones, mayúsculas forzadas, sombras de color,
  `translateY(-2px)` en hover (solo color y borde).

### 5.3 Hero
- Retícula 12 col: texto en 1–7, panel visual en 8–12; alto mínimo 560 px en
  desktop, `padding-block: clamp(4rem, 8vw, 7rem)`.
- Orden: overline (12 px, `--neutro-500`) → Display con 1 palabra serif →
  lead 52ch → 2 botones (primario + secundario) → franja de confianza.
- Franja de confianza: 4 ítems con icono de check 16 px, texto 13 px
  `--neutro-600`, separados por 1 px `--neutro-200`; en móvil en 2×2.
- Panel visual: tarjeta de 1 px `--neutro-200`, radio 20, fondo blanco, sin
  rotación ni blob. Contiene piezas reales (logos de clientes, mini-checklist,
  captura del sitio) — nunca una foto inventada.

### 5.4 Tarjeta de servicio
- Fondo blanco, borde 1 px `--neutro-200`, radio 16, padding 24, sin sombra.
- Contenido: icono 28 `--morado` → H3 17–20 px → 1–2 líneas (máx. 2, 38ch) →
  enlace "Ver más" 13 px con flecha.
- Toda la tarjeta es clicable (`<a>` contenedora); hover: borde `--neutro-300`,
  icono `--magenta`, fondo `--papel`. Sin elevación.
- Variante ancla (1 de cada 8): fondo `--morado`, texto blanco, icono amarillo,
  enlace blanco subrayado.
- Altura mínima 200 px; el contenido se alinea arriba y el enlace al pie.

### 5.5 Bloque de proceso (4 pasos)
- Desktop: 4 columnas, número `01–04` en serif itálica 28 px `--magenta`,
  línea horizontal 1 px `--neutro-200` a la altura del número, título 17 px,
  texto 15 px.
- Móvil: lista vertical con regla izquierda de 1 px y número como marcador
  (sangría 28 px). Sin stepper interactivo.
- Pasos: Diagnóstico → Propuesta y alcance → Ejecución por entregas → Entrega y soporte.

### 5.6 Tarjeta de caso
- Fondo blanco, borde 1 px, radio 16, padding 24; cabecera con logo del cliente
  a 32 px de alto en escala de grises (filtro `grayscale(1)`, opacidad 0.75;
  a color en hover).
- Cuerpo: giro (caption) → reto (1 línea) → resultado (dato fuerte en 28 px/700)
  → enlace al caso. Sin testimonio si no está autorizado.
- Ancho mínimo 280, grid de 2–3.

### 5.7 Banner CTA
- Fondo: degradado de marca (único de la página), radio 20, padding
  `clamp(2.5rem, 6vw, 4.5rem)`, texto blanco alineado a la izquierda en desktop
  (no centrado), 2 columnas: mensaje 7 / acciones 5.
- Detalle: barra amarilla de 4 px × 56 px sobre el H2.
- Botón: blanco con texto `--morado` (12.2:1) + secundario contorno blanco.
- Móvil: una columna, botón ancho completo.

### 5.8 Footer
- Fondo `--tinta`, texto `--neutro-300` (10.5:1), padding superior 64.
- 4 columnas: marca + frase (4) · Servicios (3) · Empresa (2.5) · Contacto (2.5).
- H4 en caption 12 px `--blanco`; enlaces 14 px con hover `--amarillo`.
- Base: 1 px `--neutro-600` al 30%, legales + "Hecho en Guadalajara".
- Logo blanco a 28 px.

### 5.9 Pills / etiquetas
- Altura 28, padding 0 12, radio 999 (único uso de pill), 12 px/600.
- Neutra: fondo `--neutro-100`, texto `--neutro-600`. Acento: fondo
  `rgba(242,0,109,.08)`, texto `#C4005A`. Sobre oscuro: borde 1 px blanco 24%.
- No se usan como botones.

### 5.10 Tabla comparativa (servicios)
- Solo si hay ≥3 columnas que comparar (ej. CRM vs. hoja de cálculo). Cabecera
  con fondo `--neutro-100`, filas de 52 px, divisores 1 px `--neutro-200`,
  primera columna 28% y en 600. En móvil: se convierte en tarjetas apiladas con
  el nombre de columna como etiqueta; nunca scroll horizontal.

---

## 6. Layout

- **Grid:** 12 columnas, gap 24 px (16 en móvil), margen lateral
  `clamp(20px, 5vw, 40px)`.
- **Anchos:** contenido 1180 px; texto 720 px; hero 1180; banner CTA 1080.
- **Espaciado (base 4):** 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128.
  Sección: `clamp(4.5rem, 9vw, 7.5rem)` vertical. Entre titular y contenido: 40.
- **Radios:** 6 (badge/input) · 10 (botón) · 16 (tarjeta) · 20 (panel/banner) ·
  999 (pill). Se retira el 30 px generalizado.
- **Sombras:** solo dos.
  `--sombra-1: 0 1px 2px rgb(20 17 26 / .05)` para elementos elevados;
  `--sombra-2: 0 18px 44px rgb(20 17 26 / .10)` solo para el menú desplegable
  y el panel flotante. Las tarjetas usan borde, no sombra.
- **Bordes:** 1 px `--neutro-200`; 1.5 px en controles; 2 px en estados activos.
- **Breakpoints:** 480 (móvil grande), 768 (tablet, grid 2 col), 1024 (desktop,
  nav completa), 1280 (contenedor máximo). Mobile-first.

---

## 7. Home — orden de secciones

```
[1] HEADER sticky 72px  · logo · Servicios ▾ · Casos · Nosotros · Dudas · [Agendar]
[2] HERO  (12 col: 7 texto / 5 panel)
     overline: "Consultoría tecnológica · Guadalajara"
     H1 display: "Tecnología que tu negocio entiende y *usa*."
     lead 52ch · [Agendar diagnóstico] [Ver servicios]
     franja: 4 checks (Trato directo · Soporte local · Alcance por escrito · Sin permanencia)
     panel: tarjeta con checklist de 4 líneas + nota de cobertura
[3] FRANJA DE CLIENTES  fondo --neutro-100, 5 logos reales, 26–30px, en gris
[4] LAS 8 LÍNEAS  subtítulo + grid 3×(3, 3, 3) con una tarjeta-ancla morada
     01 Presencia: Sitio web · Marca y diseño · Publicidad   (3 tarjetas)
     02 Ventas: Tienda en línea · CRM + tarjeta-aside "¿No sabes cuál?" (3 celdas)
     03 Operación: Equipo de cómputo · ERP · Desarrollo a medida (3 tarjetas)
     El aside evita el hueco de la fila de 2 y convierte la duda en CTA.
[5] PROBLEMA  fondo blanco con reglas · H2 serif "…en la cabeza del dueño"
     + 3 puntos numerados (01–03) en lista con divisores
[6] PROCESO  4 pasos en línea (mismo componente que la plantilla)
[7] CASOS  3 tarjetas: logo real + reto + resultado + enlace
[8] DIFERENCIADORES  3 columnas de texto con icono 24, sin tarjetas ni sombras
[9] FAQ  6 <details> con divisores de 1 px, sin cajas
[10] BANNER CTA  degradado (único de la página) · "Empecemos por una llamada"
[11] FOOTER 4 columnas + base legal
```

Jerarquía: display del hero > H2 de sección > H3 de tarjeta; máximo dos niveles
de color por pantalla. El único bloque a sangre es el de problema (fondo blanco)
y el banner CTA; el resto respira sobre `--papel`.

**Móvil (≤767):** header 64 con menú full-screen (las 8 líneas dentro); hero en
una columna con el panel debajo del CTA; clientes en scroll horizontal con
`snap` y máscara lateral; las 8 líneas en 1 columna con sus rótulos de bloque
(3+3+3, nunca scroll horizontal); problema apilado; proceso vertical; casos
apilados; FAQ sin cajas; CTA con botones a ancho completo.

---

## 8. Plantilla de página de servicio (×8)

```
[1] HEADER igual (con "Servicios" marcado)
[2] BREADCRUMB  Inicio / Servicios / CRM            (caption, --neutro-500)
[3] HERO COMPACTO  12 col: 7 texto / 5 tarjeta
     H1: "Un CRM que tu equipo sí va a usar."
     lead 2 líneas · [Agendar diagnóstico] [WhatsApp]
     tarjeta lateral: "Ideal si…" 3 checks + nota de tiempo de implementación
     (sin imagen ni mockup genérico; fondo --neutro-100, borde 1px)
[4] PROBLEMA  texto 720px centrado a la izquierda, 3 bullets con icono
[5] QUÉ INCLUYE  grid 2×3 de ítems (icono 24 + título 16 + 1 línea), sin tarjetas:
     separados por reglas de 1px (más sobrio que 6 cards)
[6] PROCESO  4 pasos (mismo componente que home, variante compacta)
[7] ENTREGABLES  qué recibe el cliente: accesos, documentos, capacitación
[8] CASO RELACIONADO  1 tarjeta ancha: logo + reto + resultado + enlace
[9] FAQ  4 preguntas en <details>, 1px divisores
[10] CTA  banner degradado (mismo componente)
[11] FOOTER
```

Qué cambia respecto al home: hero más bajo (H1 3.3rem máx.), sin franja de
clientes, un solo caso en lugar de tres, y el bloque "Qué incluye" reemplaza la
rejilla de 8. El header, CTA y footer son idénticos: eso da coherencia de
"socio" y reduce el costo de las 8 páginas.

---

## 9. Movimiento

| Elemento | Qué se anima | Duración | Easing |
|---|---|---|---|
| Aparición de sección | opacity 0→1, translateY 16→0 | 420 ms | `cubic-bezier(.2,.7,.2,1)` |
| Hover de botón | background/borde/color | 180 ms | `ease-out` |
| Flecha de enlace | translateX 0→3px | 160 ms | `ease-out` |
| Nav desplegable | opacity + translateY -6→0 | 200 ms | `ease-out` |
| Menú móvil | opacity + panel | 240 ms | `ease-out` |
| Cambio de borde del header | border-color | 160 ms | `linear` |

- Una sola animación de entrada por sección, con retardo escalonado máximo de
  60 ms entre ítems de una rejilla. Nada de parallax, marquesina infinita ni
  `scale` en hover.
- **`prefers-reduced-motion: reduce`:** todo a `opacity: 1; translate: 0;
  transition: none`; se elimina el scroll suave, la marquesina y el despliegue
  animado (aparece/desaparece sin transición). Sin pérdida de contenido.

---

## 10. Accesibilidad (checklist)

- [ ] Contraste ≥4.5:1 en todo texto <19 px; ≥3:1 en texto grande e iconos.
- [ ] Foco visible: `outline: 3px solid var(--tinta); outline-offset: 2px` sobre
      claro; `--amarillo` sobre oscuro. Nunca `outline: none` sin sustituto.
- [ ] Áreas táctiles ≥44×44 px; 48 en CTAs principales y separación ≥8 px.
- [ ] Skip link al inicio; landmarks `header/nav/main/footer`; un solo `<h1>`.
- [ ] Jerarquía de encabezados sin saltos (h2→h3, nunca h2→h4).
- [ ] Iconos decorativos `aria-hidden="true"`; iconos con acción, `aria-label`.
- [ ] Formularios con `<label>` visible, `aria-describedby` para errores y
      `aria-invalid`; el error no se comunica solo por color.
- [ ] Menú móvil: `aria-expanded`, foco atrapado, cierre con Esc, retorno de foco.
- [ ] Estado activo con `aria-current="page"`, no solo color.
- [ ] Texto al 200% sin pérdida de contenido; sin scroll horizontal a 320 px.
- [ ] `prefers-reduced-motion` respetado (ver §9).
- [ ] Enlace de WhatsApp con texto que describa la acción, no "clic aquí".

Verificación de las combinaciones propuestas: ver tabla §2.4. Las únicas que no
alcanzan AA en texto normal (blanco/magenta y magenta/blanco, 4.2:1) quedan
restringidas a títulos grandes, iconos y componentes gráficos, y existe
`--magenta-texto` para el resto.

---

## 11. Qué se retira del sistema actual y por qué

| Se retira | Motivo |
|---|---|
| Emojis como iconos (`.v-tarjeta__ico`) | Dependen del sistema operativo, no son accesibles ni consistentes; se sustituyen por el set SVG |
| Degradado en botones (`.boton--degradado`) | El blanco sobre magenta da 4.2:1; además es la señal más "agencia" del sitio |
| Degradado de 3 colores y blobs difuminados (`--degradado-banda`, `.v-blob`) | Ruido visual, ilegible y costoso en GPU; el degradado queda en un solo banner |
| Radios de 24–30 px en todo | Afectan la percepción de rigor; se baja a 16/20 |
| Sombra en cada tarjeta | 6 sombras simultáneas anulan la jerarquía; borde de 1 px basta |
| Rejillas de tarjetas idénticas (paquetes/opcionales/servicios) | Todo pesa lo mismo; se diferencian tarjeta, lista con reglas y bloque ancla |
| Botones en mayúsculas con tracking | Alargan el texto y gritan; se usa caja alta y 14 px/700 |
| `transform: translateY(-2px)` en hover | Movimiento constante que distrae; se sustituye por cambio de color |
| Marqués de textos en movimiento | Se percibe como relleno; los clientes pasan a una franja estática |
| Grises fríos `#666c78` / `#dbdde0` | Enfriaban la marca junto al morado; la rampa nueva tiene tinte violeta cálido |
