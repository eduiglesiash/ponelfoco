# Sitio completo — rediseño «Barcelona 92»

Scope: todo el sitio (portada, Criterios listado y ficha, Componentes, ¿Me afecta?, Normativa). Mode: Read (Criterios y Normativa), con portada de tono Persuade.
Audience/job: programar, diseñar, dirigir. El usuario pidió: más moderno, animaciones y efectos accesibles, color más actual y menos serio, navegación replanteada (mismas funciones).
Constraints: WCAG 2.2 AA en claro y oscuro, prefers-reduced-motion anula todo movimiento, 320 px, texto al 200 %, sin dependencias nuevas, tokens en global.css. No usar el logotipo ni marcas olímpicas: solo el lenguaje gráfico (trazo de pincel, colores mediterráneos, figuras).

## Direction contract

THESIS: La accesibilidad son personas haciendo cosas. Cada principio WCAG es una figura de trazo de pincel en un color mediterráneo (Perceptible rojo, Operable azul, Comprensible amarillo, Robusto verde). Rechaza el sitio de documentación gris y la metáfora de transporte anterior.

OWN-WORLD: Blanco luminoso y tinta, con campos de color pleno (amarillo como gran campo de llamada; rojo, azul, verde por principio). Figuras de 3 trazos (cabeza punto, brazos, piernas) dibujadas en SVG con extremos redondeados. Subrayados y resaltados como pinceladas. Titulares en Bricolage Grotesque 800 (personalidad actual), cuerpo en Atkinson Hyperlegible Next (baja visión), mono Atkinson para código y números. Sin tarjetas grises: campos de color, filetes y pinceladas.

STORY: El visitante entiende en un vistazo que hay cuatro ideas (las cuatro figuras), elige la suya, encuentra el criterio con el buscador o la lista por principio, y lo lee con calma con el código al lado.

FIRST VIEWPORT: Portada: titular grande con «ya es obligatoria» sobre pincelada amarilla; a la derecha, las cuatro figuras dibujándose trazo a trazo, cada una enlazando a su principio. Criterios: titular, buscador ancho y cuatro botones-figura para filtrar por principio; debajo, a todo el ancho, el listado en columnas agrupado por pauta con número, nombre y nivel. Ficha: figura del principio y lista de su principio a la izquierda con buscador arriba, número gigante en el color del principio que se transforma desde el listado (View Transitions), columna de lectura de ~68ch, índice a la derecha.

FORM: Barcelona 92 (identidad olímpica: pictogramas de pincel y color mediterráneo), candidato 1 de mi lista ordenada (IMPECCABLE’S PICK). Seed key cfef734f. Code-led. Movimiento: trazos que se dibujan (stroke-dashoffset), View Transitions entre páginas, apariciones ligadas al scroll (animation-timeline: view()), microinteracciones de pulsación; todo dentro de prefers-reduced-motion: no-preference y visible por defecto.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
