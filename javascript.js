
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

function playerPlay() {
    return prompt('Choose your item! Rock, Paper, or Scissors?').toUpperCase();  
}

function computerPlay() {
    return items[Math.floor(Math.random()*items.length)];
}

game();

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


function game() { 
    for (let i = 0; i < 5; i++) {  
        if (playerScore < 3  && computerScore < 3) {  
             playerSelection = playerPlay();
             computerSelection = computerPlay();
             playRound(playerSelection, computerSelection);
             game();
        } else if (playerScore === 3) {
            console.log ('You Win!' + ' ' + playerScore + ' ' + 'vs' + ' ' + computerScore);
        } else if (computerScore === 3) {
           console.log ('You Lose!' + ' ' + playerScore + ' ' + 'vs' + ' ' + computerScore);
        }
    }
}