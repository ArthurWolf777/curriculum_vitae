const indexP = document.getElementById('p-0');
const indexP1 = document.getElementById('p-1');
const indexP2 = document.getElementById('p-2');
const indexP3 = document.getElementById('p-3');
const indexP4 = document.getElementById('p-4');
const indexP5 = document.getElementById('p-5');
const indexP6 = document.getElementById('p-6');

const ListAnimation = [indexP, indexP1, indexP2, indexP3, indexP4, indexP5, indexP6];

// Agregar la clase 'active' al primer elemento de la lista al inicio
ListAnimation[0].classList.add('active');

const animationInterval = setInterval(() => {
    let currentIndex = ListAnimation.findIndex((el) => el.classList.contains('active'));
    ListAnimation[currentIndex].classList.remove('active');
    ListAnimation[currentIndex].classList.add('inactive');

    ListAnimation[(currentIndex + 1) % ListAnimation.length].classList.remove('inactive');
    ListAnimation[(currentIndex + 1) % ListAnimation.length].classList.add('active');
}, 2000);
