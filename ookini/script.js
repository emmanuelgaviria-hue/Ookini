function calcularPrecio(precioUnitario, cantidad) {
    const total = precioUnitario * cantidad;
    return total;
}

function puedesReservar(tazasDisponibles) {
    return tazasDisponibles > 0;
}
const botonReservar = document.querySelector("#boton-reservar");
const contadorTazas = document.querySelector("#contador-tazas");

botonReservar.addEventListener("click", function() {
    const tazasActuales = Number(contadorTazas.textContent);

    if(puedesReservar(tazasActuales)) {
        contadorTazas.textContent = tazasActuales - 1;
        botonReservar.textContent = "Reserva confirmada";
    } else {
        botonReservar.textContent = "No hay cupos disponibles";
        botonReservar.disabled = true;
    }
})

