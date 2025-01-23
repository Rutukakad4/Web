let str = prompt("Enter a string to count vowels and consonants:");

str = str.toLowerCase();

let vowels = 0;
let consonants = 0;

for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char >= 'a' && char <= 'z') {
        if ('aeiou'.includes(char)) {
            vowels++;
        } else {
            consonants++;
        }
    }
}

console.log("Vowels: " + vowels);
console.log("Consonants: " + consonants);
