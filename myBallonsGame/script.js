let balloonImg = document.getElementById("yellowBalloon")
let score = 0;
balloonImg.addEventListener('mousedown', startGame);
document.getElementById("restart").addEventListener('mousedown', restarGame);

function startGame() {
    balloonImg.style.visibility = "hidden";
    score = score + 1; 
    scoreBoard.textContent = score;
}

function restart() {
    balloonImg.style.visibility = "visible";
}