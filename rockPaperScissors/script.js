let rockDiv = document.getElementById('rockDiv');
let paperDiv = document.getElementById('paperImg');
let scissorsDiv = document.getElementById('scissors');
let options = ['rock', 'paper', 'scissors'];

rockDiv.addEventListener('mouseover', hoverIsOn);
rockDiv.addEventListener('mouseout', hoverIsOff);
paperDiv.addEventListener('mouseover', hoverIsOn);
paperDiv.addEventListener('mouseout', hoverIsOff);
scissorsDiv.addEventListener('mouseover', hoverIsOn);
scissorsDiv.addEventListener('mouseout', hoverIsOff);

rockDiv.addEventListener('mousedown', function (){startGame('rock')})
paperDiv.addEventListener('mousedown', function (){startGame('paper')})
scissorsDiv.addEventListener('mousedown', function (){startGame('scissors')})

function hoverIsOn(pEvent) {
    if(pEvent.target.className == "rps"){
        pEvent.target.style.backgroundColor= 'black';
        pEvent.target.style.transition = "0.4s";
    }
}

function hoverIsOff(pEvent) {
    if(pEvent.target.className == "rps"){
        pEvent.target.style.backgroundColor='transparent';
    }
}

function startGame(pUserSelection){
    let userChoice = pUserSelection;
    console.log("User:" + userChoice)

    let randomNumber = Math.floor(Math.random() * 3);
    console.log("random Number: " + randomNumber);
    let computerChoice = options[randomNumber];
    console.log("Computer" + computerChoice);
} 
