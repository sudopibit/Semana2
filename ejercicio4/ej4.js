
let mostrarTexto = false;

function toggleText() {
 
  const contenidoExtra = document.querySelector(".additional");
  const enlaceAccion = document.querySelector("a");

  if (mostrarTexto) {
    contenidoExtra.classList.replace("visible", "hidden");
    enlaceAccion.textContent = "Leer más";
  } else {
    contenidoExtra.classList.replace("hidden", "visible");
    enlaceAccion.textContent = "Ocultar texto";
  }

  mostrarTexto = !mostrarTexto;
}
