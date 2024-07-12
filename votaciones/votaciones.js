document.addEventListener('DOMContentLoaded', function () {
    // Obtener todas las tarjetas
    const tarjetas = document.querySelectorAll('.tarjetaA, .tarjetaB, .tarjetaC, .tarjetaD, .tarjetaE, .tarjetaF');

    // Función para mostrar el paso deseado
    function showPaso(pasoToShow, currentPaso) {
        currentPaso.classList.remove('active');
        pasoToShow.classList.add('active');
    }

    // Iterar sobre todas las tarjetas
    tarjetas.forEach(function (tarjeta) {
        const pasos = tarjeta.querySelectorAll('.paso');
        const botonesVotar = tarjeta.querySelectorAll('.CTA-M.BT');
        const botonAnular = tarjeta.querySelector('.CTA-M.Anular');

        // Manejar el click en cada botón de votar
        botonesVotar.forEach(function (boton, index) {
            boton.addEventListener('click', function (e) {
                e.preventDefault();
                showPaso(pasos[index + 1], pasos[index]);
            });
        });

        // Manejar el click en el botón de anular
        botonAnular.addEventListener('click', function (e) {
            e.preventDefault();
            showPaso(pasos[0], pasos[2]);
        });
    });
});
