const carrusel = document.querySelector(".carrusel");
const zona = carrusel.querySelector(".diapositivas");
const diapositivas = [...zona.children];
const pausa = carrusel.querySelector(".pausa");
let actual = 0;
let timer = null;

function mostrar(i) {
  actual = (i + diapositivas.length) % diapositivas.length;
  diapositivas.forEach((d, j) => (d.hidden = j !== actual));
}

function reproducir(si) {
  clearInterval(timer);
  timer = si ? setInterval(() => mostrar(actual + 1), 6000) : null;
  pausa.textContent = si ? "Pausar" : "Reproducir";
  // Mientras gira solo, no se anuncia cada cambio
  zona.setAttribute("aria-live", si ? "off" : "polite");
}

pausa.addEventListener("click", () => reproducir(!timer));
carrusel.querySelector(".anterior").addEventListener("click", () => {
  reproducir(false);
  mostrar(actual - 1);
});
carrusel.querySelector(".siguiente").addEventListener("click", () => {
  reproducir(false);
  mostrar(actual + 1);
});
carrusel.addEventListener("focusin", () => reproducir(false));

reproducir(!matchMedia("(prefers-reduced-motion: reduce)").matches);
