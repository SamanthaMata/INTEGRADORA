const buscador = document.getElementById("buscador");
const platillos = document.querySelectorAll(".platillo");

buscador.addEventListener("input", function () {

    const texto = buscador.value.toLowerCase();

    platillos.forEach(function (platillo) {

        const nombre = platillo.querySelector("h3").textContent.toLowerCase();

        if (nombre.includes(texto)) {
            platillo.style.display = "block";
        } else {
            platillo.style.display = "none";
        }

    });

});