// menu show
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
}
showMenu('nav-toggle', 'menu-nav');

// Remove menu mobile
const navLink = document.querySelectorAll('.link__nav');

function linkAction() {
    const navMenu = document.getElementById('menu-nav');
    // When we click on each link__nav, we remove the show class
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Scroll section active link
const section = document.querySelectorAll('section[Id]')

window.addEventListener('scroll', scrollActive);

function scrollActive() {
    const scrollY = window.pageYOffset;

    section.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('Id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.menu__nav a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.menu__nav a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
}

// scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

// scroll home
sr.reveal('.title__home', {});
sr.reveal('.scroll__home', { delay: 200 });
sr.reveal('.img__home', { origin: 'right', delay: 400 });

// scroll about
sr.reveal('.about__img', { delay: 500 });
sr.reveal('.about__subtitle', { delay: 300});
sr.reveal('.about__profession', { delay: 400});
sr.reveal('.about__text', { delay: 500});
sr.reveal('.about__social-icon', { delay: 600, interval: 200});

// scroll skills
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__name', { distance: '20px', delay: 50, interval: 100});
sr.reveal('.skills__img', { delay: 400})

// scroll Porto
sr.reveal('.portofolio__img', { interval: 200});

// scroll contact
sr.reveal('.contact__subtitle', {}) ;
sr.reveal('.contact__text', {interval: 200});
sr.reveal('.contact__input', { delay: 400});
sr.reveal('.contact__button', { delay: 600})