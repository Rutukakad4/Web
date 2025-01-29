function reversenumber(no){
    while(no!=0){
        let lastDigit=no%10;
        reversed=reversed*10+lastDigit;
        no=Math.floor(no/10);
    }
    return reversed;

}
let number=12345;
let reversenumber=reversenumber(number);
console.log("Reversed number:",reversenumber);