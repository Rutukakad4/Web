let num = prompt("Enter a number to generate its multiplication table:");

num = Number(num);

if (!isNaN(num)) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
} else {
    console.log("Please enter a valid number.");
}
