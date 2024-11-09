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

if (currentScrollPosition < lastScrollPosition) {
    // Mostra e fixa a faixa informativa e a navbar ao rolar para cima
    faixaInformativa.style.position = 'fixed';
    faixaInformativa.style.top = '0';
    faixaInformativa.style.width = '100%';
    faixaInformativa.style.transform = 'translateY(0)';
    faixaInformativa.style.transition = 'transform 0.3s ease';

    navbar.style.position = 'fixed';
    navbar.style.top = '30px'; // Ajuste de 30px para a navbar ficar logo abaixo da faixa
    navbar.style.width = '100%';
    navbar.style.transform = 'translateY(0)';
    navbar.style.transition = 'transform 0.3s ease';
    isFixed = true;
} else if (currentScrollPosition > lastScrollPosition && isFixed) {
    // Esconde a faixa informativa e a navbar ao rolar para baixo
    faixaInformativa.style.transform = 'translateY(-100%)';
    navbar.style.transform = 'translateY(-130%)';
    isFixed = false;
}

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