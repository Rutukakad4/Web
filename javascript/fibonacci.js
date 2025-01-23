function generateFibonacci(n) {
    let fibSequence = [0, 1]; 

    for (let i = 2; i < n; i++) {
        let nextTerm = fibSequence[i - 1] + fibSequence[i - 2];
        fibSequence.push(nextTerm);
    }

    return fibSequence.slice(0, n); 
}

let N = prompt("Enter the number of terms for Fibonacci sequence:");
N = Number(N);

if (N > 0) {
    let result = generateFibonacci(N);
    console.log("Fibonacci sequence up to " + N + " terms: " + result.join(", "));
} else {
    console.log("Please enter a valid number greater than 0.");
}
