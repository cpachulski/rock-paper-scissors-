function getComputerChoice() {
  let itemPicker = Math.floor(Math.random() * 3);
  if (itemPicker === 0) {
    return "ROCK";
  } else if (itemPicker === 1) {
    return "PAPPER";
  } else if (itemPicker === 2) {
    return "SCISSORS";
  }
}

humanScore = 0;
computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    humanScore++;
    numRounds++;
    return "You Won! Rock beats Scissors";
  } else if (computerSelection === "ROCK" && playerSelection === "SCISSORS") {
    computerScore++;
    numRounds++;
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "PAPPER" && computerSelection === "ROCK") {
    humanScore++;
    numRounds++;
    return "You Won! Paper beats Rock";
  } else if (computerSelection === "PAPPER" && playerSelection === "ROCK") {
    computerScore++;
    numRounds++;
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPPER") {
    humanScore++;
    numRounds++;
    return "You Won! Scissors beats Papper";
  } else if (computerSelection === "SCISSORS" && playerSelection === "PAPPER") {
    computerScore++;
    numRounds++;
    return "You Lose! Scissors beats Papper";
  } else {
    return playRound(playerSelection, getComputerChoice());
  }
}

let numRounds = 0;
const maxRounds = 5;

function game(playerSelection) {
  if (numRounds < maxRounds) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
    let score = document.getElementById("score");

    score.innerHTML = `Human: ${humanScore}, Computer: ${computerScore}`;
  }

  if (numRounds === maxRounds) {
    let endGame = document.getElementById("Winner-Loser");
    if (humanScore > computerScore) {
      endGame.innerHTML = `You won the game! Final score: Human ${humanScore}, Computer ${computerScore}`;
    } else if (humanScore < computerScore) {
      endGame.innerHTML = `You lost the game silly human haha! Final score: Human ${humanScore}, Computer ${computerScore}`;
    } else {
      endGame.innerHTML = `The game ended in a tie! BUT how... Final score: Human ${humanScore}, Computer ${computerScore}`;
    }
  }
}

//can be used as a dice roll

// Clear previous results from container
// document.getElementById("results-container").innerHTML = "";
// for (let i = 0; i < 5; i++) {
//   let computerSelection = getComputerChoice();
//   let resultElement = document.createElement("p"); // create new h1 element
//   resultElement.textContent = computerSelection; // set text content
//   document.getElementById("results-container").appendChild(resultElement); // append to container
//   console.log(playRound(playerSelection, computerSelection));
// }

//scoreboard
//   let endGame = document.getElementById("win-loser");
//   if (humanScore > computerScore) {
//     endGame.innerHTML = `${humanScore} ${computerScore} you won`;
//   } else if (humanScore < computerScore) {
//     endGame.innerHTML = `${humanScore} ${computerScore} you lose`;
//   }
// }
