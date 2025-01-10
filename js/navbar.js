document.addEventListener("DOMContentLoaded", function() {
    fetch('../navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;

            // Inicializa os scripts após carregar a navbar
            const hamburger = document.getElementById('hamburger');
            const navLinks = document.getElementById('nav-links');
            const navbar = document.querySelector('.navbar'); 
            const dropdown2 = document.querySelector('.dropdown');
            const overlay = document.getElementById('overlay'); // Seleciona a overlay

            let isClosing = false;

            hamburger.addEventListener('click', function() {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.add('closing');
                    isClosing = true;

                    setTimeout(function() {
                        if (isClosing) {
                            navLinks.classList.remove('active', 'closing');
                            navLinks.style.visibility = 'hidden';
                            hamburger.innerHTML = '&#9776;';
                            hamburger.classList.remove('rotate');
                            isClosing = false;
                        }
                    }, 300);
                } else {
                    navLinks.style.visibility = 'visible';
                    navLinks.classList.add('active');
                    hamburger.innerHTML = '&times;';
                    hamburger.classList.add('rotate');
                }
            });

            function isMobile() {
                return window.innerWidth <= 768;
            }

            // Efeito de hover no dropdown e exibição da overlay
            if (dropdown2 && navbar && !isMobile()) {
                dropdown2.addEventListener('mouseenter', () => {
                    navbar.classList.add('hovered');
                    overlay.classList.add('visible'); // Mostra a overlay
                });

                dropdown2.addEventListener('mouseleave', () => {
                    navbar.classList.remove('hovered');
                    overlay.classList.remove('visible'); // Oculta a overlay
                });
            }

            // Navbar fixa ao rolar para cima
       // Navbar e faixa informativa fixas ao rolar para cima
let lastScrollPosition = 0;
let isFixed = false;

// Seleciona a faixa informativa
const faixaInformativa = document.querySelector('.faixa-informativa');

window.addEventListener('scroll', function () {
const currentScrollPosition = window.pageYOffset;

lastScrollPosition = currentScrollPosition;
});


        })
        .catch(error => console.error('Erro ao carregar a navbar:', error));
});

if (dropdown2 && navbar && !isMobile()) {
dropdown2.addEventListener('mouseenter', () => {
    overlay.style.display = 'block';
});

dropdown2.addEventListener('mouseleave', () => {
    overlay.style.display = 'none';
});
}