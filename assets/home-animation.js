(function () {
    var animationImage = document.querySelector('.animation-layer img');
    var button = document.querySelector('.menu-toggle');
    var menu = document.getElementById('mobile-menu');

    if (animationImage && !document.documentElement.classList.contains('home-animation-seen')) {
        try {
            // Markér ved første visning, så navigation væk og tilbage ikke starter igen.
            sessionStorage.setItem('halloween-home-animation-seen', '1');
        } catch (error) {
            // Animationen kan stadig fungere uden sessionStorage.
        }
    }

    if (!button || !menu) return;

    function closeMenu() {
        button.setAttribute('aria-expanded', 'false');
        button.querySelector('.visually-hidden').textContent = 'Åbn menu';
        menu.hidden = true;
    }

    button.addEventListener('click', function () {
        var isOpen = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', String(!isOpen));
        button.querySelector('.visually-hidden').textContent = isOpen ? 'Åbn menu' : 'Luk menu';
        menu.hidden = isOpen;
        if (!isOpen) menu.querySelector('a').focus();
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
            closeMenu();
            button.focus();
        }
    });

    menu.addEventListener('click', function (event) {
        if (event.target.matches('a')) closeMenu();
    });
}());
