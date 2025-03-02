document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        let navbar = document.querySelector(".navbar");
        let changePoint = document.getElementById("change-color-navbar").offsetTop;
        
        if (window.scrollY >= changePoint) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        };
    });

    window.addEventListener("scroll", function () {
        let navbar = document.querySelector(".navbar");
        let changePoint = document.getElementById("sevent").offsetTop;
        
        if (window.scrollY >= changePoint) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        };
    });

    window.addEventListener("scroll", function () {
        let navbar = document.querySelector(".navbar");
        let sidebar = document.querySelector('.navmenu-mobile');
        let changePoint = document.getElementById("change-color-navbar").offsetTop;
        
        if (window.scrollY >= changePoint) {
            sidebar.classList.add("scrolled");
        } else {
            sidebar.classList.remove("scrolled");
        };
    });
});
