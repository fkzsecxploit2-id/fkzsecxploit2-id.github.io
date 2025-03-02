function updateCountdown() {
    const ramadhanDate = new Date('March 1, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = ramadhanDate - now;
    
    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        document.getElementById('countdown').innerHTML = 
            `<font color='red'>${days}</font> Hari : <font color='red'>${hours}</font> Jam : <font color='red'>${minutes}</font> Menit : <font color='red'>${seconds}</font> Detik`;
    } else {
        document.getElementById('countdown').innerHTML = "Selamat Ramadhan!";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();