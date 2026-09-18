const datosCulturales = [
    "El Xoloitzcuintle es una raza de perro originaria de México con más de 3,000 años de antigüedad.",
    "México cuenta con 35 sitios declarados Patrimonio de la Humanidad por la UNESCO.",
    "La flor de Nochebuena es originaria de México y los aztecas la llamaban Cuetlaxochitl.",
    "La pirámide más grande del mundo por volumen está en Cholula, Puebla.",
    "El Día de Muertos es Patrimonio Cultural Inmaterial de la Humanidad desde 2008."
];

const botonDato = document.getElementById('btn-dato');
const textoDato = document.getElementById('texto-dato');

botonDato.addEventListener('click', () => {
    // Genera un número aleatorio entre 0 y la cantidad de datos disponibles
    const indiceAleatorio = Math.floor(Math.random() * datosCulturales.length);
    // Muestra el texto en el HTML
    textoDato.textContent = datosCulturales[indiceAleatorio];
});