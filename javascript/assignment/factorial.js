let num = prompt("Enter a number to calculate its factorial:");

num = Number(num);
let factorial = 1;

if (num < 0) {
    console.log("Please enter a positive number.");
} else {
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    console.log("The factorial of " + num + " is: " + factorial);
}
