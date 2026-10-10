/**
 * Selección del filtro por responsabilidad, compartida entre el listado de criterios y las fichas.
 * Se guarda junto al resto de filtros del listado; si el almacenamiento falla, el filtro funciona igual sin recordar.
 */
const CLAVE = "ac-filters";

/** @returns {string[]} */
export function leerAreas() {
  try {
    const s = JSON.parse(localStorage.getItem(CLAVE) || "null");
    return Array.isArray(s?.areas) ? s.areas : [];
  } catch {
    return [];
  }
}

/** @param {string[]} areas */
export function guardarAreas(areas) {
  try {
    const s = JSON.parse(localStorage.getItem(CLAVE) || "null") ?? {};
    localStorage.setItem(CLAVE, JSON.stringify({ ...s, areas }));
  } catch {}
}

/**
 * ¿Un criterio con estas áreas («desarrollo diseno») pasa el filtro? Sin nada marcado pasan todos.
 * @param {string[]} seleccion
 * @param {string} [areas]
 */
export const coincide = (seleccion, areas = "") =>
  seleccion.length === 0 || seleccion.some((a) => areas.split(" ").includes(a));
