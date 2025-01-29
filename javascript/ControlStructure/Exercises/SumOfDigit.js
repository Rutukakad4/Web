let userInput = prompt("Enter a number to calculate the sum of its digits:");

let number = Math.abs(parseInt(userInput)); // Using Math.abs to handle negative numbers

let sum = 0;

do {
    sum += number % 10;
    
    number = Math.floor(number / 10);
} while (number > 0);

console.log("The sum of the digits is:", sum);
