const now = new Date();

const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('demo').innerHTML = "Tanggal: " + now.toLocaleDateString('id-ID', optionsDate);
const optionsDate1 = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('demo1').innerHTML = "Tanggal: " + now.toLocaleDateString('id-ID', optionsDate1);


const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
document.getElementById('time').innerHTML = "Waktu: " + now.toLocaleTimeString('id-ID', optionsTime);
