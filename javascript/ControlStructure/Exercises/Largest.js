let number1 = parseFloat(prompt("Enter the first number:"));
let number2 = parseFloat(prompt("Enter the second number:"));
let number3 = parseFloat(prompt("Enter the third number:"));

let largest;

if (number1 >= number2 && number1 >= number3) {
    largest = number1;
} else if (number2 >= number1 && number2 >= number3) {
    largest = number2;
} else {
    largest = number3;
}

console.log("The largest number is: " + largest);
