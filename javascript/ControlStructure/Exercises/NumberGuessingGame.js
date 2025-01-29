let randomNumber = Math.floor(Math.random() * 10) + 1;

let userGuess = parseInt(prompt("Guess the number between 1 and 10:"));

while (userGuess !== randomNumber) {
    if (userGuess < randomNumber) {
        userGuess = parseInt(prompt("Too low! Try again. Guess the number between 1 and 10:"));
    } else if (userGuess > randomNumber) {
        userGuess = parseInt(prompt("Too high! Try again. Guess the number between 1 and 10:"));
    }
}

console.log("Congratulations! You guessed the number correctly:", randomNumber);
