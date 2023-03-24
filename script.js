const computerChoiceDisplay = document.getElementById('computer-choice')
const playerChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let playerSelection
let computerSelection
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  playerSelection = e.target.id
  playerChoiceDisplay.innerHTML = playerSelection
  generateComputerChoice()
  getResult()
}))


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

// Determine Winner
function getResult() {
  if (computerSelection === playerSelection) {
    result = 'its a draw!'
  }
  if (computerSelection === 'rock' && playerSelection === "paper") {
    result = 'you win!'
  }
  if (computerSelection === 'rock' && playerSelection === "scissors") {
    result = 'you lost!'
  }
  if (computerSelection === 'paper' && playerSelection === "scissors") {
    result = 'you win!'
  }
  if (computerSelection === 'paper' && playerSelection === "rock") {
    result = 'you lose!'
  }
  if (computerSelection === 'scissors' && playerSelection === "rock") {
    result = 'you win!'
  }
  if (computerSelection === 'scissors' && playerSelection === "paper") {
    result = 'you lose!'
  }
  resultDisplay.innerHTML = result
}