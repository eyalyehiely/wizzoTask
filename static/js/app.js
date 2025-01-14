
document.querySelector('.hamburger-menu').addEventListener('click', function () {
    document.querySelector('header').classList.toggle('mobile-menu-active');

    document.body.style.overflow =
        document.querySelector('header').classList.contains('mobile-menu-active')
            ? 'hidden'
            : 'auto';
});

// Close menu when clicking a link
document.querySelectorAll('.top-nav-links a, .bottom-navbar ul a, .social-icons ul, .social-icon li').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('header').classList.remove('mobile-menu-active');
        document.body.style.overflow = 'auto';
    });
});
