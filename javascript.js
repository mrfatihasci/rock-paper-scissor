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
pSelection.setAttribute('style','color: black; text-align: center; font-size:26px;');
body.appendChild(pSelection);
const pScore =document.createElement('p');
pScore.setAttribute('style','color: black; text-align: center; font-size:26px;');
body.appendChild(pScore);
const pResult=document.createElement('p');
pResult.setAttribute('style','color: black; text-align: center; font-size:26px;');
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

const light=document.querySelector('.light-icon');
let theme = true;
function setThemeColor(){
   if(theme){
      body.setAttribute('style','color: white; background-color:black;');
      pSelection.setAttribute('style','color: white; background-color:black; text-align: center; font-size:26px;');
      pScore.setAttribute('style','color: white; background-color:black; text-align: center; font-size:26px;');
      pResult.setAttribute('style','color: white; background-color:black; text-align: center; font-size:26px;');

   }
   else{
      body.setAttribute('style','color: initial; background-color:bisque;');
      pSelection.setAttribute('style','color: initial; background-color:bisque; text-align: center; font-size:26px;');
      pScore.setAttribute('style','color: initial; background-color:bisque; text-align: center; font-size:26px;');
      pResult.setAttribute('style','color: initial; background-color:bisque; text-align: center; font-size:26px;');
   }
}
//add an event to turn on-off the lights  
light.addEventListener('click', (event)=>{
   theme=!theme;
   setThemeColor();
});