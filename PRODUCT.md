# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Equipos de empresas y administraciones españolas que tienen que cumplir la normativa de accesibilidad digital, en tres perfiles con el mismo peso:

- **Quien programa:** busca el criterio concreto y el código correcto e incorrecto para aplicarlo.
- **Quien diseña:** contraste, tamaño de objetivos, foco visible y estados antes de llegar al código.
- **Quien dirige o asesora:** a quién obliga la ley, desde cuándo, qué sanciones hay y qué documentación hace falta.

No son juristas ni, necesariamente, especialistas en accesibilidad.

## Product Purpose

Explicar en castellano claro qué exige la normativa de accesibilidad digital (España y UE), si te afecta y cómo llevarla al código, con los criterios WCAG 2.2 uno a uno, componentes accesibles con demos y las fuentes oficiales. Éxito: alguien llega con una duda («¿qué pide el 1.4.3?», «¿me obliga la Ley 11/2023?») y sale con la respuesta y algo que puede aplicar.

## Positioning

Une la ley y el código en un solo sitio y en castellano: cada criterio tiene un caso real, ejemplos de código correcto e incorrecto y cómo comprobarlo, y la web en sí es un ejemplo de lo que explica (WCAG 2.2 AA).

## Operating Context

- Se consulta a menudo en mitad del trabajo: buscando un criterio concreto, revisando un componente o preparando una declaración de accesibilidad.
- Secciones: Inicio, Criterios (listado + una página por criterio), Componentes (nativos y a medida con demos), ¿Me afecta? (comprobador de tres preguntas, asistente con IA y FAQ), Normativa (RD 1112/2018, Ley 11/2023, EN 301 549, LSSI, cronología, sanciones, enlaces).
- En Criterios, los usos prioritarios son: encontrar uno concreto rápido, leer la ficha con comodidad aprovechando el ancho y recorrerlos para aprender (por principio y pauta, sabiendo dónde estás).

## Capabilities and Constraints

- Astro + Tailwind CSS v4, pnpm, HTML estático y JavaScript mínimo; sin frameworks de UI. Reglas completas en `CLAUDE.md`.
- Colores solo como tokens en `src/styles/global.css`, con modo claro y oscuro.
- Bloques de código con `<Code>` de Astro (tema `css-variables`); sin librerías de resaltado.
- Sin dependencias nuevas sin justificación escrita.
- Ajuste de tamaño de texto propio (A− / A+) en la cabecera.
- El asistente con IA solo funciona dentro de un artefacto de claude.ai; fuera aparece desactivado.

## Brand Commitments

- Nombre: «Pon el foco». Lema y posicionamiento: «Accesibilidad web y WCAG en español».
- Logo: el indicador de foco de la propia web (anillo amarillo `--mark` dentro de un anillo de tinta) alrededor de un punto de tinta. Une el foco de teclado y «poner el foco» en algo. Va con `aria-hidden` junto al nombre; favicon en `public/favicon.svg`.
- Tono: castellano claro, frases cortas, sin jerga innecesaria; para no juristas.
- La web tiene que ser un ejemplo de lo que explica. Si un recurso visual choca con WCAG 2.2 AA, gana la accesibilidad.

## Evidence on Hand

- Contenido real: criterios WCAG 2.2 (`src/data/criterios.ts`), ejemplos de código (`src/data/ejemplos.ts`), componentes (`src/data/componentes.ts`), enlaces W3C (`src/data/w3c.ts`), lógica del comprobador (`src/data/comprobador.ts`).
- Fuentes oficiales: BOE, DOUE, W3C, ETSI, OMS.
- No hay testimonios, clientes, cifras de uso ni casos de éxito: no inventarlos.

## Product Principles

1. La accesibilidad va antes que el diseño.
2. Todo dato legal se cita con fuente oficial; lo no confirmado se dice.
3. De la ley al código: cada explicación termina en algo aplicable.
4. Sencillez: menos código y menos dependencias.

## Accessibility & Inclusion

WCAG 2.2 AA obligatorio en cada cambio: HTML semántico, contraste 4,5:1 en texto y 3:1 en componentes (claro y oscuro), foco siempre visible, objetivos de 44×44 px en controles principales, texto ampliable al 200 % y 320 px sin scroll horizontal, `prefers-reduced-motion`, `prefers-color-scheme`, mensajes dinámicos con `aria-live`, `lang` correcto, sin overlays.
