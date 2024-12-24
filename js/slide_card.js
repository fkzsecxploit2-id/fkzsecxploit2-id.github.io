// const slider = document.getElementById("slider");
// const cards = document.querySelectorAll(".card-content2");

// const cardWidth = cards[0].offsetWidth + 25; 
// const visibleCards = 3; 
// const maxScroll = (cards.length - visibleCards) * cardWidth;

// let currentPosition = 0;

// function slideLeft() {
//     currentPosition -= cardWidth * visibleCards;
//     if (currentPosition < 0) currentPosition = 0; 
//     slider.style.transform = `translateX(-${currentPosition}px)`;
// }

// function slideRight() {
//     currentPosition += cardWidth * visibleCards; 
//     if (currentPosition > maxScroll) currentPosition = maxScroll; 
//     slider.style.transform = `translateX(-${currentPosition}px)`;
// }

// const slider = document.getElementById('slider'); 
// const cards = document.querySelectorAll('.card-content2'); 
// const cardWidth = cards[0].offsetWidth;
// let currentIndex = 0; 

// function slideLeft() {
//     if (currentIndex > 0) {
//         currentIndex--;
//         slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`; 
//     }
// }

// function slideRight() {
//     if (currentIndex < cards.length - 3) {
//         currentIndex++;
//         slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
//     }
// }

const slider = document.getElementById('slider'); 
const cards = document.querySelectorAll('.card-content2'); 

let cardWidth = cards[0].offsetWidth + 25; 
let visibleCards = 1; 
let currentPosition = 0; 

function updateSliderForMobile() {
    cardWidth = cards[0].offsetWidth + 25; 
    currentPosition = Math.min(currentPosition, (cards.length - visibleCards) * cardWidth);
    slider.style.transform = `translateX(-${currentPosition}px)`;
}

window.addEventListener('resize', updateSliderForMobile);

function slideLeft() {
    currentPosition -= cardWidth;
    if (currentPosition < 0) currentPosition = 0; 
    slider.style.transform = `translateX(-${currentPosition}px)`;
}

function slideRight() {
    const maxScroll = (cards.length - visibleCards) * cardWidth;
    currentPosition += cardWidth; 
    if (currentPosition > maxScroll) currentPosition = maxScroll; 
    slider.style.transform = `translateX(-${currentPosition}px)`;
}

updateSliderForMobile();
