// Typing animation

function typeWriter(string) {
    const caracters = string.innerHTML.split('');
    string.innerHTML = '';

    caracters.forEach((element, i) => {
        setTimeout(() => string.innerHTML += element, 80 * i);
    });
}

typeWriter(document.getElementById('slogan'));

// Home video

function setVideoSource() {
    const videoElement = document.getElementById('home__bg-video');
    const videoSource = document.getElementById('video-source');

    const width = window.innerWidth;

    if (width < 750) {
        videoSource.src = './assets/video/video-home-mobile.mp4';
    } else {
        videoSource.src = './assets/video/video-home.mp4'
    };

    videoElement.load();
};

window.onload = setVideoSource;
window.onresize = setVideoSource;

// Accordion animation

const accordions = document.querySelectorAll('.accordion__item');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('.answer__container');

        body.classList.toggle('open__answer');
    })
});

// Dark/light mode

const background = document.querySelector('.bg');
const icons = document.querySelectorAll('.mode__icon');
const texts = document.querySelectorAll('.footer__text');

function mode() {
    background.classList.toggle('dark');
    
    icons.forEach(icon => {
        if (icon.classList.contains('bi-sun')) {
                icon.classList.remove('bi-sun');
                icon.classList.add('bi-moon');
             } else {
                icon.classList.remove('bi-moon');
                icon.classList.add('bi-sun');
             }   

    });

    if (background.classList.contains('dark')) {
        texts.forEach(text => {
            text.style.color = 'var(--white)';
        });
    } else {
        texts.forEach(text => {
            text.style.color = 'var(--big-stone)';
        });
    }
};

// Mobile menu button

const mobileMenu = document.querySelector('.mobile__menu');
const mobileIcon = document.querySelector('.mobile__icon');

function showMenu() {
    if (mobileMenu.classList.contains('open__menu')) {
        mobileMenu.classList.remove('open__menu');
    } else {
        mobileMenu.classList.add('open__menu');
    }
};
