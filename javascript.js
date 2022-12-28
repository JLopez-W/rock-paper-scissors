
const items = ['ROCK','PAPER','SCISSORS'];
const buttons = document.querySelectorAll('button');
const gameButtons = document.querySelector('#gameButtons')
const scoreDisplay = document.querySelector('#scoreDisplay');
scoreDisplay.textContent = 'ready... ' + ' ' + 'set...'


const container = document.querySelector('#container');
const results = document.createElement('div');
results.classList.add('results');
container.insertBefore(results, gameButtons);
results.textContent = 'GO!';

const reset = document.createElement('div');
reset.setAttribute('id', 'reset');
container.appendChild(reset);


const resetButton = document.createElement('button');
resetButton.setAttribute('id', 'resetButton');
resetButton.textContent = "Play Again";
reset.appendChild(resetButton);
resetButton.style.display = 'none';

const gameOver = document.querySelector('#gameOver');
gameOver.textContent = '';


function resetGame() {
    playerScore = 0;
    computerScore = 0;
    results.textContent = '';
    resetButton.style.display = 'none';
    scoreDisplay.textContent = 'ready... ' + ' ' + 'set...'
    results.textContent = 'GO!';
    gameButtons.style.display = 'block';
}

resetButton.addEventListener('click', () => {
        resetGame();
});


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
      scoreDisplay.textContent = playerScore + ' ' + 'vs' + ' ' + computerScore;
      results.textContent = 'Player Point!' + ' ' + playerSelection + ' ' + 'beats' + ' ' + computerSelection + '' + '!'; 
  } else if ((playerSelection === 'PAPER' && computerSelection === 'SCISSORS') || (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') || (playerSelection === 'ROCK' && computerSelection === 'PAPER')) {
      computerScoreAdd1(); 
      scoreDisplay.textContent = playerScore + ' ' + 'vs' + ' ' + computerScore;
      results.textContent = 'Computer Point!' + ' ' + computerSelection + ' ' + 'beats' + ' ' + playerSelection + '' + '!' 
  } else if (playerSelection === computerSelection) {
      scoreDisplay.textContent = playerScore + ' ' + 'vs' + ' ' + computerScore;
      results.textContent = 'It\'s a tie! No point scored.';  
  }
    
}


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerSelection = computerPlay();
        score;
        if (playerScore < 3  && computerScore < 3) {        
         playRound(playerSelection, computerSelection); 
         score;
        } else if (playerScore === 3) {
            results.textContent = 'YOU WIN!';
            gameButtons.style.display = 'none';
            resetButton.style.display = 'block';             
        } else if (computerScore === 3) {
            results.textContent = 'YOU LOSE!';
            gameButtons.style.display = 'none'; 
            resetButton.style.display = 'block';                   
        }
    });
    });

