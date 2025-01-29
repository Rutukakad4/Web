let userInput = prompt("Enter a number to generate its multiplication table:");

let number = parseInt(userInput);

if (isNaN(number)) {
    console.log("That's not a valid number.");
} else {
    console.log(`Multiplication table for ${number}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}
