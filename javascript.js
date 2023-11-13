let round = 0;
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
   let selectionArray = ['rock', 'paper', 'scissor'];
   return selectionArray[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
   if (playerSelection == computerSelection) {
      ++round;
   }
   else if ((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'scissor') || (playerSelection == 'scissor' && computerSelection == 'rock')) {
      ++round;
      ++computerScore;
   }
   else if ((computerSelection == 'rock' && playerSelection == 'paper') || (computerSelection == 'paper' && playerSelection == 'scissor') || (computerSelection == 'scissor' && playerSelection == 'rock')) {
      ++round;
      ++playerScore;
   }
   else {
      ++round;
      ++computerScore;
   }
}

const one = document.getElementById('one');
const two = document.getElementById('two');
for (let i = 0; i <= 4; i++) {
   playerSelection = prompt("type rock/paper/scissor");
   computerSelection = getComputerChoice();
   playRound(playerSelection, computerSelection);
   console.log(`PlayervsComputer(${playerSelection}-${computerSelection}) @round${round}: computer:${computerScore} user:${playerScore}`);
   if (i == 4) {
      if (playerScore >> computerScore) {
         console.log(`You Win`);
         one.innerHTML = `You Win`;
         two.innerHTML = `You vs Computer: You-${playerScore} / Computer:${computerScore}`;
      }
      else if (playerScore == computerScore) {
         console.log(`It's a draw`);
         one.innerHTML = `It's a draw`;
         two.innerHTML = `You vs Computer: You-${playerScore} / Computer:${computerScore}`;
      }
      else {
         console.log(`You Lose`);
         one.innerHTML = `You Lose`;
         two.innerHTML = `You vs Computer: You-${playerScore} / Computer:${computerScore}`;
      }
   }
}




