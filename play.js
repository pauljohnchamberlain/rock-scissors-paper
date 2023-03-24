const computerChoiceDisplay = document.getElementById('computer-choice')
const playerChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let playerScoreDisplay = document.getElementById('players-score')
let computerScoreDisplay = document.getElementById('computers-score')
let roundsDisplay = document.getElementById('rounds')
let gameResult = document.getElementById('game-result')
let playerMoves = document.getElementById('player-moves')
let computerMoves = document.getElementById('computer-moves')
let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let playerSelection
let computerSelection
let result

// Get computers choice
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
    
    if (randomNumber === 1) {
        computerSelection = 'rock'
    }
    if (randomNumber === 2) {
        computerSelection = 'scissors'
    }
    if (randomNumber === 3) {
        computerSelection = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerSelection
}

// Get players choice
possibleChoices.forEach(function(button) {
    button.addEventListener('click', playGame);
});

// Determine Winner
function getResult() {
    if (computerSelection === playerSelection) {
        result = 'its a draw!'
        playerMoves.innerHTML += playerSelection + '<br>';
        computerMoves.innerHTML += computerSelection + '<br>';
    }
    if (computerSelection === 'rock' && playerSelection === "paper") {
        result = 'you win!'
        playerScoreDisplay.innerHTML = ++playerScore;
        playerMoves.innerHTML += playerSelection + '<br>';
        computerMoves.innerHTML += computerSelection + '<br>';
    }
    if (computerSelection === 'rock' && playerSelection === "scissors") {
        result = 'you lost!'
        computerScoreDisplay.innerHTML = ++computerScore;
        playerMoves.innerHTML += playerSelection + '<br>';
        computerMoves.innerHTML += computerSelection + '<br>';
    }
    if (computerSelection === 'paper' && playerSelection === "scissors") {
        result = 'you win!'
        playerScoreDisplay.innerHTML = ++playerScore;
        playerMoves.innerHTML += playerSelection + '<br>';
        computerMoves.innerHTML += computerSelection + '<br>';
    }
    if (computerSelection === 'paper' && playerSelection === "rock") {
        result = 'you lose!'
        computerScoreDisplay.innerHTML = ++computerScore;
        playerMoves.innerHTML += playerSelection + '<br>';
        computerMoves.innerHTML += computerSelection + '<br>';
    }
    if (computerSelection === 'scissors' && playerSelection === "rock") {
        result = 'you win!'
        playerScoreDisplay.innerHTML = ++playerScore;
        playerMoves.innerHTML += playerSelection + '<br>';
        computerMoves.innerHTML += computerSelection + '<br>';
    }
    if (computerSelection === 'scissors' && playerSelection === "paper") {
        result = 'you lose!'
        computerScoreDisplay.innerHTML = ++computerScore;
        playerMoves.innerHTML += playerSelection + '<br>';
        computerMoves.innerHTML += computerSelection + '<br>';
    }
    resultDisplay.innerHTML = result
}

// Play Game
function playGame(event) {
    
        playerSelection = event.target.id;
        playerChoiceDisplay.innerHTML = playerSelection;
        generateComputerChoice();
        getResult();
        roundsDisplay.innerHTML = ++rounds;
        
        if (rounds === 5) {
            disableButtons()
            if (playerScore > computerScore) gameResult.innerHTML = 'Congratulations! You Win!'
            if (computerScore > playerScore) gameResult.innerHTML = 'You Lose! Better Luck Next Time'
            if (playerScore === computerScore) gameResult.innerHTML = 'Its a tied game. Try again.'
        }
    }

    function disableButtons() {
        possibleChoices.forEach(elem => {
            elem.disabled = true
        })
    }