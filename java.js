document.addEventListener('DOMContentLoaded', function() {
    const contenedor = document.querySelector('.carousel');
    const imagenes = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');
    let index = 0;

    function actualizarCarrusel() {
        const anchoImagen = imagenes[0].clientWidth;
        contenedor.style.transform = `translateX(-${index * anchoImagen}px)`;
        indicators.forEach((indicator, i) => {
            if (i === index) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    function avanzarCarrusel() {
        index = (index + 1) % imagenes.length;
        actualizarCarrusel();
    }

    setInterval(avanzarCarrusel, 2500); // Change slide every 2.5 seconds

    actualizarCarrusel(); // Initialize carousel position and indicators

    
});

let currentSlide = 1;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    slides[currentSlide - 1].classList.remove('active');
    currentSlide += direction;

    if (currentSlide < 1) {
        currentSlide = totalSlides;
    } else if (currentSlide > totalSlides) {
        currentSlide = 1;
    }

    const offset = (currentSlide - 1) * -100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
    changeSlide(0); // Initialize the first slide
});

document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to the clicked tab
            this.classList.add('active');

            // Hide all tab contents
            contents.forEach(content => content.classList.remove('active'));
            // Show the content corresponding to the clicked tab
            const tabContent = document.getElementById(this.dataset.tab);
            tabContent.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('phase1').classList.add('active');
});

function startVoting() {
    document.querySelector('.phase.active').classList.remove('active');
    document.getElementById('phase2').classList.add('active');
}

function selectRating(rating) {
    // Guardar el rating seleccionado
    console.log('Rating seleccionado:', rating);
    
    document.querySelector('.phase.active').classList.remove('active');
    document.getElementById('phase3').classList.add('active');
}

function submitComment() {
    const comment = document.getElementById('comment').value;
    // Guardar el comentario
    console.log('Comentario enviado:', comment);
    
    document.querySelector('.phase.active').classList.remove('active');
    document.getElementById('phase4').classList.add('active');
}