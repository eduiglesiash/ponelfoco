const CIUDADES = ["Barcelona", "Bilbao", "Madrid", "Málaga", "Sevilla", "Valencia", "Zaragoza"];
const input = document.getElementById("ciudad");
const lista = document.getElementById("ciudad-lista");
const estado = document.getElementById("ciudad-estado");
let activa = -1;

function mostrar(opciones) {
  lista.replaceChildren(...opciones.map((texto, i) => {
    const li = document.createElement("li");
    li.id = "ciudad-op-" + i;
    li.setAttribute("role", "option");
    li.textContent = texto;
    li.addEventListener("click", () => elegir(texto));
    return li;
  }));
  lista.hidden = opciones.length === 0;
  input.setAttribute("aria-expanded", String(!lista.hidden));
  resaltar(-1);
}

function resaltar(i) {
  activa = i;
  [...lista.children].forEach((op, j) => op.setAttribute("aria-selected", String(j === i)));
  if (i >= 0) input.setAttribute("aria-activedescendant", lista.children[i].id);
  else input.removeAttribute("aria-activedescendant");
}

function elegir(texto) {
  input.value = texto;
  mostrar([]);
}

input.addEventListener("input", () => {
  const q = input.value.trim().toLowerCase();
  const opciones = q ? CIUDADES.filter((c) => c.toLowerCase().startsWith(q)) : [];
  mostrar(opciones);
  estado.textContent = opciones.length === 1 ? "1 sugerencia" : opciones.length + " sugerencias";
});

input.addEventListener("keydown", (e) => {
  const n = lista.children.length;
  if (e.key === "ArrowDown" && n) {
    e.preventDefault();
    resaltar((activa + 1) % n);
  } else if (e.key === "ArrowUp" && n) {
    e.preventDefault();
    resaltar((activa - 1 + n) % n);
  } else if (e.key === "Enter" && activa >= 0) {
    e.preventDefault();
    elegir(lista.children[activa].textContent);
  } else if (e.key === "Escape") {
    mostrar([]);
  }
});
