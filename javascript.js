
let items = ['rock','paper','scissors'];

function playerPlay() {
    return items[Math.floor(Math.random()*items.length)];
}

function computerPlay() {
    return items[Math.floor(Math.random()*items.length)];
}

let playerSelection = playerPlay();
let computerSelection = computerPlay();


function playSingle(_playerSelection, _computerSelection) {
        
    if (playerSelection === 'rock'  &&  computerSelection === 'scissors') {
        return "You win! Rock beats Scissors!";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You win! Paper beats Rock!";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You win! Scissors beat Paper!";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You lose! Paper beats Rock!";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return "You lose! Scissors beat Paper!";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return "You lose! Rock beats Scissors!";
    } else {
        return "It's a tie!";
    }

}

console.log(playerSelection);
console.log(computerSelection);
console.log(playSingle());