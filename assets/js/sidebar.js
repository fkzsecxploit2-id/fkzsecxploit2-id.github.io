document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('sidebarShow');
    const point = document.getElementById('navmenu-mobile-toggle');

    toggle.addEventListener('click', () => {
        point.classList.toggle('header-show');
    })
});