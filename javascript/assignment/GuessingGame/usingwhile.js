let randomNumber = Math.floor(Math.random() * 10) + 1;

let guess;

while (guess !== randomNumber) {
    guess = prompt("Guess the number between 1 and 10:");

    guess = Number(guess);

    if (guess === randomNumber) {
        alert("Congratulations! You guessed it right.");
    } else {
        alert("Try again!");
    }
}
