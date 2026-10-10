/**
 * Qué equipo tiene que actuar para cumplir cada criterio.
 * Es una clasificación propia y orientativa: el W3C no reparte los criterios por perfiles.
 *   desarrollo: HTML, CSS, JavaScript, componentes
 *   diseno: colores, tamaños, maquetación, interacción
 *   contenidos: textos, imágenes, vídeos y audio
 *   negocio: procesos, plazos y decisiones de producto
 */
export type Area = "desarrollo" | "diseno" | "contenidos" | "negocio";

export const AREAS: Record<Area, { nombre: string; texto: string }> = {
  desarrollo: { nombre: "Desarrollo", texto: "Código: HTML, CSS, JavaScript y componentes." },
  diseno: { nombre: "Diseño", texto: "Colores, tamaños, maquetación e interacción." },
  contenidos: { nombre: "Contenidos", texto: "Textos, imágenes, vídeos y audio que se publican." },
  negocio: { nombre: "Negocio", texto: "Procesos, plazos y decisiones de producto." },
};

const D: Area = "desarrollo";
const DI: Area = "diseno";
const C: Area = "contenidos";
const N: Area = "negocio";

const POR_CRITERIO: Record<string, Area[]> = {
  "1.1.1": [D, C],
  "1.2.1": [C],
  "1.2.2": [D, C],
  "1.2.3": [C],
  "1.2.4": [D, C, N],
  "1.2.5": [C],
  "1.2.6": [C, N],
  "1.2.7": [C],
  "1.2.8": [C],
  "1.2.9": [C, N],
  "1.3.1": [D, DI],
  "1.3.2": [D, DI],
  "1.3.3": [DI, C],
  "1.3.4": [D, DI],
  "1.3.5": [D],
  "1.3.6": [D],
  "1.4.1": [DI],
  "1.4.2": [D, DI],
  "1.4.3": [DI],
  "1.4.4": [D, DI],
  "1.4.5": [DI, C],
  "1.4.6": [DI],
  "1.4.7": [C],
  "1.4.8": [D, DI],
  "1.4.9": [DI, C],
  "1.4.10": [D, DI],
  "1.4.11": [DI],
  "1.4.12": [D, DI],
  "1.4.13": [D, DI],
  "2.1.1": [D],
  "2.1.2": [D],
  "2.1.3": [D],
  "2.1.4": [D],
  "2.2.1": [D, N],
  "2.2.2": [D, DI],
  "2.2.3": [D, N],
  "2.2.4": [D, N],
  "2.2.5": [D, N],
  "2.2.6": [N],
  "2.3.1": [DI, C],
  "2.3.2": [DI, C],
  "2.3.3": [D, DI],
  "2.4.1": [D],
  "2.4.2": [D, C],
  "2.4.3": [D, DI],
  "2.4.4": [D, C],
  "2.4.5": [DI, N],
  "2.4.6": [DI, C],
  "2.4.7": [D, DI],
  "2.4.8": [DI],
  "2.4.9": [C],
  "2.4.10": [C],
  "2.4.11": [D, DI],
  "2.4.12": [D, DI],
  "2.4.13": [DI],
  "2.5.1": [D, DI],
  "2.5.2": [D],
  "2.5.3": [D, DI],
  "2.5.4": [D, DI],
  "2.5.5": [DI],
  "2.5.6": [D],
  "2.5.7": [D, DI],
  "2.5.8": [DI],
  "3.1.1": [D],
  "3.1.2": [D, C],
  "3.1.3": [C],
  "3.1.4": [C],
  "3.1.5": [C],
  "3.1.6": [C],
  "3.2.1": [D],
  "3.2.2": [D, DI],
  "3.2.3": [DI],
  "3.2.4": [DI, C],
  "3.2.5": [D, DI],
  "3.2.6": [DI, N],
  "3.3.1": [D, C],
  "3.3.2": [DI, C],
  "3.3.3": [D, C],
  "3.3.4": [D, N],
  "3.3.5": [C, N],
  "3.3.6": [D, N],
  "3.3.7": [D, DI],
  "3.3.8": [D, N],
  "3.3.9": [D, N],
  "4.1.1": [D],
  "4.1.2": [D],
  "4.1.3": [D],
};

/** Áreas de un criterio, siempre en el mismo orden: desarrollo, diseño, contenidos, negocio */
export const areas = (id: string): Area[] =>
  (Object.keys(AREAS) as Area[]).filter((a) => POR_CRITERIO[id]?.includes(a));
