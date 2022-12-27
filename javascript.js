
const items = ['ROCK','PAPER','SCISSORS'];
const buttons = document.querySelectorAll('button');

const container = document.querySelector('#container');
const results = document.createElement('div');
results.classList.add('results');
container.appendChild(results);

const reset = document.createElement('div');
reset.classList.add('reset');
container.appendChild(reset);

const resetButton = document.createElement('button');
resetButton.setAttribute('id', 'resetButton');
resetButton.textContent = "Play Again";
container.appendChild(resetButton);

function myFunction() {
    resetButton = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

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

function computerPlay() {
    return items[Math.floor(Math.random()*items.length)];
}

let computerSelection = computerPlay();
let score = checkScore();


function playRound(playerSelection, computerSelection) {  
    if ((playerSelection === 'ROCK'  &&  computerSelection === 'SCISSORS') || (playerSelection === 'PAPER' && computerSelection === 'ROCK') || (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')) {
      playerScoreAdd1(); 
      results.textContent = 'Player Point!' + ' ' + playerSelection + ' ' + 'beats' + ' ' + computerSelection + '' + '!' + ' ' + playerScore + ' ' + 'vs' + ' ' + computerScore; 
  } else if ((playerSelection === 'PAPER' && computerSelection === 'SCISSORS') || (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') || (playerSelection === 'ROCK' && computerSelection === 'PAPER')) {
      computerScoreAdd1(); 
      results.textContent = 'Computer Point!' + ' ' + computerSelection + ' ' + 'beats' + ' ' + playerSelection + '' + '!'+ ' ' + playerScore + ' ' + 'vs' + ' ' + computerScore; 
  } else if (playerSelection === computerSelection) {
      results.textContent = 'It\'s a tie! No score.';  
  }
}



buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerSelection = computerPlay();
        score;
        if (playerScore < 3  && computerScore < 3) {        
         playRound(playerSelection, computerSelection); 
        } else if (playerScore === 3) {
            results.textContent = 'You Win!' + ' ' + playerScore + ' ' + 'vs' + ' ' + computerScore;
        } else if (computerScore === 3) {
            results.textContent = 'You Lose!' + ' ' + playerScore + ' ' + 'vs' + ' ' + computerScore;
        }
    });
    });


