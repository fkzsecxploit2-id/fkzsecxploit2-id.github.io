document.addEventListener('DOMContentLoaded', function() {
    let tombol = document.getElementById('kunjungi');
    let box = document.querySelector('.alert1');
    let tombol2 = document.getElementById('toggleAlert2');
    let box2 = document.querySelector('#alert2');
    let tombolKeDua = document.getElementById('tutup');
    let tombolKeDua2 = document.getElementById('tutupd2');
    let tombolKe3 = document.getElementById('tutup2');

    let lapor = document.getElementById('lapor');
    let alert4 = document.getElementById('alert4');

    lapor.addEventListener('click', () => {
        alert4.classList.add('show');
    })

    tombolKe3.addEventListener('click', () => {
        box2.classList.remove('show');
    });

    tombol2.addEventListener('click', () => {
        box2.classList.add('show');
    });

    tombolKeDua2.addEventListener('click', () => {
        alert4.classList.remove('show');
    });

    tombol.addEventListener('click', () => {
        box.classList.add('show');
    });

    tombolKeDua.addEventListener('click', () => {
        box.classList.remove('show');
    });
});