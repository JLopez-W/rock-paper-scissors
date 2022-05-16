
const items = ['ROCK','PAPER','SCISSORS'];

let playerScore = 0;
function playerScoreAdd1() {
  playerScore += 1;
}


let computerScore = 0;
function computerScoreAdd1() {
    computerScore += 1;
}

let playerSelection;
let computerSelection;

let playerSelection = prompt('Choose your item! Rock, Paper, or Scissors?').toUpperCase();

function computerPlay() {
    return items[Math.floor(Math.random()*items.length)];
}


function playRound(playerSelection, computerSelection) {
        
    if ((playerSelection === 'ROCK'  &&  computerSelection === 'SCISSORS') || (playerSelection === 'PAPER' && computerSelection === 'ROCK') || (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')) {
        return 'Player Point!' + ' ' + playerSelection + ' ' + 'beats' + ' ' + computerSelection + '' + '!';
     } else if ((playerSelection === 'PAPER' && computerSelection === 'SCISSORS') || (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') || (playerSelection === 'ROCK' && computerSelection === 'PAPER')) {
          return 'Computer Point!' + ' ' + computerSelection + ' ' + 'beats' + ' ' + playerSelection + '' + '!'; 
     } else if (playerSelection === computerSelection) {
         return 'It\'s a tie! No score.';
     } else {
         return 'What? Please try again.';
    }

}

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));