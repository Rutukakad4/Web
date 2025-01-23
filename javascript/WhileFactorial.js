function calculateFactorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    }

    let factorial = 1;

    while (n > 1) {
        factorial *= n;
        n--;
    }

    return factorial;
}

let num = prompt("Enter a number to calculate its factorial:");
num = Number(num);

if (num >= 0) {
    let result = calculateFactorial(num);
    console.log("Factorial of " + num + " is: " + result);
} else {
    console.log("Please enter a valid non-negative number.");
}
