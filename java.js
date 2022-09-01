function getComputerChoice() {
   let choices = ['rock', 'paper', 'scissors'];
   return choices[Math.floor(Math.random()*choices.length)];
}

let winPlayer = 0;
let winCpu = 0;
let draw = 0;

function playRound(playerSelection, computerSelection) {

         
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
    draw+=1;
    return "Draw game";    
   } else if (playerSelection.toUpperCase() === 'paper'.toUpperCase() && computerSelection === 'scissors') {
    winCpu+=1;
    return "You Lose! Scissors beats Paper";
   } else if (playerSelection.toUpperCase() === 'rock'.toUpperCase() && computerSelection === 'paper') {
    winCpu+=1;
    return "You Lose! Paper beats Rock";
   } else if (playerSelection.toUpperCase() === 'rock'.toUpperCase() && computerSelection === 'scissors') {
    winPlayer+=1;
    return "You Win! Rock beats Scissors";
   } else if (playerSelection.toUpperCase() === 'scissors'.toUpperCase() && computerSelection === 'paper') {
    winPlayer+=1;
    return "You Win! Scissors beats Paper";
   } else if (playerSelection.toUpperCase() === 'scissors'.toUpperCase() && computerSelection === 'rock') {
    winCpu+=1;
    return "You Lose! Rock beats Scissors";
   } else if (playerSelection.toUpperCase() ==='paper'.toUpperCase() && computerSelection === 'rock') {
    winPlayer+=1;
    return "You Win! Paper beats Rock";
   } else {
    return "Please return a valid value";
   }

}

function game() {
   

   for (let i = 0; i<5; i++) {
      console.log('Round ' + `${i+1}`);
      let playerSelection = prompt('Please select Rock, Paper or Scissors');
      let computerSelection = getComputerChoice();
      console.log("Player selects " + `${playerSelection}`);
      console.log("CPU selects " + `${computerSelection}`);
      console.log(playRound(playerSelection, computerSelection));
      console.log("Player " + winPlayer,"Cpu " + winCpu,"Draws " + draw);
   
   if (i > 5) { break; }
      function result () {
      let win = winPlayer>winCpu;
      let lose = winCpu>winPlayer;
      const tie = winPlayer == winCpu;
      
      if (win) {
         return "You win - more wins than the CPU!! ";
      } else if (lose) {
         return "You lose - CPU more wins than you!! ";
      } else {
         return "Draw game - equal wins to CPU! ";
      }
    }
     
 }
 console.log(result () + "End of 5 rounds"); 
}

game()








