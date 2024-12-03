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
    });
});
