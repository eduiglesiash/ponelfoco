---
version: 1
slug: "src-pages-criterios-index-astro"
primary_target: "src/pages/criterios/index.astro"
related_targets: ["src/pages/criterios/[id].astro"]
---

# Criterios WCAG 2.2 (listado y ficha) — y marco de todo el sitio

Scope: /criterios/ y /criterios/[id]/; el mundo (tokens, cabecera, tipos, botones) se aplica a todo el sitio. Mode: Read.
Audience/job: programar, diseñar, dirigir. En Criterios: encontrar uno rápido, leer la ficha con comodidad a todo el ancho, recorrerlos para aprender.
Constraints: WCAG 2.2 AA en claro y oscuro, 320 px, texto al 200 %, sin dependencias nuevas, tokens en global.css.

## Direction contract

THESIS: La red de criterios como un plano de metro. Los cuatro principios son cuatro líneas (L1 Perceptible, L2 Operable, L3 Comprensible, L4 Robusto); las pautas son tramos; cada criterio es una estación. Rechaza la documentación de barra lateral gris + tarjetas.

OWN-WORLD: Señalética de metro española. Cabecera como cartel de estación: azul marino con texto blanco. Líneas de color pleno (rojo, azul, verde, morado) con trazo de 6 px y estaciones como círculos blancos con borde. Insignias de línea cuadradas redondeadas «L1». Una sola familia: Atkinson Hyperlegible Next 400–800 (hecha para baja visión); mono solo para código y números. Sin tarjetas: filetes, trazos y tipografía.

STORY: El lector ve la red entera de un vistazo, sabe cuántas estaciones tiene cada línea, encuentra la suya con el buscador o el plano y, ya en la ficha, siempre ve su estación marcada «Estás aquí» y el transbordo a la siguiente línea.

FIRST VIEWPORT: /criterios/: título y entradilla breves a la izquierda; barra de búsqueda (atajo «/») y filtros de nivel fija arriba; debajo, a todo el ancho (hasta 90rem), cuatro columnas = cuatro líneas verticales con sus tramos y estaciones (número + nombre + nivel). Ficha: plano vertical de la línea actual a la izquierda con «Estás aquí»; en el centro, insignia de línea + pauta, número enorme y nombre, columna de lectura de ~68ch; a la derecha «En esta ficha» y los datos. Anterior/siguiente como «Estación anterior / siguiente» y «Transbordo a la línea N».

FORM: Plano de metro, candidato 1 de mi lista ordenada (IMPECCABLE’S PICK). Seed key d2c6a407. Code-led.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
