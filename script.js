const images = ["./img/image1.jpg", "./img/image2.jpg", "./img/image3.jpg"];
let currentIndex = 0;

const gameImage = document.getElementById('game-image');
const restartBtn = document.getElementById('restart-btn');

gameImage.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    gameImage.src = images[currentIndex];
});

restartBtn.addEventListener('click', () => {
    currentIndex = 0;
    gameImage.src = images[currentIndex];
});
