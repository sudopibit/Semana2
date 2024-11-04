const enlaces = document.querySelectorAll("a");
enlaces.forEach((boton) => {
  boton.addEventListener("click", function (evento) {
    evento.preventDefault();
    
    const contenido = boton.closest("div").querySelector("p");
    const estaVisible = contenido.style.display !== "none";
    
    contenido.style.display = estaVisible ? "none" : "block";
    boton.textContent = estaVisible ? "Mostrar contenidos" : "Ocultar contenidos";
  });
});
