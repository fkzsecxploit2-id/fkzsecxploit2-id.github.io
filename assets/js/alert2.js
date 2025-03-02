document.addEventListener('DOMContentLoaded', function() {
    let toggle = document.getElementById('lapor2');
    let close = document.getElementById('tutupd3');
    let box = document.getElementById('alert5');

    toggle.addEventListener('click', () => {
        box.classList.add('show');
    })

    close.addEventListener('click', () => {
        box.classList.remove('show');
    })
});