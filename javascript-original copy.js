
const items = ['ROCK','PAPER','SCISSORS'];

let playerScore = 0;
function playerScoreAdd1() {
  playerScore += 1;
}


let computerScore = 0;
function computerScoreAdd1() {
    computerScore += 1;
}

function checkScore() {
    return playerScore + computerScore;
 }


let playerSelection;
let computerSelection;

function playerPlay() {
    return prompt('Choose your item! Rock, Paper, or Scissors?').toUpperCase();  
}

function computerPlay() {
    return items[Math.floor(Math.random()*items.length)];
}

let score = checkScore();
game(score);


function playRound(playerSelection, computerSelection) {  
    if ((playerSelection === 'ROCK'  &&  computerSelection === 'SCISSORS') || (playerSelection === 'PAPER' && computerSelection === 'ROCK') || (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')) {
      playerScoreAdd1(); 
      console.log ('Player Point!' + ' ' + playerSelection + ' ' + 'beats' + ' ' + computerSelection + '' + '!' + ' ' + playerScore + ' ' + 'vs' + ' ' + computerScore); 
  } else if ((playerSelection === 'PAPER' && computerSelection === 'SCISSORS') || (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') || (playerSelection === 'ROCK' && computerSelection === 'PAPER')) {
      computerScoreAdd1(); 
      console.log ('Computer Point!' + ' ' + computerSelection + ' ' + 'beats' + ' ' + playerSelection + '' + '!'+ ' ' + playerScore + ' ' + 'vs' + ' ' + computerScore); 
  } else if (playerSelection === computerSelection) {
      console.log ('It\'s a tie! No score.');  
  } else {
      console.log ('What? Please try again.');
  }
} 


function game() { 
    for (let i = score; i <= 5; i++) {  
        if (playerScore < 3  && computerScore < 3) {  
             playerSelection = playerPlay();
             computerSelection = computerPlay();
             playRound(playerSelection, computerSelection);
             score = checkScore();
        } else if (playerScore === 3) {
            return ('You Win!' + ' ' + playerScore + ' ' + 'vs' + ' ' + computerScore);
        } else if (computerScore === 3) {
            return ('You Lose!' + ' ' + playerScore + ' ' + 'vs' + ' ' + computerScore);
           
        }
    }
}

console.log(game());