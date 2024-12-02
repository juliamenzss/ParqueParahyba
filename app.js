document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY) {
            navbar.classList.add('hidden'); 
        } else {
            navbar.classList.remove('hidden'); 
        }
        lastScrollY = window.scrollY;
        
        document.addEventListener('DOMContentLoaded', () => {
            const menuButton = document.querySelector('.mobile-menu-button');
            const mobileMenu = document.querySelector('.mobile-menu');
        
            menuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('active');
            });
        });
        
    });
});
