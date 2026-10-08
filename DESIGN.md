---
name: Accesibilidad en Claro
description: La normativa de accesibilidad digital y los criterios WCAG 2.2, leídos como un plano de metro.
colors:
  sign-navy: "#14275e"
  sign-navy-hover: "#213a7c"
  sign-ink: "#ffffff"
  sign-muted: "#c9d3ec"
  line-1-red: "#c8102e"
  line-2-blue: "#0057b8"
  line-3-green: "#00754a"
  line-4-purple: "#6b2c91"
  line-ink: "#ffffff"
  mark-yellow: "#ffd84d"
  mark-ink: "#10151d"
  link-blue: "#0b4fc0"
  link-blue-ink: "#ffffff"
  link-blue-soft: "#e4ecfb"
  ok-green: "#17663a"
  ok-soft: "#e2f3e8"
  ko-red: "#a3261c"
  ko-soft: "#fbe6e3"
  platform-bg: "#fafbfc"
  surface: "#ffffff"
  sunk: "#eef1f5"
  ink: "#10151d"
  muted: "#4b5564"
  rule-line: "#d3d8e0"
typography:
  display:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.3rem, 1.4rem + 3.4vw, 4rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.2rem, 1.4rem + 3.6vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  station-number:
    fontFamily: "Atkinson Hyperlegible Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "clamp(3rem, 2rem + 5vw, 5.5rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.04em"
  section-title:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.6rem, 1.2rem + 1.8vw, 2.25rem)"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "tnum"
  label:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
    lineHeight: 1.5
  data-mono:
    fontFamily: "Atkinson Hyperlegible Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.9rem"
    fontWeight: 600
    lineHeight: 1.5
  subtitle:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  caption:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 700
    lineHeight: 1.4
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  code: "10px"
  xl: "12px"
  full: "9999px"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  gutter-wide: "clamp(16px, 3vw, 40px)"
  section: "clamp(2.5rem, 5vw, 4rem)"
  stack: "1rem"
  track: "6px"
  target: "2.75rem"
components:
  button-primary:
    backgroundColor: "{colors.sign-navy}"
    textColor: "{colors.sign-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "10px 1.15rem"
    height: "2.75rem"
  button-primary-hover:
    backgroundColor: "{colors.sign-navy-hover}"
    textColor: "{colors.sign-ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "10px 1.15rem"
    height: "2.75rem"
  button-ghost-hover:
    backgroundColor: "{colors.sunk}"
    textColor: "{colors.ink}"
  toggle:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "6px 12px"
    height: "2.75rem"
  toggle-pressed:
    backgroundColor: "{colors.sign-navy}"
    textColor: "{colors.sign-ink}"
  header-sign:
    backgroundColor: "{colors.sign-navy}"
    textColor: "{colors.sign-ink}"
    typography: "{typography.label}"
  sign-board:
    backgroundColor: "{colors.sign-navy}"
    textColor: "{colors.sign-ink}"
    rounded: "{rounded.xl}"
    padding: "clamp(1.25rem, 4vw, 2.5rem)"
  line-badge-l1:
    backgroundColor: "{colors.line-1-red}"
    textColor: "{colors.line-ink}"
    rounded: "{rounded.md}"
    height: "1.9em"
    width: "2.4em"
  line-badge-l2:
    backgroundColor: "{colors.line-2-blue}"
    textColor: "{colors.line-ink}"
    rounded: "{rounded.md}"
    height: "1.9em"
    width: "2.4em"
  line-badge-l3:
    backgroundColor: "{colors.line-3-green}"
    textColor: "{colors.line-ink}"
    rounded: "{rounded.md}"
    height: "1.9em"
    width: "2.4em"
  line-badge-l4:
    backgroundColor: "{colors.line-4-purple}"
    textColor: "{colors.line-ink}"
    rounded: "{rounded.md}"
    height: "1.9em"
    width: "2.4em"
  level-badge-a:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.data-mono}"
    rounded: "{rounded.sm}"
    padding: "0.08rem 0.45rem"
  level-badge-aa:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.platform-bg}"
    typography: "{typography.data-mono}"
    rounded: "{rounded.sm}"
    padding: "0.08rem 0.45rem"
  level-badge-aaa:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.data-mono}"
    rounded: "{rounded.sm}"
    padding: "0.08rem 0.45rem"
  badge-new:
    backgroundColor: "{colors.mark-yellow}"
    textColor: "{colors.mark-ink}"
    typography: "{typography.data-mono}"
    rounded: "{rounded.sm}"
    padding: "0.08rem 0.45rem"
  route-option:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
    height: "4rem"
  route-option-checked:
    backgroundColor: "{colors.sunk}"
    textColor: "{colors.ink}"
---

# Design System: Accesibilidad en Claro

## Overview

**Creative North Star: "Plano de metro"**

La web se lee como la señalética de una red de metro española. Los cuatro principios de WCAG son cuatro líneas de color pleno (L1 Perceptible, L2 Operable, L3 Comprensible, L4 Robusto). Las pautas son tramos de cada línea y cada criterio es una estación. Quien lee siempre sabe en qué línea está, cuántas estaciones tiene y dónde está su parada: la estación actual se marca con un punto relleno, un anillo y el texto «Estás aquí». La cabecera es un cartel de estación en azul marino, en modo claro y en modo oscuro.

La estructura sale de filetes, trazos y tipografía, no de tarjetas. Un trazo de 6 px une las estaciones, un filete superior de 6 px en el color de la línea abre cada línea y los grupos de contenido se separan con filetes de 1 o 2 px. La densidad es la de un plano: mucha información a la vista, ordenada por posición y no por cajas. Hay una sola familia tipográfica, Atkinson Hyperlegible Next, diseñada para baja visión. Su versión mono se reserva para código y para números de criterio y datos.

La web tiene que ser un ejemplo de lo que explica. Cada decisión visual está por debajo del suelo de accesibilidad de `CLAUDE.md`: contraste de 4,5:1 en texto y 3:1 en componentes en los dos esquemas, objetivos de 44 px, foco siempre visible, movimiento reducido y controles propios de tema y tamaño de texto.

**Key Characteristics:**
- Cuatro líneas de color fijo; el color de línea solo significa principio.
- Cartel de estación azul marino para la cabecera, los paneles de portada y el veredicto del comprobador.
- Estaciones como círculos con borde sobre un trazo de 6 px; la actual, rellena con anillo.
- Amarillo de señal reservado para el foco, el resaltado, «Nuevo» y la píldora de obligación.
- Una familia, mono solo para código y números; sin tarjetas como andamiaje.
- Iconos de un solo juego SVG de trazo 2,6, nunca glifos Unicode.

## Colors

Una paleta de señalética: un azul marino institucional, cuatro colores de línea plenos, un amarillo de aviso y neutros fríos. Cada color tiene un único trabajo.

### Primary
- **Azul cartel de estación** (sign-navy): fondo de la cabecera, del botón principal, de los paneles de portada («Qué puedes hacer aquí» y el cierre) y del veredicto del comprobador. El hover oscurece hacia **Azul cartel encendido** (sign-navy-hover). Encima, texto blanco (sign-ink, 14,2:1) y texto secundario **Gris cartel** (sign-muted, 9,5:1). Es casi el mismo azul en oscuro (#15275c, hover #233c80): el cartel no cambia con el esquema.

### Secondary
- **Rojo línea 1** (line-1-red): Perceptible.
- **Azul línea 2** (line-2-blue): Operable.
- **Verde línea 3** (line-3-green): Comprensible.
- **Morado línea 4** (line-4-purple): Robusto.

Se usan en el trazo y los círculos de las estaciones, en las insignias «L1»…«L4», en el filete superior de cada línea, en el número enorme de la ficha y en el número del criterio anterior/siguiente. En oscuro se aclaran (#ff8a8a, #7fb2ff, #5fd39b, #c99bf0) y el texto de las insignias pasa de blanco (line-ink) a #0d1118. Todas superan 4,5:1 sobre el fondo en los dos esquemas (mínimo 5,56:1 en claro).

### Tertiary
- **Amarillo de aviso** (mark-yellow) con **Tinta de aviso** (mark-ink, 13,2:1): contorno de foco, `::selection`, el `<mark>` del titular de portada, la insignia «Nuevo», la píldora «Te obliga» del veredicto, el subrayado de la sección actual en la cabecera y el enlace «Saltar al contenido». No cambia entre esquemas.

### Neutral
- **Fondo de andén** (platform-bg): fondo de página. Oscuro #0d1118.
- **Superficie** (surface): campos, opciones y conmutadores en reposo. Oscuro #141a24.
- **Hundido** (sunk): hover de filas y estaciones, estación actual, opción elegida, código. Oscuro #1b2330.
- **Tinta** (ink): texto, botón secundario, trayecto recorrido del comprobador, insignia AA rellena, halo del foco. Oscuro #e9edf3.
- **Gris rótulo** (muted): texto secundario, nombres de tramo, estaciones cerradas, AAA. 7,3:1 en claro y 8,8:1 en oscuro (#a8b2c1).
- **Filete** (rule-line): filetes y divisores. Oscuro #2c3646. Con 1,38:1 sobre el fondo, es solo un separador: el borde de un control que haga falta ver usa muted o ink.
- **Azul enlace** (link-blue): enlaces y cursor de texto; versión suave para fondos. Oscuro #8fb4ff con texto #0d1118.
- **Bien / Mal** (ok-green / ok-soft, ko-red / ko-soft): solo para valoraciones de ejemplos correcto/incorrecto, errores y resaltado de código. Oscuro #7fd6a0 / #14301f y #ff9d92 / #3a1a17.

### Named Rules
**La regla del color de línea.** Los cuatro colores de línea solo significan «principio WCAG». No se usan para estados, decoración ni llamadas a la acción. El trayecto del comprobador se pinta en tinta precisamente para no tomar prestado un color de línea.

**La regla del amarillo de aviso.** El amarillo es para lo que tiene que saltar a la vista: el foco, el resaltado (`<mark>`, selección, sección actual, hover del botón sobre cartel), «Nuevo» y la obligación. Si algo amarillo no es ninguna de esas cosas, sobra.

**La regla del cartel.** El azul marino con texto blanco es la voz del sistema que te orienta (cabecera, paneles de destino, veredicto). Es igual en claro y en oscuro.

## Typography

**Display Font:** Atkinson Hyperlegible Next (con Atkinson Hyperlegible, system-ui)
**Body Font:** Atkinson Hyperlegible Next (la misma)
**Label/Mono Font:** Atkinson Hyperlegible Mono (con ui-monospace, Menlo, Consolas)

**Character:** Una sola voz, diseñada para baja visión, que gana jerarquía con el peso (400 a 800) y no con el cambio de familia. La mono funciona como la tipografía de los números de un plano: cifras exactas y tabulares.

Se carga desde Google Fonts con pesos 400, 600, 700, 800 y cursiva 400; la mono con 400 y 600. El cuerpo activa cifras tabulares (`tabular-nums`). El tamaño base de la raíz depende de los botones A−/A+ (`--root-size`, del 90 % al 200 %), por eso toda la escala va en rem.

### Hierarchy
- **Display** (800, clamp de 2,3 a 4 rem, interlineado 1,02, −0,03em): solo el titular de portada, con un tramo resaltado en amarillo.
- **Headline** (800, clamp de 2,2 a 3,75 rem; 4 rem en Criterios, interlineado 1,25, −0,015em): el único h1 de cada página, hasta unos 22ch.
- **Número de estación** (mono 600, clamp de 3 a 5,5 rem, interlineado 1, −0,04em, en el color de la línea): el número del criterio en su ficha, encima del nombre (clamp de 1,9 a 3 rem).
- **Section title** (800, clamp de 1,6 a 2,25 rem): h2 de sección; 1,6 rem en la cabecera de cada línea.
- **Subtitle** (800, 1,35 rem, utilidad `text-subtitle`): h3 de bloques de contenido (normas, componentes, sanciones, grupos de enlaces).
- **Title** (800, 1,2 rem, `text-title`): h3 menores dentro de una ficha.
- **Lead** (400, de 1,08 a 1,2 rem, muted): entradilla bajo los títulos, hasta 44rem. La descripción de un criterio va en 1,22 rem y tinta.
- **Body** (400, 1,0625 rem, interlineado 1,625): columna de lectura de 44rem (~68ch).
- **Label** (700, de 0,9 a 0,98 rem): navegación, botones, conmutadores, nombres de tramo (0,85 rem, muted).
- **Data mono** (600, de 0,8 a 1,1 rem): números de criterio en el plano, recuentos de estaciones, insignias de nivel, cifras clave de portada.
- **Caption** (700 o 400, 0,85 rem, `text-caption`): metadatos breves (recuentos, nombres de tramo, «Estás aquí», «Nuevo», etiquetas Bien/Mal). Es el tamaño mínimo del sitio.

Los pasos sin utilidad estándar de Tailwind son tokens de `@theme` en `global.css` (`text-caption`, `text-label`, `text-lead`, `text-title`, `text-subtitle`). No se usan tamaños literales fuera de esta escala.

### Named Rules
**La regla de una familia.** Todo es Atkinson Hyperlegible Next. La mono solo aparece en código, números de criterio, niveles y datos. Nunca en titulares ni en etiquetas de prosa.

**La regla del peso.** Los títulos van a 800 con tracking ligeramente negativo; la jerarquía la marcan el peso y el tamaño, no las mayúsculas.

## Layout

Dos contenedores. El estándar (72rem, márgenes `clamp(16px, 4vw, 40px)`) sirve para portada, comprobador y páginas de texto. El ancho (92rem, márgenes `clamp(16px, 3vw, 40px)`) sirve para Criterios y la cabecera. Las secciones de portada se separan con un filete de 1 px y un relleno vertical `clamp(2.5rem, 5vw, 4rem)`.

El listado de criterios es el plano: una columna en móvil, dos desde `md`, tres desde `xl` (L3 y L4 comparten columna) y cuatro líneas en paralelo desde el punto de ruptura propio `wide` (87,5rem). La barra de búsqueda y filtros se queda fija bajo la cabecera desde 701 px, con fondo al 95 % y desenfoque.

La ficha de un criterio tiene tres columnas: plano de la línea (17–18rem, fijo y con desplazamiento propio) a la izquierda, lectura de 44rem en el centro y «En esta ficha» con los datos (14rem) a la derecha desde `xl`. Por debajo de `lg` el plano se pliega en un `details`.

Todo funciona a 320 px y con el texto al 200 %. Las rejillas usan `minmax(min(100%, Xrem), 1fr)` y la navegación principal se desplaza en horizontal con un degradado de máscara en el borde.

### Named Rules
**La regla del filete.** Los grupos se separan con filetes, no con cajas: 1 px en rule-line entre secciones y filas, 2 px en ink para abrir un bloque (perfiles, red de líneas) y 6 px en el color de la línea para abrir una línea o el enlace anterior/siguiente.

## Elevation & Depth

Sistema plano. No hay sombras ambientales. La profundidad sale de cambios de tono (bg, surface, sunk) y de la cabecera fija en azul marino. Las únicas `box-shadow` son anillos de estado nítidos y sin desenfoque.

### Shadow Vocabulary
- **Halo de foco** (`box-shadow: 0 0 0 6px var(--ink)`) bajo un contorno `3px solid var(--mark)` con separación de 2 px: el foco global, de doble anillo, visible sobre cualquier fondo en los dos esquemas.
- **Anillo de estación actual** (`box-shadow: 0 0 0 3px var(--c)`) alrededor de un borde de 4 px en el color del fondo: «Estás aquí».
- **Opción elegida** (`box-shadow: inset 0 0 0 1px var(--ink)`): engrosa a 2,5 px el borde de la opción marcada del comprobador.

### Named Rules
**La regla del plano.** Las superficies son planas. Una sombra solo dibuja un anillo de estado (foco, estación actual, opción elegida), nunca una elevación.

## Shapes

Esquinas suaves y geométricas, como en las placas de señalética: 4 px para insignias de nivel, «Nuevo» y foco; 6 px para botones, conmutadores, filas, opciones e insignias de línea; 8 px para el veredicto y los contenedores plegables; 10 px para los bloques de código; 12 px para los paneles de cartel. Las estaciones y los marcadores del trayecto son círculos perfectos. El destino del comprobador es un marcador cuadrado de 6 px, como el final de una línea.

Los trazos son la forma principal. La línea de metro es una barra de 6 px de extremos redondeados (3 px). El tramo del comprobador también mide 6 px. Los bordes de control miden 1,5 o 2 px.

**La regla del trazo que habla.** La forma del borde codifica el estado, y siempre acompaña al texto: continuo = A u obligatorio, relleno = AA o estación actual, punteado = estación AAA, discontinuo = AAA en la insignia, estación cerrada o pregunta saltada.

## Components

### Buttons
Directos y con peso, como un pulsador de andén.
- **Shape:** esquinas de 6 px, borde de 2 px, alto mínimo de 44 px, relleno de 10 px × 1,15 rem, peso 700.
- **Primary:** cartel azul marino con texto blanco; en hover, sign-navy-hover.
- **Ghost:** transparente, con borde y texto en tinta; en hover, fondo sunk.
- **Sobre cartel:** dentro de un panel azul marino el botón se invierte (fondo blanco y texto azul marino) y en hover pasa a amarillo con tinta.
- **Focus:** el anillo global amarillo con halo de tinta. Desactivado: opacidad 50 % y cursor de no permitido.

### Chips (conmutadores de filtro)
- **Style:** superficie, borde de 1,5 px en rule-line, texto de 0,95 rem en 700, alto de 44 px; en hover, borde en tinta.
- **State:** `aria-pressed="true"` pasa a cartel azul marino con texto blanco. Son los filtros de nivel A/AA/AAA, «Solo nuevos en 2.2» y el tema de la cabecera.

### Cards / Containers
No hay tarjetas como andamiaje. Los únicos contenedores con fondo son los **paneles de cartel** (azul marino, 12 px, relleno `clamp(1.25rem, 4vw, 2.5rem)`): la lista «Qué puedes hacer aquí», con filas separadas por un filete sign-navy-hover, y el panel de cierre de portada. El **veredicto** del comprobador es un cartel de 8 px con una píldora: amarillo con tinta si te obliga, blanco con azul marino si no. El plano plegable de la ficha en móvil usa un borde de 1 px en rule-line y 8 px de radio.

### Inputs / Fields
- **Style:** el buscador lleva superficie, borde de 1,5 px en muted, 6 px de radio, icono de lupa en trazo y la tecla «/» como `kbd` mono.
- **Focus:** con `focus-within` el borde pasa a tinta y aparece el contorno amarillo de 3 px.
- **Opciones del comprobador:** filas de 64 px de alto mínimo, con un punto de 20 px a la izquierda (borde de 3 px en muted). Elegida: borde en tinta, fondo sunk y punto relleno en tinta con un anillo interior.

### Navigation
Cabecera de cartel de estación, fija desde `md`: marca con pictograma propio en trazo de 2 px y nombre en 800; secciones en 700 con 44 px de alto. La sección actual se marca con una barra amarilla de 3 px bajo el texto y `aria-current`. A la derecha, A−/A+ y el conmutador de tema con borde sign-muted de 1 px y hover en sign-navy-hover. En móvil, las secciones pasan a una fila desplazable a todo el ancho.

### Plano de línea (componente firma)
Un trazo vertical de 6 px en el color de la línea. Los tramos llevan su número y nombre en muted; las estaciones son círculos de 1,1 rem con borde de 3,5 px y relleno del color del fondo. Cada fila muestra el número en mono 600 (3,1 rem de ancho fijo), el nombre y la insignia de nivel, con 44 px de alto y hover en sunk con nombre subrayado. Variantes: AAA con borde punteado; criterio eliminado en 2.2 con borde discontinuo en muted y nombre en muted; estación actual con punto relleno de 1,6 rem, borde del color del fondo, anillo de 3 px, fila en sunk y «Estás aquí» debajo del nombre.

### Insignias
- **Línea** («L1»…«L4»): cuadrado redondeado de 6 px en el color pleno de la línea, texto 800, 1,9em × 2,4em como mínimo. En el riel de la ficha crecen a 44 × 44 px y funcionan como enlaces para cambiar de línea.
- **Nivel:** mono 600 de 0,8 rem y 4 px de radio. A con borde de tinta, AA rellena de tinta, AAA con borde discontinuo en muted. El texto del nivel siempre está.
- **Nuevo:** amarillo de aviso con tinta, en mono.

### Trayecto del comprobador
Cada pregunta es una estación numerada: un marcador circular de 2,5 rem con borde de 4 px unido a la siguiente por un tramo de 6 px. Pendiente: borde rule-line y número en muted. Actual o hecha: marcador relleno de tinta. Saltada: borde discontinuo en muted, tramo discontinuo y pregunta tachada. Las respuestas dadas quedan como paradas con el botón «Cambiar». El tramo recorrido es de tinta, nunca de un color de línea.

### Iconos
Un único juego en `Icon.astro`: SVG de 22 × 22 con trazo de 2,6, extremos y uniones redondeados, siempre `aria-hidden` y junto a un texto. Contiene check, cross, flechas izquierda y derecha y transbordo (anillo con punto, en el color de la línea de destino).

### Bloques de código
`<Code>` de Astro con el tema css-variables mapeado a los tokens: fondo sunk, palabras clave en línea 4, cadenas en ok, funciones en azul enlace y constantes en ko. Radio de 10 px y mono de 0,9 rem. La etiqueta superior es verde suave con check («Correcto»), roja suave con cruz («Incorrecto») o rule-line neutra con el lenguaje.

## Do's and Don'ts

### Do:
- **Do** usa los colores de línea solo para identificar un principio: trazo, estaciones, insignia «L», filete de 6 px y número del criterio.
- **Do** marca la estación actual con punto relleno, anillo y el texto «Estás aquí»; la forma nunca va sin texto.
- **Do** separa con filetes (1 px rule-line, 2 px ink, 6 px color de línea) y tipografía antes que con cajas.
- **Do** usa el cartel azul marino con texto blanco para la cabecera y para los paneles que orientan o dan un veredicto, igual en claro y en oscuro.
- **Do** da a cada control principal 44 × 44 px como mínimo y deja el foco global (contorno amarillo de 3 px con halo de tinta de 6 px).
- **Do** comprueba cada pareja nueva de tokens en claro y en oscuro: 4,5:1 en texto y 3:1 en bordes de control (usa muted o ink, no rule-line).
- **Do** saca los iconos de `Icon.astro` (SVG, trazo 2,6, `aria-hidden`).

### Don't:
- **Don't** uses un color de línea para estados, avisos o llamadas a la acción; el trayecto del comprobador va en tinta.
- **Don't** uses el amarillo de aviso fuera del foco, el resaltado, «Nuevo» y la píldora de obligación; nunca como relleno decorativo ni como color de texto sobre fondo claro.
- **Don't** montes la página con tarjetas con borde y sombra, ni con una barra lateral gris de documentación.
- **Don't** pongas en mono titulares, etiquetas ni prosa; la mono es para código, números y datos.
- **Don't** uses glifos Unicode (✓, →, ›) como iconos, ni etiquetas en mayúsculas espaciadas sobre los títulos.
- **Don't** añadas sombras de elevación; las únicas sombras son anillos de estado.
- **Don't** escribas hex ni colores de la paleta de Tailwind en los componentes; todo color es un token de `global.css` con su versión oscura.
- **Don't** quites ni rebajes el `:focus-visible` global, ni fijes alturas en contenedores de texto.
