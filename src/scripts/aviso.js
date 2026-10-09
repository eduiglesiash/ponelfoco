const avisos = document.querySelector(".avisos");

function avisar(texto) {
  const aviso = document.createElement("div");
  aviso.className = "aviso";
  const mensaje = document.createElement("p");
  mensaje.textContent = texto;
  const cerrar = document.createElement("button");
  cerrar.type = "button";
  cerrar.textContent = "Cerrar aviso";
  cerrar.addEventListener("click", () => aviso.remove());
  aviso.append(mensaje, cerrar);
  avisos.append(aviso);
}

document.querySelector(".guardar").addEventListener("click", () => avisar("Cambios guardados."));
