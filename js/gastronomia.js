const buscador = document.getElementById("buscador");
const platillos = document.querySelectorAll(".platillo");

const mensaje = document.createElement("p");
mensaje.textContent = "No se encontraron platillos.";
mensaje.classList.add("sin-resultados");
mensaje.style.display = "none";

document.getElementById("contenedorPlatillos").appendChild(mensaje);

buscador.addEventListener("input", function () {

    const texto = buscador.value.toLowerCase().trim();
    let encontrados = 0;

    platillos.forEach(function (platillo) {

        const nombre = platillo.querySelector("h3").textContent.toLowerCase();

        if (nombre.includes(texto)) {
            platillo.style.display = "block";
            encontrados++;
        } else {
            platillo.style.display = "none";
        }

    });

    if (encontrados === 0) {
        mensaje.style.display = "block";
    } else {
        mensaje.style.display = "none";
    }

});