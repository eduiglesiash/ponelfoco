const boton = document.querySelector('[aria-controls="menu-servicios"]');
const menu = document.getElementById("menu-servicios");

function mostrar(abrir) {
  boton.setAttribute("aria-expanded", String(abrir));
  menu.hidden = !abrir;
}

boton.addEventListener("click", () => mostrar(menu.hidden));

// Esc cierra y devuelve el foco al botón
boton.parentElement.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !menu.hidden) {
    mostrar(false);
    boton.focus();
  }
});
