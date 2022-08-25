function getComputerChoice() {

     return choicesArray[Math.floor(Math.random()*choicesArray.length)];

}

let choicesArray = ['Rock', 'Paper', 'Scissors'];

function playRound(playerSelection, computerSelection) {

   let outcomeLose;
   let outcomeWin;
   let outcomeDraw;
   let outcomeUndefined;

  
   let Paper = 'paper';
   let paperIns = Paper.toUpperCase() === playerSelection.toUpperCase();
   let Rock = 'rock';
   let rockIns = Rock.toUpperCase() === playerSelection.toUpperCase();
   let Scissors = 'scissors';
   let scissorsIns = Scissors.toUpperCase() === playerSelection.toUpperCase();

  

   if (paperIns && computerSelection == 'Rock') {
    return outcomeWin = alert("You Win! Paper beats Rock");
   } else if (paperIns && computerSelection == 'Scissors') {
    return outcomeLose = alert("You Lose! Scissors beats Paper"); 
   } else if (rockIns && computerSelection == 'Paper') {
    return outcomeLose = alert("You Lose! Paper beats Rock");
   } else if (rockIns && computerSelection == 'Scissors') {
    return outcomeWin = alert("You Win! Rock beats Scissors");
   } else if (scissorsIns && computerSelection == 'Paper') {
    return outcomeWin = alert("You Win! Scissors beats Paper");
   } else if (scissorsIns && computerSelection == 'Rock') {
    return outcomeLose = alert("You Lose! Rock beats Scissors");
   } else if (rockIns && computerSelection == 'Rock') {
    return outcomeDraw = alert("Tie game! Rock = Rock");
   } else if (paperIns && computerSelection == 'Paper') {
    return outcomeDraw = alert("Tie game! Paper = Paper");
   } else if (scissorsIns && computerSelection == 'Scissors') {
    return outcomeDraw = alert("Tie game! Scissors = Scissors");
   } else {
    return outcomeUndefined = alert("Please return a valid value");
   }


}

const playerSelection = 'PapEr';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));