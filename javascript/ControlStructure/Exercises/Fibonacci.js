function generateFibonacci(n) {
    let fibonacci = [];
    
    if (n >= 1) fibonacci.push(0); 
    if (n >= 2) fibonacci.push(1);
    
    for (let i = 2; i < n; i++) {
        let nextTerm = fibonacci[i - 1] + fibonacci[i - 2];
        fibonacci.push(nextTerm);
    }
    
    return fibonacci;
}

let n = parseInt(prompt("Enter the number of terms for Fibonacci sequence:"), 10);

if (!isNaN(n) && n > 0) {
    let fibonacciSequence = generateFibonacci(n);
    console.log("Fibonacci sequence up to " + n + " terms: " + fibonacciSequence.join(", "));
} else {
    console.log("Please enter a valid positive number.");
}
