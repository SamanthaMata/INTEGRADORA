// Función de JavaScript: al seleccionar una imagen, se muestra en tamaño grande

document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".galeria-item");
  const modal = document.getElementById("modal");
  const modalImagen = document.getElementById("modal-imagen");
  const modalTitulo = document.getElementById("modal-titulo");
  const botonCerrar = document.getElementById("modal-cerrar");

  // Abrir el modal al hacer clic en cualquier imagen de la galería
  items.forEach(function (item) {
    item.addEventListener("click", function () {
      const img = item.querySelector("img");
      const titulo = item.querySelector("figcaption").textContent;

      modalImagen.src = img.src;
      modalImagen.alt = img.alt;
      modalTitulo.textContent = titulo;
      modal.classList.add("activo");
    });

    // Permitir abrir la imagen también con la tecla Enter (accesibilidad)
    item.setAttribute("tabindex", "0");
    item.addEventListener("keydown", function (evento) {
      if (evento.key === "Enter") {
        item.click();
      }
    });
  });

  // Cerrar el modal con el botón "X"
  botonCerrar.addEventListener("click", cerrarModal);

  // Cerrar el modal al hacer clic fuera de la imagen
  modal.addEventListener("click", function (evento) {
    if (evento.target === modal) {
      cerrarModal();
    }
  });

  // Cerrar el modal con la tecla Escape
  document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape" && modal.classList.contains("activo")) {
      cerrarModal();
    }
  });

  function cerrarModal() {
    modal.classList.remove("activo");
    modalImagen.src = "";
  }
});
