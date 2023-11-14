let round = 0;
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;


function getComputerChoice() {   //return computerSelection as string of rock/paper/scissor
   let selectionArray = ['rock', 'paper', 'scissor'];
   return selectionArray[Math.floor(Math.random() * 3)];
}


function playRound(playerSelection, computerSelection) {   // return none, increment round, increment winners score
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


const playerNode = document.querySelector('.player');
const playerP = document.querySelector('.playerP');
const computerNode =document.querySelector('.computer');
const computerP =document.querySelector('.computerP');
function updateScoreContainer(){       // finding ratio depending on the current score
   playerNode.setAttribute('style',`flex-grow: ${(playerScore+0.005)/(computerScore + playerScore + 0.01)};`);
   playerP.innerHTML =`YOU: ${playerScore}--`;
   computerNode.setAttribute('style',`flex-grow:${(computerScore+0.005)/(computerScore + playerScore + 0.01)} ;`);
   computerP.innerHTML=`--${computerScore} COMPUTER`;
}

const container = document.querySelector('#button-container');
const body=document.querySelector('body');
const pSelection=document.createElement('p');
pSelection.setAttribute('style','color: white; text-align: center; font-size:22px;');
body.appendChild(pSelection);
const pScore =document.createElement('p');
pScore.setAttribute('style','color: white; text-align: center; font-size:22px;');
body.appendChild(pScore);
const pResult=document.createElement('p');
pResult.setAttribute('style','color: white; text-align: center; font-size:26px;');
body.appendChild(pResult);


container.addEventListener('click', (event)=>{
   playerSelection=`${event.target.textContent}`;
   computerSelection=getComputerChoice();
   playRound(playerSelection, computerSelection);
   updateScoreContainer();
   pSelection.textContent=`${playerSelection} ---------  ${computerSelection}`;
   pScore.textContent=`${playerScore}-${computerScore}`;
   if ((playerScore == 5)||(computerScore==5)) {
      if (playerScore == 5){
         pResult.textContent=`You Win! ${playerScore}---${computerScore}`;
         computerScore=0;
         playerScore=0;
      }
      else{
         pResult.textContent=`Computer Win! ${playerScore}---${computerScore}`;
         computerScore=0;
         playerScore=0;
      }
   }
});


















/*
const one = document.getElementById('one');
const two = document.getElementById('two');


for (let i = 0; i <= 4; i++) {
   playerSelection = prompt("type rock/paper/scissor");

   computerSelection = getComputerChoice();

   playRound(playerSelection, computerSelection);

   console.log(`PlayervsComputer(${playerSelection}-${computerSelection}) @round${round}: computer:${computerScore} user:${playerScore}`);
  
  
   if (round == 5) {
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
*/

