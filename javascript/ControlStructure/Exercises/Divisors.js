function findDivisors(num) {
    let divisors = [];
    
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisors.push(i); 
        }
    }

    return divisors;
}

let number = parseInt(prompt("Enter a number to find its divisors:"), 10);

if (!isNaN(number) && number > 0) {
    let divisors = findDivisors(number);
    console.log("Divisors of " + number + ": " + divisors.join(", "));
} else {
    console.log("Please enter a valid positive number.");
}
