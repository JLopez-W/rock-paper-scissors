
let items = ['rock','paper','scissors'];

function computerPlay(items) {
    return items[Math.floor(Math.random()*items.length)];
}

console.log(computerPlay(items));
