// Function to randomly return Rock, Paper, or Scissors
    function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }
  
  // Function to play a single round of Rock Paper Scissors
  function playRound(playerSelection, computerSelection) {
    let result;
  
    if (!playerSelection) {
      result = 'Invalid selection';
    } else {
      playerSelection = playerSelection.toLowerCase();
    
      if (playerSelection === 'rock') {
        if (computerSelection === 'Rock') {
          result = 'Tie!';
        } else if (computerSelection === 'Paper') {
          result = 'You Lose! Paper beats Rock';
        } else if (computerSelection === 'Scissors') {
          result = 'You Win! Rock beats Scissors';
        }
      } else if (playerSelection === 'paper') {
        if (computerSelection === 'Rock') {
          result = 'You Win! Paper beats Rock';
        } else if (computerSelection === 'Paper') {
          result = 'Tie!';
        } else if (computerSelection === 'Scissors') {
          result = 'You Lose! Scissors beats Paper';
        }
      } else if (playerSelection === 'scissors') {
        if (computerSelection === 'Rock') {
          result = 'You Lose! Rock beats Scissors';
        } else if (computerSelection === 'Paper') {
          result = 'You Win! Scissors beats Paper';
        } else if (computerSelection === 'Scissors') {
          result = 'Tie!';
        }
      } else {
        result = 'Invalid selection';
      }
    }
  
    return result;
  }
  
  
  // Function to play a 5 round game and keep score
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt('Enter Rock, Paper, or Scissors:');
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
      console.log(result);
  
      if (result.includes('Win')) {
        playerScore++;
      } else if (result.includes('Lose')) {
        computerScore++;
      }
    }
  
    if (playerScore > computerScore) {
      console.log('You win the game!' + ' ' + playerScore + ' to ' + computerScore);
    } else if (playerScore < computerScore) {
      console.log('You lose the game!' + ' ' + playerScore + ' to ' + computerScore);
    } else {
      console.log('Tie game!');
    }
  }
  
  // Start the game
  game();
  