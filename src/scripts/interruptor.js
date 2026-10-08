// Interruptor: un botón con role="switch". El botón ya responde a Enter y Espacio;
// solo hay que cambiar aria-checked, y el estilo visual se basa en ese atributo.
for (const sw of document.querySelectorAll('[role="switch"]')) {
  sw.addEventListener("click", () => {
    const on = sw.getAttribute("aria-checked") === "true";
    sw.setAttribute("aria-checked", String(!on));
  });
}
