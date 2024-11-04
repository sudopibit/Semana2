document.getElementById("btnAgregar").addEventListener("click", function () {
    const lista = document.getElementById("lista");
    const nuevoElemento = document.createElement("li");
    const numeroElemento = lista.children.length + 1;
    nuevoElemento.textContent = `Elemento ${numeroElemento}`;
    nuevoElemento.classList.add("list-group-item");
    lista.appendChild(nuevoElemento);
  });
  