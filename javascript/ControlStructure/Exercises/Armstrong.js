function isArmstrongNumber(num) {
    let digits = num.toString().split('');
    let numDigits = digits.length;
    let sum = 0;

    for (let i = 0; i < numDigits; i++) {
        sum += Math.pow(parseInt(digits[i]), numDigits);
    }

    return sum === num;
}

let num = parseInt(prompt("Enter a number to check if it's an Armstrong number:"), 10);

if (!isNaN(num) && num >= 0) {
    if (isArmstrongNumber(num)) {
        console.log(num + " is an Armstrong number.");
    } else {
        console.log(num + " is not an Armstrong number.");
    }
} else {
    console.log("Please enter a valid positive number.");
}
