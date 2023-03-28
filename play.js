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

const gameResultPlaceholder = document.querySelector('#game-result-placeholder');
const gameResultDisplay = document.createElement('div');
gameResultDisplay.classList.add('game-result');
gameResultDisplay.textContent = 'And the winner is ...';

const resetButton = document.createElement('button');
resetButton.textContent = 'Play Again';
resetButton.classList = 'reset-button';

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
            if (playerScore > computerScore) {
                gameResultDisplay.textContent = 'Congratulations! You Win!';
                gameResultPlaceholder.appendChild(gameResultDisplay);
                gameResultDisplay.appendChild(resetButton);
            } 
            if (computerScore > playerScore) {
                gameResultDisplay.textContent = 'Sorry you lose! Try again!';
                gameResultPlaceholder.appendChild(gameResultDisplay);
                gameResultDisplay.appendChild(resetButton);
            }
            if (playerScore === computerScore) {
                gameResultDisplay.textContent = 'Its a tie';
                gameResultPlaceholder.appendChild(gameResultDisplay);
                gameResultDisplay.appendChild(resetButton);
            }
        }
    }

    function disableButtons() {
        possibleChoices.forEach(elem => {
            elem.disabled = true
        })
    }

// Add click event listener to reset button
resetButton.addEventListener('click', resetGame);

function resetGame() {
    // Reset scores
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.innerHTML = playerScore;
    computerScoreDisplay.innerHTML = computerScore;
    rounds = 0;
    roundsDisplay.innerHTML = rounds;

    // Enable buttons
    possibleChoices.forEach(elem => {
        elem.disabled = false;
    });

    // Remove game result display
    gameResultDisplay.remove();

    // Clear moves
    playerMoves.innerHTML = '';
    computerMoves.innerHTML = '';
}
