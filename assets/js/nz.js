document.addEventListener('DOMContentLoaded', function() {
    let alert3 = document.getElementById('alert3');
    let close = document.getElementById('closed');
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        alert3.classList.add('show');
        // setTimeout(function() {
        //     alert3.classList.remove('show');
        // }, 3000);

    });

    close.addEventListener('click', () => {
        alert3.classList.remove('show');
    });
});

