// Interruptores de contenido del sitio.
//
// MOSTRAR_PAQUETES
//   false → oculta toda referencia a precios: la sección de paquetes, los
//           enlaces al ancla #precio (Header, Footer y Hero) y las cifras
//           de soporte en la FAQ. El contenido de `Paquetes.astro` no se
//           toca: sigue listo para reactivarse.
//   true  → vuelven a verse los paquetes y los precios tal como estaban.
export const MOSTRAR_PAQUETES = false;

// Interruptor OCULTO del widget de chat del asistente.
//
//   false → el widget NO se renderiza (ni marcado ni script): el sitio queda
//           exactamente como está hoy y el botón flotante de WhatsApp
//           (`ws-flotante`) se comporta igual.
//   true  → aparece la burbuja de chat abajo-derecha y el panel del asistente.
//           El botón flotante de WhatsApp se integra dentro del panel.
//
// Julio autorizó construir el widget pero NO mostrarlo todavía. Para
// encenderlo, poner esta constante en `true`.
export const MOSTRAR_BOT = false;
