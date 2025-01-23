let str = prompt("Enter a string to check if it's a palindrome:");

str = str.replace(/\s/g, '').toLowerCase();

let reversedStr = str.split('').reverse().join('');

if (str === reversedStr) {
    console.log(str + " is a palindrome.");
} else {
    console.log(str + " is not a palindrome.");
}
