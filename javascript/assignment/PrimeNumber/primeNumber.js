let num = prompt("Enter a number to check if it's prime:");

num = Number(num);

if (num <= 1) {
    console.log(num + " is not a prime number.");
} else {
    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num + " is a prime number.");
    } else {
        console.log(num + " is not a prime number.");
    }
}


