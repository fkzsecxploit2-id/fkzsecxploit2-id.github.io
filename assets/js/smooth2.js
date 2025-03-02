document.querySelectorAll('.navmenu-mobile a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href')); 
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth', 
                block: 'start'
            });
        }

        const navmenu = document.getElementById('navmenu-mobile-toggle'); 
        navmenu.classList.remove('header-show');
    });
});
