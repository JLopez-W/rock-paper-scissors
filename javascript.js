
const items = ['ROCK','PAPER','SCISSORS'];
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
      playerSelection = button.id;
      computerSelection = computerPlay();
      playRound(playerSelection,computerSelection);
    });
});

const container = document.querySelector('#container');
const results = document.createElement('div');
results.classList.add('results');
container.appendChild(results);

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


let computerSelection = computerPlay();



function computerPlay() {
    return items[Math.floor(Math.random()*items.length)];
}

let score = checkScore();
//game(score);


function playRound(playerSelection, computerSelection) {  
    if ((playerSelection === 'ROCK'  &&  computerSelection === 'SCISSORS') || (playerSelection === 'PAPER' && computerSelection === 'ROCK') || (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')) {
      playerScoreAdd1(); 
      results.textContent = 'Player Point!' + ' ' + playerSelection + ' ' + 'beats' + ' ' + computerSelection + '' + '!' + ' ' + playerScore + ' ' + 'vs' + ' ' + computerScore; 
  } else if ((playerSelection === 'PAPER' && computerSelection === 'SCISSORS') || (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') || (playerSelection === 'ROCK' && computerSelection === 'PAPER')) {
      computerScoreAdd1(); 
      results.textContent = 'Computer Point!' + ' ' + computerSelection + ' ' + 'beats' + ' ' + playerSelection + '' + '!'+ ' ' + playerScore + ' ' + 'vs' + ' ' + computerScore; 
  } else if (playerSelection === computerSelection) {
      results.textContent = 'It\'s a tie! No score.';  
  } else {
      results.textContent = 'What? Please try again.';
  }
} 


// function game() { 
//     for (let i = score; i <= 5; i++) {  
//         if (playerScore < 3  && computerScore < 3) {  
//              playerSelection = playerPlay();
//              computerSelection = computerPlay();
//              playRound(playerSelection, computerSelection);
//              score = checkScore();
//         } else if (playerScore === 3) {
//             return ('You Win!' + ' ' + playerScore + ' ' + 'vs' + ' ' + computerScore);
//         } else if (computerScore === 3) {
//             return ('You Lose!' + ' ' + playerScore + ' ' + 'vs' + ' ' + computerScore);
           
//         }
//     }
// }

// console.log(game()):