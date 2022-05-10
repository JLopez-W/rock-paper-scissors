
const items = ['ROCK','PAPER','SCISSORS'];

let playerSelection = prompt('Choose your item! Rock, Paper, or Scissors?').toUpperCase();

function computerPlay() {
    return items[Math.floor(Math.random()*items.length)];
}

let computerSelection = computerPlay();


function playSingle(playerSelection, computerSelection) {
        
    if (playerSelection === 'ROCK'  &&  computerSelection === 'SCISSORS') {
        return 'You win! ROCK beats SCISSORS!';
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        return 'You win! PAPER beats ROCK!';
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        return 'You win! SCISSORS beat PAPER!';
    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        return 'You lose! PAPER beats ROCK!';
    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        return 'You lose! SCISSORS beat PAPER!';
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        return 'You lose! ROCK beats SCISSORS!'; 
    } else if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else {
        return 'What? Please try again.';
    }

}

console.log(playerSelection);
console.log(computerSelection);
console.log(playSingle(playerSelection, computerSelection));

