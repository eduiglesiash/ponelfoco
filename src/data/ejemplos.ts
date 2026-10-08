/**
 * Ejemplos de código de cada criterio WCAG 2.2 de nivel A y AA.
 * Cada ejemplo muestra cómo cumplirlo (bien) y, si ayuda, un error habitual (mal).
 * Los AAA no tienen ejemplos: la normativa no los exige.
 */

export type Lang = "html" | "css" | "js" | "astro" | "txt";

export interface Ejemplo {
  titulo: string;
  /** Explicación corta de qué hace el código correcto */
  explicacion?: string;
  lang: Lang;
  bien: string;
  mal?: string;
}

export const EJEMPLOS: Record<string, Ejemplo[]> = {
  "1.1.1": [
    {
      titulo: "Imágenes informativas, decorativas y botones con icono",
      explicacion:
        "El alt describe lo que la imagen aporta, no el archivo. Si es decorativa, alt vacío. Si un botón solo tiene un icono, el nombre va en el botón y el icono se oculta.",
      lang: "html",
      bien: `
<img src="zapatillas.jpg" alt="Zapatillas de running azules, vista lateral">

<!-- Decorativa: alt vacío para que el lector de pantalla la ignore -->
<img src="adorno.svg" alt="">

<button type="button" aria-label="Añadir al carrito">
  <svg aria-hidden="true" focusable="false">…</svg>
</button>`,
      mal: `
<img src="IMG_2034.jpg">
<img src="adorno.svg" alt="imagen decorativa">

<button type="button">
  <svg>…</svg>
</button>`,
    },
  ],
  "1.2.1": [
    {
      titulo: "Audio con transcripción al lado",
      lang: "html",
      bien: `
<figure>
  <audio controls src="pleno-2026-10-01.mp3"></audio>
  <figcaption>
    Pódcast del pleno del 1 de octubre.
    <a href="pleno-2026-10-01-transcripcion.html">Leer la transcripción completa</a>
  </figcaption>
</figure>`,
      mal: `
<audio controls src="pleno-2026-10-01.mp3"></audio>`,
    },
  ],
  "1.2.2": [
    {
      titulo: "Vídeo con pista de subtítulos",
      explicacion: "El elemento track carga un archivo WebVTT. El reproductor nativo muestra el botón de subtítulos.",
      lang: "html",
      bien: `
<video controls>
  <source src="activar-tarjeta.mp4" type="video/mp4">
  <track kind="captions" src="activar-tarjeta.es.vtt" srclang="es" label="Español" default>
</video>`,
      mal: `
<video controls src="activar-tarjeta.mp4"></video>`,
    },
    {
      titulo: "Archivo de subtítulos WebVTT",
      explicacion: "Incluye diálogos y sonidos relevantes entre corchetes. Revísalo siempre: los automáticos fallan con cifras y nombres.",
      lang: "txt",
      bien: `
WEBVTT

00:00:01.000 --> 00:00:04.000
Abre la app y entra en «Tarjetas».

00:00:04.500 --> 00:00:06.000
[Suena una alerta]

00:00:06.500 --> 00:00:09.000
Confirma con tu PIN de cuatro cifras.`,
    },
  ],
  "1.2.3": [
    {
      titulo: "Alternativa descriptiva o versión audiodescrita",
      explicacion:
        "Existe <track kind=\"descriptions\">, pero los navegadores apenas lo soportan. Lo fiable es ofrecer una versión audiodescrita o una transcripción que describa lo que pasa en pantalla.",
      lang: "html",
      bien: `
<video controls>
  <source src="tutorial.mp4" type="video/mp4">
  <track kind="captions" src="tutorial.es.vtt" srclang="es" label="Español">
</video>
<ul>
  <li><a href="tutorial-audiodescrito.mp4">Versión con audiodescripción</a></li>
  <li><a href="tutorial-transcripcion.html">Transcripción descriptiva</a> (diálogos y acciones en pantalla)</li>
</ul>`,
      mal: `
<!-- El narrador dice «pulsa aquí» y solo se ve en la imagen dónde -->
<video controls src="tutorial.mp4"></video>`,
    },
  ],
  "1.2.4": [
    {
      titulo: "Directo con subtítulos activados",
      explicacion:
        "Los subtítulos en directo los genera un servicio (estenotipia o rehablado) y llegan con la emisión. En tu código, asegúrate de que el reproductor los muestra. En YouTube, cc_load_policy=1 los activa por defecto.",
      lang: "html",
      bien: `
<iframe
  src="https://www.youtube-nocookie.com/embed/live_stream?channel=ID_DEL_CANAL&cc_load_policy=1&hl=es"
  title="Directo: acto de graduación 2026, con subtítulos"
  allow="fullscreen"></iframe>`,
      mal: `
<!-- Sin servicio de subtitulado: «los subiremos más adelante» -->
<iframe src="https://www.youtube-nocookie.com/embed/live_stream?channel=ID_DEL_CANAL"></iframe>`,
    },
  ],
  "1.2.5": [
    {
      titulo: "Versión con audiodescripción",
      explicacion: "En nivel AA ya no basta una transcripción: hace falta audiodescripción para la información visual importante.",
      lang: "html",
      bien: `
<video controls>
  <source src="campana.mp4" type="video/mp4">
  <track kind="captions" src="campana.es.vtt" srclang="es" label="Español">
</video>
<p><a href="campana-audiodescrita.mp4">Ver la versión con audiodescripción</a></p>`,
    },
  ],
  "1.3.1": [
    {
      titulo: "Estructura con elementos semánticos",
      explicacion: "Encabezados, grupos de campos y tablas con su elemento HTML: así el lector de pantalla transmite la misma estructura que se ve.",
      lang: "html",
      bien: `
<h2>Datos de envío</h2>
<fieldset>
  <legend>Tipo de entrega</legend>
  <label><input type="radio" name="entrega" value="domicilio"> A domicilio</label>
  <label><input type="radio" name="entrega" value="tienda"> Recoger en tienda</label>
</fieldset>

<table>
  <caption>Horario de atención</caption>
  <tr><th scope="col">Día</th><th scope="col">Horario</th></tr>
  <tr><th scope="row">Lunes</th><td>9:00 a 14:00</td></tr>
</table>`,
      mal: `
<div class="titulo-grande">Datos de envío</div>
<div class="etiqueta">Tipo de entrega</div>
<input type="radio" name="entrega"> A domicilio
<input type="radio" name="entrega"> Recoger en tienda

<div class="tabla">
  <div class="fila"><b>Día</b> <b>Horario</b></div>
  <div class="fila">Lunes 9:00 a 14:00</div>
</div>`,
    },
  ],
  "1.3.2": [
    {
      titulo: "El orden del código es el orden de lectura",
      explicacion: "Los lectores de pantalla leen el HTML en orden. Si reordenas con CSS, lo que se oye no coincide con lo que se ve.",
      lang: "html",
      bien: `
<ol class="pasos">
  <li>Elige la talla</li>
  <li>Añade al carrito</li>
  <li>Paga</li>
</ol>`,
      mal: `
<div class="pasos" style="display: flex">
  <p style="order: 2">Paso 2: añade al carrito</p>
  <p style="order: 1">Paso 1: elige la talla</p>
  <p style="order: 3">Paso 3: paga</p>
</div>`,
    },
  ],
  "1.3.3": [
    {
      titulo: "Instrucciones que no dependen de forma, color o posición",
      lang: "html",
      bien: `
<p>Para continuar, pulsa el botón <strong>Siguiente</strong>, debajo del formulario.</p>
<button type="submit">Siguiente <span aria-hidden="true">→</span></button>`,
      mal: `
<p>Pulsa el botón verde de la derecha para continuar.</p>
<button type="submit" class="verde">→</button>`,
    },
  ],
  "1.3.4": [
    {
      titulo: "Adaptar el diseño en lugar de bloquear la orientación",
      explicacion: "Revisa también el manifiesto de tu app web: no fijes \"orientation\": \"portrait\" salvo que sea imprescindible.",
      lang: "css",
      bien: `
.app { display: grid; gap: 1rem; }

@media (orientation: landscape) {
  .app { grid-template-columns: 1fr 1fr; }
}`,
      mal: `
/* Obliga a girar el móvil */
@media (orientation: portrait) {
  .app { display: none; }
  .aviso-gira-el-movil { display: block; }
}`,
    },
  ],
  "1.3.5": [
    {
      titulo: "Atributo autocomplete en los datos personales",
      explicacion:
        "Con autocomplete el navegador rellena los datos y algunas herramientas muestran iconos que ayudan a entender cada campo.",
      lang: "html",
      bien: `
<label for="nombre">Nombre y apellidos</label>
<input id="nombre" name="nombre" autocomplete="name">

<label for="email">Correo electrónico</label>
<input id="email" name="email" type="email" autocomplete="email">

<label for="tel">Teléfono</label>
<input id="tel" name="tel" type="tel" autocomplete="tel">

<label for="cp">Código postal</label>
<input id="cp" name="cp" autocomplete="postal-code" inputmode="numeric">`,
      mal: `
<input name="campo1" placeholder="Nombre" autocomplete="off">
<input name="campo2" placeholder="Email" autocomplete="off">`,
    },
  ],
  "1.4.1": [
    {
      titulo: "Errores con texto, no solo con un borde rojo",
      lang: "html",
      bien: `
<label for="iban">IBAN</label>
<input id="iban" aria-invalid="true" aria-describedby="iban-error">
<p id="iban-error" class="error">
  <svg aria-hidden="true" focusable="false">…</svg>
  Error: el IBAN debe tener 24 caracteres.
</p>`,
      mal: `
<label for="iban">IBAN</label>
<input id="iban" style="border-color: red">`,
    },
    {
      titulo: "Enlaces dentro del texto subrayados",
      explicacion: "Si un enlace solo se distingue por el color, quien no percibe ese color no lo encuentra.",
      lang: "css",
      bien: `
p a { text-decoration: underline; text-underline-offset: .18em; }`,
      mal: `
p a { color: #1747a6; text-decoration: none; }`,
    },
  ],
  "1.4.2": [
    {
      titulo: "El audio lo inicia la persona",
      explicacion:
        "Si un sonido arranca solo y dura más de 3 segundos, tiene que poder pararse o bajar de volumen. Lo más sencillo es no reproducir sonido automáticamente.",
      lang: "html",
      bien: `
<audio controls src="sintonia.mp3"></audio>

<!-- Vídeo de fondo: siempre silenciado -->
<video autoplay muted loop playsinline src="fondo.mp4"></video>`,
      mal: `
<audio autoplay loop src="sintonia.mp3"></audio>`,
    },
  ],
  "1.4.3": [
    {
      titulo: "Colores de texto con contraste suficiente",
      explicacion:
        "Texto normal: 4,5:1. Texto grande (24 px, o 18,66 px en negrita): 3:1. El texto de ejemplo (placeholder) también cuenta.",
      lang: "css",
      bien: `
:root {
  --texto: #16202e;        /* sobre #ffffff: 16,4:1 */
  --texto-suave: #4a5566;  /* sobre #ffffff: 7,5:1 */
  --placeholder: #6b7280;  /* sobre #ffffff: 4,8:1 */
}`,
      mal: `
.nota { color: #9ca3af; }        /* sobre #ffffff: 2,5:1 */
input::placeholder { color: #ccc; }`,
    },
  ],
  "1.4.4": [
    {
      titulo: "Tamaños relativos y zoom permitido",
      explicacion: "Usa rem para el texto y deja que los contenedores crezcan. Nunca bloquees el zoom en la etiqueta viewport.",
      lang: "html",
      bien: `
<meta name="viewport" content="width=device-width, initial-scale=1">

<style>
  body { font-size: 1.0625rem; }            /* respeta el tamaño elegido en el navegador */
  .tarjeta { min-height: 10rem; padding: 1rem; }  /* crece con el texto */
</style>`,
      mal: `
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

<style>
  body { font-size: 14px; }
  .tarjeta { height: 120px; overflow: hidden; }  /* al ampliar, el texto se corta */
</style>`,
    },
  ],
  "1.4.5": [
    {
      titulo: "Texto real sobre la imagen",
      explicacion: "El texto en HTML se puede ampliar, traducir y cambiar de color. Comprueba el contraste del texto sobre la imagen.",
      lang: "html",
      bien: `
<div class="banner">
  <p class="banner-titulo">Rebajas: hasta un 50 % de descuento</p>
</div>

<style>
  .banner { background: #16202e url(fondo-rebajas.jpg) center / cover; }
  .banner-titulo { color: #fff; font-size: 2.5rem; font-weight: 700; }
</style>`,
      mal: `
<img src="banner-rebajas.png" alt="Rebajas: hasta un 50 % de descuento">`,
    },
  ],
  "1.4.10": [
    {
      titulo: "Diseño que se adapta a 320 px de ancho",
      explicacion:
        "A 320 px (o al 400 % de zoom) no debe aparecer scroll horizontal en la página. Las tablas de datos pueden desplazarse dentro de su propio contenedor.",
      lang: "css",
      bien: `
.rejilla {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr));
  gap: 1rem;
}
img { max-width: 100%; height: auto; }
.tabla-desplazable { overflow-x: auto; }`,
      mal: `
.contenedor { width: 1200px; }
.columna { float: left; width: 400px; }`,
    },
  ],
  "1.4.11": [
    {
      titulo: "Bordes de campos y foco con 3:1",
      explicacion: "Los bordes que indican dónde está un control y el indicador de foco necesitan 3:1 contra el fondo.",
      lang: "css",
      bien: `
input, select, textarea {
  border: 1.5px solid #6b7280;  /* sobre #ffffff: 4,8:1 */
}
:focus-visible {
  outline: 3px solid #1747a6;   /* sobre #ffffff: 8,4:1 */
  outline-offset: 2px;
}`,
      mal: `
input { border: 1px solid #e5e7eb; }  /* sobre #ffffff: 1,2:1 */`,
    },
  ],
  "1.4.12": [
    {
      titulo: "Contenedores que aguantan más espaciado",
      explicacion: "Si la persona aumenta el interlineado o el espacio entre letras, nada se debe cortar ni solapar.",
      lang: "css",
      bien: `
.boton { min-height: 2.75rem; padding: .5rem 1rem; }  /* sin altura fija */
.tarjeta p { overflow-wrap: anywhere; }`,
      mal: `
.boton { height: 40px; overflow: hidden; white-space: nowrap; }`,
    },
    {
      titulo: "Estilos para comprobarlo",
      explicacion: "Aplica estos valores (los del criterio) con las herramientas del navegador y revisa que todo se sigue leyendo.",
      lang: "css",
      bien: `
* {
  line-height: 1.5 !important;
  letter-spacing: .12em !important;
  word-spacing: .16em !important;
}
p { margin-bottom: 2em !important; }`,
    },
  ],
  "1.4.13": [
    {
      titulo: "Ayuda que aparece con hover y con foco, y se puede cerrar",
      explicacion:
        "El contenido se puede cerrar con Esc sin mover el foco, se puede recorrer con el ratón sin que desaparezca y sigue visible hasta que la persona se va.",
      lang: "html",
      bien: `
<label for="iban">IBAN</label>
<input id="iban" class="con-ayuda" aria-describedby="ayuda-iban">
<p role="tooltip" id="ayuda-iban" class="ayuda">24 caracteres. Empieza por ES.</p>

<style>
  .ayuda { display: none; }
  .con-ayuda:hover + .ayuda,
  .con-ayuda:focus + .ayuda,
  .ayuda:hover { display: block; }
  .ayuda[hidden] { display: none !important; }
</style>

<script>
  const campo = document.getElementById("iban");
  const ayuda = document.getElementById("ayuda-iban");
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") ayuda.hidden = true;
  });
  campo.addEventListener("focus", () => (ayuda.hidden = false));
  campo.addEventListener("pointerenter", () => (ayuda.hidden = false));
</script>`,
      mal: `
<style>
  .ayuda { display: none; pointer-events: none; }
  /* Solo con ratón, desaparece al intentar leerla y no se puede cerrar */
  .con-ayuda:hover + .ayuda { display: block; }
</style>`,
    },
  ],
  "2.1.1": [
    {
      titulo: "Elementos interactivos nativos",
      explicacion: "Un button se enfoca con Tab y se activa con Enter y Espacio sin escribir nada de JavaScript para el teclado.",
      lang: "html",
      bien: `
<button type="button" class="favorito">Añadir a favoritos</button>
<a href="/productos">Productos</a>`,
      mal: `
<div class="favorito" onclick="anadirFavorito()">Añadir a favoritos</div>
<span onmouseover="abrirMenu()">Productos</span>`,
    },
  ],
  "2.1.2": [
    {
      titulo: "Ventana modal que se puede cerrar con el teclado",
      explicacion: "El dialog nativo abierto con showModal() mantiene el foco dentro, se cierra con Esc y devuelve el foco al botón que lo abrió.",
      lang: "html",
      bien: `
<button type="button" id="abrir-boletin">Suscribirme al boletín</button>

<dialog id="boletin" aria-labelledby="boletin-titulo">
  <h2 id="boletin-titulo">Suscríbete</h2>
  <!-- … formulario … -->
  <form method="dialog">
    <button>Cerrar</button>
  </form>
</dialog>

<script>
  document.getElementById("abrir-boletin").addEventListener("click", () => {
    document.getElementById("boletin").showModal();
  });
</script>`,
      mal: `
<script>
  // El foco entra en el mapa y ya no puede salir
  mapa.addEventListener("keydown", (e) => {
    if (e.key === "Tab") e.preventDefault();
  });
</script>`,
    },
  ],
  "2.1.4": [
    {
      titulo: "Atajos con tecla modificadora",
      explicacion: "Un atajo de una sola letra se dispara sin querer al dictar por voz. Usa una tecla modificadora o permite desactivarlo.",
      lang: "js",
      bien: `
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    abrirBuscador();
  }
});`,
      mal: `
document.addEventListener("keydown", (e) => {
  if (e.key === "s") abrirBuscador();  // salta al escribir o dictar la letra «s»
});`,
    },
  ],
  "2.2.1": [
    {
      titulo: "Aviso antes de que caduque la sesión",
      explicacion: "Avisa con al menos 20 segundos de margen y permite ampliar el tiempo con una acción sencilla (al menos 10 veces).",
      lang: "html",
      bien: `
<dialog id="aviso-sesion" aria-labelledby="aviso-titulo">
  <h2 id="aviso-titulo">Tu sesión caduca en 2 minutos</h2>
  <p>¿Necesitas más tiempo?</p>
  <form method="dialog">
    <button value="ampliar">Ampliar 20 minutos</button>
    <button value="salir">Cerrar sesión</button>
  </form>
</dialog>

<script>
  const aviso = document.getElementById("aviso-sesion");
  setTimeout(() => aviso.showModal(), 18 * 60 * 1000);  // 2 minutos antes del límite
  aviso.addEventListener("close", () => {
    if (aviso.returnValue === "ampliar") ampliarSesion();
  });
</script>`,
      mal: `
<script>
  // Expulsa sin avisar a los 5 minutos
  setTimeout(() => (location.href = "/salir"), 5 * 60 * 1000);
</script>`,
    },
  ],
  "2.2.2": [
    {
      titulo: "Carrusel automático con botón de pausa",
      explicacion:
        "Todo lo que se mueve solo durante más de 5 segundos necesita un control para pausarlo. Además, si la persona ha pedido menos movimiento, no arranques la animación.",
      lang: "html",
      bien: `
<section class="carrusel" aria-label="Ofertas destacadas">
  <button type="button" class="carrusel-pausa">Pausar</button>
  <!-- … diapositivas … -->
</section>

<script>
  const boton = document.querySelector(".carrusel-pausa");
  const menosMovimiento = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let timer = menosMovimiento ? null : setInterval(siguiente, 6000);
  boton.textContent = timer ? "Pausar" : "Reproducir";

  boton.addEventListener("click", () => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    } else {
      timer = setInterval(siguiente, 6000);
    }
    boton.textContent = timer ? "Pausar" : "Reproducir";
  });
</script>`,
      mal: `
<script>
  // Gira para siempre y no hay forma de pararlo
  setInterval(siguiente, 3000);
</script>`,
    },
  ],
  "2.3.1": [
    {
      titulo: "Llamar la atención sin destellos",
      explicacion: "Más de tres destellos por segundo pueden provocar crisis epilépticas. Usa una transición suave y única.",
      lang: "css",
      bien: `
@keyframes aparece { from { opacity: 0; } to { opacity: 1; } }
.alerta { animation: aparece .3s ease-out; border-left: .5rem solid #a3261c; }

@media (prefers-reduced-motion: reduce) {
  .alerta { animation: none; }
}`,
      mal: `
@keyframes parpadeo { 50% { background: #fff; } }
.alerta { animation: parpadeo .1s infinite; }  /* 10 destellos por segundo */`,
    },
  ],
  "2.4.1": [
    {
      titulo: "Enlace para saltar al contenido y regiones",
      explicacion: "El enlace es lo primero que se enfoca con Tab. Puede estar oculto hasta recibir el foco, pero nunca con display: none.",
      lang: "html",
      bien: `
<body>
  <a class="saltar" href="#contenido">Saltar al contenido</a>
  <header>…</header>
  <nav aria-label="Principal">…</nav>
  <main id="contenido">…</main>
</body>

<style>
  .saltar { position: absolute; top: -10rem; left: 1rem; }
  .saltar:focus { top: 1rem; }
</style>`,
      mal: `
<style>
  .saltar { display: none; }  /* tampoco se puede alcanzar con el teclado */
</style>`,
    },
  ],
  "2.4.2": [
    {
      titulo: "Título único que describe la página",
      explicacion: "Pon primero lo específico y después el nombre del sitio. En aplicaciones de una sola página, actualízalo al cambiar de vista.",
      lang: "html",
      bien: `
<title>Carrito (3 productos) · Tienda Ejemplo</title>

<script>
  // Al pasar al siguiente paso sin recargar la página
  document.title = "Paso 2 de 3: envío · Tienda Ejemplo";
</script>`,
      mal: `
<title>Inicio</title>  <!-- igual en todas las páginas -->`,
    },
  ],
  "2.4.3": [
    {
      titulo: "El orden del foco sigue el orden visual",
      explicacion: "Si el HTML está en el orden lógico, no hace falta tabindex. Evita los valores positivos: rompen el orden natural.",
      lang: "html",
      bien: `
<form>
  <label for="usuario">Usuario</label>
  <input id="usuario" autocomplete="username">
  <label for="clave">Contraseña</label>
  <input id="clave" type="password" autocomplete="current-password">
  <button>Entrar</button>
</form>`,
      mal: `
<input id="usuario" tabindex="2">
<input id="clave" type="password" tabindex="1">
<button tabindex="3">Entrar</button>`,
    },
  ],
  "2.4.4": [
    {
      titulo: "Enlaces que dicen adónde llevan",
      explicacion:
        "Si el diseño obliga a un «Leer más», complétalo con texto oculto visualmente (la clase sr-only lo oculta en pantalla pero lo mantiene para lectores de pantalla).",
      lang: "html",
      bien: `
<a href="/informe-2026.pdf">Descargar el informe anual 2026 (PDF, 2 MB)</a>

<a href="/noticias/plazos">Leer más<span class="sr-only"> sobre los nuevos plazos</span></a>`,
      mal: `
<a href="/informe-2026.pdf">Haz clic aquí</a>
<a href="/noticias/plazos">Leer más</a>`,
    },
  ],
  "2.4.5": [
    {
      titulo: "Menú, buscador y mapa del sitio",
      explicacion: "El elemento search marca la zona de búsqueda como región, igual que nav marca la navegación.",
      lang: "html",
      bien: `
<nav aria-label="Principal">…</nav>

<search>
  <form action="/buscar">
    <label for="q">Buscar en la web</label>
    <input id="q" name="q" type="search">
    <button>Buscar</button>
  </form>
</search>

<footer>
  <a href="/mapa-del-sitio">Mapa del sitio</a>
</footer>`,
    },
  ],
  "2.4.6": [
    {
      titulo: "Encabezados y etiquetas descriptivos",
      lang: "html",
      bien: `
<h2>Dirección de envío</h2>
<label for="calle">Calle y número</label>
<input id="calle" autocomplete="address-line1">`,
      mal: `
<h2>Sección 2</h2>
<label for="calle">Campo 1</label>
<input id="calle">`,
    },
  ],
  "2.4.7": [
    {
      titulo: "Indicador de foco visible",
      explicacion: ":focus-visible muestra el anillo al usar el teclado y no al hacer clic con el ratón.",
      lang: "css",
      bien: `
:focus-visible {
  outline: 3px solid #1747a6;
  outline-offset: 2px;
}`,
      mal: `
*:focus { outline: none; }  /* y ningún estilo que lo sustituya */`,
    },
  ],
  "2.4.11": [
    {
      titulo: "Que la cabecera fija no tape el foco",
      explicacion:
        "scroll-padding reserva el espacio de la cabecera o del banner cuando el navegador desplaza la página hasta el elemento enfocado.",
      lang: "css",
      bien: `
.cabecera { position: sticky; top: 0; }
html {
  scroll-padding-top: 5rem;     /* alto de la cabecera */
  scroll-padding-bottom: 6rem;  /* alto del banner de cookies */
}`,
      mal: `
/* Ocupa media pantalla y tapa lo que se enfoca debajo */
.cookies { position: fixed; bottom: 0; height: 50vh; }`,
    },
  ],
  "2.5.1": [
    {
      titulo: "Botones además del gesto",
      explicacion: "Deslizar, pellizcar o trazar recorridos está bien como atajo, pero tiene que existir una alternativa con un solo toque.",
      lang: "html",
      bien: `
<div class="galeria"><!-- se puede deslizar --></div>
<button type="button">Foto anterior</button>
<button type="button">Foto siguiente</button>

<div class="mapa"><!-- se puede pellizcar --></div>
<button type="button">Acercar</button>
<button type="button">Alejar</button>`,
      mal: `
<script>
  // Solo se cambia de foto deslizando el dedo
  galeria.addEventListener("touchmove", detectarDeslizamiento);
</script>`,
    },
  ],
  "2.5.2": [
    {
      titulo: "Acciones al soltar, no al pulsar",
      explicacion: "El evento click se dispara al soltar. Si alguien pulsa por error, puede apartar el dedo y no pasa nada.",
      lang: "js",
      bien: `
botonBorrar.addEventListener("click", borrarCuenta);`,
      mal: `
botonBorrar.addEventListener("mousedown", borrarCuenta);
botonBorrar.addEventListener("touchstart", borrarCuenta);`,
    },
  ],
  "2.5.3": [
    {
      titulo: "El nombre accesible contiene el texto visible",
      explicacion: "Quien usa control por voz dice lo que ve («pulsar Enviar»). Si el nombre accesible es otro, la orden no funciona.",
      lang: "html",
      bien: `
<button type="submit">Enviar solicitud</button>

<!-- Si añades contexto, empieza por el texto visible -->
<button type="submit" aria-label="Buscar productos">Buscar</button>`,
      mal: `
<button type="submit" aria-label="Mandar formulario">Enviar</button>`,
    },
  ],
  "2.5.4": [
    {
      titulo: "Agitar para deshacer, pero opcional",
      explicacion: "Toda función activada por movimiento necesita un botón equivalente y una forma de desactivarla.",
      lang: "html",
      bien: `
<button type="button" id="deshacer">Deshacer</button>
<label><input type="checkbox" id="agitar" checked> Deshacer al agitar el móvil</label>

<script>
  const agitar = document.getElementById("agitar");
  document.getElementById("deshacer").addEventListener("click", deshacer);
  window.addEventListener("devicemotion", (e) => {
    if (agitar.checked && esAgitado(e)) deshacer();
  });
</script>`,
      mal: `
<script>
  // La única forma de deshacer es agitar el móvil
  window.addEventListener("devicemotion", (e) => {
    if (esAgitado(e)) deshacer();
  });
</script>`,
    },
  ],
  "2.5.7": [
    {
      titulo: "Reordenar sin arrastrar",
      explicacion: "Si algo se puede arrastrar, ofrece también botones. El input range nativo ya permite tocar en la barra o usar flechas.",
      lang: "html",
      bien: `
<ol class="tareas">
  <li>
    Revisar el contraste
    <button type="button">Subir<span class="sr-only"> «Revisar el contraste»</span></button>
    <button type="button">Bajar<span class="sr-only"> «Revisar el contraste»</span></button>
  </li>
</ol>

<label for="precio">Precio máximo</label>
<input id="precio" type="range" min="0" max="500" step="10">`,
      mal: `
<!-- La única forma de ordenar es arrastrar con el ratón -->
<li draggable="true">Revisar el contraste</li>`,
    },
  ],
  "2.5.8": [
    {
      titulo: "Objetivos de al menos 24 × 24 px",
      explicacion: "24 px es el mínimo de la norma; 44 px es lo recomendable en los controles principales.",
      lang: "css",
      bien: `
.boton-icono { min-width: 24px; min-height: 24px; }  /* mínimo AA */
.boton { min-width: 44px; min-height: 44px; }        /* recomendable */
.paginacion a { display: inline-block; min-width: 24px; padding: .25rem .5rem; }`,
      mal: `
.cerrar { width: 14px; height: 14px; }
.paginacion a { padding: 0 1px; }  /* números pegados entre sí */`,
    },
  ],
  "3.1.1": [
    {
      titulo: "Idioma en la etiqueta html",
      explicacion: "El lector de pantalla elige la voz según este atributo. Sin él, puede leer el castellano con pronunciación inglesa.",
      lang: "html",
      bien: `
<html lang="es">`,
      mal: `
<html>
<html lang="en">  <!-- en una web en castellano -->`,
    },
  ],
  "3.1.2": [
    {
      titulo: "Fragmentos en otro idioma",
      lang: "html",
      bien: `
<p>El lema de la campaña es <span lang="en">«Nothing about us without us»</span>.</p>
<a href="/ca/" lang="ca" hreflang="ca">Català</a>`,
      mal: `
<p>El lema de la campaña es «Nothing about us without us».</p>
<a href="/ca/">Català</a>`,
    },
  ],
  "3.2.1": [
    {
      titulo: "Recibir el foco no cambia de contexto",
      lang: "js",
      bien: `
// La ventana se abre cuando la persona lo pide
botonBoletin.addEventListener("click", abrirVentanaBoletin);`,
      mal: `
// Al entrar con Tab en el campo, se abre una ventana inesperada
campoEmail.addEventListener("focus", abrirVentanaBoletin);`,
    },
  ],
  "3.2.2": [
    {
      titulo: "Elegir una opción no navega sola",
      explicacion: "Con el teclado se recorre un select con las flechas: si cada cambio navega, es imposible llegar a la opción deseada.",
      lang: "html",
      bien: `
<form action="/idioma">
  <label for="idioma">Idioma</label>
  <select id="idioma" name="idioma">
    <option value="es">Español</option>
    <option value="ca" lang="ca">Català</option>
  </select>
  <button>Cambiar idioma</button>
</form>`,
      mal: `
<select onchange="location.href = this.value">
  <option value="/es/">Español</option>
  <option value="/ca/">Català</option>
</select>`,
    },
  ],
  "3.2.3": [
    {
      titulo: "Un único componente de navegación",
      explicacion: "Si todas las páginas usan el mismo layout, el menú aparece siempre en el mismo sitio y en el mismo orden.",
      lang: "astro",
      bien: `
---
// src/layouts/Layout.astro
import Cabecera from "../components/Cabecera.astro";
import Pie from "../components/Pie.astro";
---
<Cabecera />
<main id="contenido"><slot /></main>
<Pie />`,
      mal: `
<!-- inicio.html -->
<nav><a href="/">Inicio</a> <a href="/tienda">Tienda</a> <a href="/contacto">Contacto</a></nav>
<!-- tienda.html -->
<nav><a href="/contacto">Contacto</a> <a href="/">Inicio</a> <a href="/tienda">Tienda</a></nav>`,
    },
  ],
  "3.2.4": [
    {
      titulo: "Mismo nombre para la misma función",
      explicacion: "Un componente reutilizable garantiza que el botón se llama igual en toda la web.",
      lang: "astro",
      bien: `
---
// src/components/BotonBuscar.astro
---
<button type="submit">
  <svg aria-hidden="true" focusable="false">…</svg>
  Buscar
</button>`,
      mal: `
<!-- En una página -->
<button aria-label="Buscar">…</button>
<!-- En otra, la misma función -->
<button aria-label="Lupa">…</button>`,
    },
  ],
  "3.2.6": [
    {
      titulo: "Ayuda siempre en el mismo sitio",
      explicacion: "Si ofreces contacto o ayuda en varias páginas, que aparezca en el mismo orden relativo. Un pie común lo resuelve.",
      lang: "astro",
      bien: `
---
// src/components/Pie.astro: se usa en todas las páginas
---
<footer>
  <a href="/ayuda">Ayuda y preguntas frecuentes</a>
  <a href="/contacto">Contacto</a>
  <a href="tel:+34900000000">900 000 000</a>
</footer>`,
    },
  ],
  "3.3.1": [
    {
      titulo: "Error escrito y asociado al campo",
      explicacion: "aria-invalid indica que el campo tiene un error y aria-describedby hace que el lector lea el mensaje al llegar al campo.",
      lang: "html",
      bien: `
<label for="email">Correo electrónico</label>
<input id="email" type="email" aria-invalid="true" aria-describedby="email-error">
<p id="email-error">Error: falta la @. Ejemplo: nombre@dominio.es</p>`,
      mal: `
<input id="email" type="email" class="borde-rojo">`,
    },
  ],
  "3.3.2": [
    {
      titulo: "Etiqueta visible e instrucciones de formato",
      explicacion: "El placeholder no sustituye a la etiqueta: desaparece al escribir y suele tener poco contraste.",
      lang: "html",
      bien: `
<label for="nacimiento">Fecha de nacimiento (obligatorio)</label>
<p id="nacimiento-formato">Formato: dd/mm/aaaa. Por ejemplo, 23/04/1990.</p>
<input id="nacimiento" required aria-describedby="nacimiento-formato" autocomplete="bday">`,
      mal: `
<input placeholder="Fecha">`,
    },
  ],
  "3.3.3": [
    {
      titulo: "Mensajes que dicen cómo corregir",
      lang: "html",
      bien: `
<label for="cp">Código postal</label>
<input id="cp" inputmode="numeric" aria-invalid="true" aria-describedby="cp-error" value="2800">
<p id="cp-error">El código postal tiene 5 números y has escrito 4. Por ejemplo: 28013.</p>`,
      mal: `
<p id="cp-error">Dato no válido.</p>`,
    },
  ],
  "3.3.4": [
    {
      titulo: "Paso de revisión antes de pagar",
      explicacion: "En compras, contratos o datos importantes: permite revisar, corregir o deshacer antes de enviar.",
      lang: "html",
      bien: `
<h2>Revisa tu pedido antes de pagar</h2>
<dl>
  <dt>Envío a</dt><dd>Calle Mayor 1, 28013 Madrid</dd>
  <dt>Total</dt><dd>89,90 €</dd>
</dl>
<a href="/pedido/envio">Modificar los datos</a>

<form method="post" action="/pagar">
  <button>Pagar 89,90 €</button>
</form>`,
      mal: `
<!-- El pago se cobra al pulsar «Continuar» en el primer paso -->
<button formaction="/pagar">Continuar</button>`,
    },
  ],
  "3.3.7": [
    {
      titulo: "No volver a pedir lo que ya se dio",
      lang: "html",
      bien: `
<fieldset>
  <legend>Dirección de facturación</legend>
  <label>
    <input type="checkbox" name="misma-direccion" checked>
    Usar la misma dirección que para el envío
  </label>
</fieldset>`,
      mal: `
<!-- Repite los cinco campos de dirección vacíos -->
<fieldset>
  <legend>Dirección de facturación</legend>
  <label for="f-calle">Calle</label> <input id="f-calle">
  …
</fieldset>`,
    },
  ],
  "3.3.8": [
    {
      titulo: "Acceso compatible con gestores de contraseñas",
      explicacion:
        "No obligues a memorizar ni transcribir: permite pegar, usa autocomplete y ofrece alternativas como un enlace por correo o una llave de acceso.",
      lang: "html",
      bien: `
<label for="usuario">Correo electrónico</label>
<input id="usuario" type="email" autocomplete="username">

<label for="clave">Contraseña</label>
<input id="clave" type="password" autocomplete="current-password">

<label for="codigo">Código recibido por SMS</label>
<input id="codigo" inputmode="numeric" autocomplete="one-time-code">

<a href="/acceso-con-enlace">Entrar con un enlace por correo</a>`,
      mal: `
<input id="clave" type="password" autocomplete="off" onpaste="return false">
<!-- y un captcha de letras deformadas sin alternativa -->`,
    },
  ],
  "4.1.1": [
    {
      titulo: "Sigue siendo buena práctica: identificadores únicos",
      explicacion:
        "WCAG 2.2 retiró este criterio, pero un id repetido sigue rompiendo relaciones como label o aria-describedby. Eso ahora se evalúa con 1.3.1 y 4.1.2.",
      lang: "html",
      bien: `
<label for="email-envio">Email de envío</label>
<input id="email-envio" type="email">
<label for="email-factura">Email de facturación</label>
<input id="email-factura" type="email">`,
      mal: `
<label for="email">Email de envío</label>
<input id="email" type="email">
<label for="email">Email de facturación</label>
<input id="email" type="email">`,
    },
  ],
  "4.1.2": [
    {
      titulo: "Estado expuesto a la tecnología de apoyo",
      explicacion:
        "El botón tiene rol, nombre y estado (aria-expanded). La opción más sencilla sigue siendo el elemento details, que lo hace todo solo.",
      lang: "html",
      bien: `
<button type="button" aria-expanded="false" aria-controls="faq-envio">
  ¿Cuánto tarda el envío?
</button>
<div id="faq-envio" hidden>Entre 24 y 48 horas.</div>

<script>
  const boton = document.querySelector("[aria-controls='faq-envio']");
  const panel = document.getElementById("faq-envio");
  boton.addEventListener("click", () => {
    const abierto = boton.getAttribute("aria-expanded") === "true";
    boton.setAttribute("aria-expanded", String(!abierto));
    panel.hidden = abierto;
  });
</script>`,
      mal: `
<div class="pregunta" onclick="this.nextElementSibling.classList.toggle('abierto')">
  ¿Cuánto tarda el envío?
</div>
<div class="respuesta">Entre 24 y 48 horas.</div>`,
    },
  ],
  "4.1.3": [
    {
      titulo: "Aviso anunciado sin mover el foco",
      explicacion: "La región con role=\"status\" tiene que existir en la página antes de escribir el mensaje; si se crea a la vez, muchos lectores no lo anuncian.",
      lang: "html",
      bien: `
<button type="button" id="anadir">Añadir al carrito</button>
<p role="status" id="aviso-carrito"></p>

<script>
  document.getElementById("anadir").addEventListener("click", () => {
    document.getElementById("aviso-carrito").textContent =
      "Producto añadido. Tienes 3 productos en el carrito.";
  });
</script>`,
      mal: `
<script>
  // Se ve en pantalla, pero el lector de pantalla no dice nada
  const aviso = document.createElement("div");
  aviso.textContent = "Producto añadido";
  document.body.append(aviso);
</script>`,
    },
  ],
};
