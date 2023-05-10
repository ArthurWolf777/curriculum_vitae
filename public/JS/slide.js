// obtener el ancho y alto de la ventana del navegador
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;


// comprobación condicional basada en el tamaño de la ventana
if (windowWidth < 769) {
    // hacer algo si la ventana es menor que 768px
    const slideComponent = document.getElementById('slide');
    const coverComponent = document.getElementById('cover');

    document.addEventListener("DOMContentLoaded", function() {

        const tiempoInicial = 4;
        const tiempoFinal = 0;

        let tiempoActual = tiempoInicial;
        const intervalo = setInterval(function() {
            tiempoActual--;

            if(tiempoActual < tiempoFinal){
                clearInterval(intervalo);
                console.log('Muestra el menú');
                slideComponent.classList.remove('deactivate');
                slideComponent.classList.add('touch-widget-container');
            }

        }, 1000);
    });

    var counterSection = 0;
    let initialX;
    // Mover secciones a la Izquierda del DOM en responsive

    function changeComponent(){
        const aboutMe = document.getElementById('about-me');
        const WorkExperience = document.getElementById('work-experience');
        const education = document.getElementById('education');

        if(counterSection == 0){
            
            console.log('WorkExperience');
            counterSection = 1;
            aboutMe.classList.add('section-inactive');
            WorkExperience.classList.remove('section-inactive');

        } else if(counterSection == 1){

            console.log('education');
            counterSection = 2;
            WorkExperience.classList.add('section-inactive');
            education.classList.remove('section-inactive');

        } else if(counterSection == 2){

            console.log('Technical Skills')
            
        }
    };

    coverComponent.addEventListener('touchend', (e) => {

        initialX = e.changedTouches[0].clientX;
        console.log(initialX);
        
        slideComponent.classList.remove('touch-widget-container');
        slideComponent.classList.add('deactivate');

        console.log(counterSection);
        changeComponent();
    });


} else {
  // hacer algo si la ventana es mayor o igual a 768px
}

