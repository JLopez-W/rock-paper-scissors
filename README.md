# Rock - Paper - Scissors
***

## Create a five-round 'Player vs Computer' game that keeps score and announces the winner.

This was my first javascript project so it was quite challenging for me.

 ### In the first version of the game, I had to learn how to:

- Call a function with parameters
- Call that function from within another function
- Get a random item from an array
- Determine a winner for a single round and return the result
- Increment the game score after every round
- Create a loop to run a 5-round game that tracks the winner of each round, the total score, and then announces the winner

I couldn't figure out why I kept getting "undefined" values in the single round function and got stuck on this problem for quite a while. It ended up being a problem with my variables' scope and how I called the function. Once that was fixed, it worked perfectly.

### In the second version of the game, I had to learn how to use DOM methods to do the following:  
    
- Create new elements and add them to the DOM
- Alter element properties
- Attach an event listener to a group of nodes (the game buttons)
- Add display style properties to hide or display nodes at certain points (the game buttons vs the reset button, text content)

Once the buttons and event listener were added, I got stuck because the game immediately played several rounds with the same player selection and computer selection without waiting for the next click with new selections. I didn't realize right away that I had to remove the 5-round game loop from the first version of the game. The game buttons in this version of the game replaced the text input prompt from the previous version. That prompt was part of the game loop, but without the need for a prompt there was also no need for the loop. So I removed the loop and added the conditionals to the event handler. This allowed the game to stop after each round and wait for the next button click to start the next round.
***

### Live Preview:
https://jlopez-w.github.io/rock-paper-scissors/