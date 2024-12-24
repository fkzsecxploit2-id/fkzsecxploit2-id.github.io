// function closeAlert() {
//     document.getElementById("InfoAlert").style.display = "none";
// }


window.onload = function () {
    const alertBox = document.getElementById("InfoAlert");
    alertBox.classList.remove("hidden-on-load"); 
};


function closeAlert() {
    const alertBox = document.getElementById("InfoAlert");
    alertBox.classList.add("hidden");
    setTimeout(() => {
        alertBox.style.display = "none";
    }, 500); 
}