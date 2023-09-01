let score = 0;
let footBall = 0;
let basketBall = 0;
//let balloonImg = document.querySelector(".yellowBalloon");
let scoreBoard = document.getElementById("scoreBoard");
let message = document.getElementById("ballsGalery");
//let restart = document.getElementById("restart");

document.addEventListener('mousedown', startGame);

function startGame(pEvent) {
    if(pEvent.target.className == "footBall"){
        pEvent.target.style.visibility = "hidden";
        score = score + 1; 
        scoreBoard.textContent = score;
        footBall = footBall + 1;
        endGame();
    }else if (pEvent.target.className == "basketBall"){
        pEvent.target.style.visibility = "hidden";
        score = score - 1; 
        scoreBoard.textContent = score;
        basketBall = basketBall + 1;
        alert("You should click on the Football balls")
        endGame();

    }else if (pEvent.target.className == "restartBtn"){
        restartGame();
    
    } else {
        alert("You should click on the Football balls");
    }
}

function endGame(){
    if (footBall==6){
        message.textContent = "Well done!! You won"
        message.style.backgroundColor = "green";
    } 
    if (basketBall==1){
        message.textContent = "You choose a Basketball ball! Please, try again"
        message.style.backgroundColor = "red";
    } 
}

function restartGame() {
    window.location.reload();
}
