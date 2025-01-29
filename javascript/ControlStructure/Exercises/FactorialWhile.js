function factorial(num){
    let result=1;
    if(num<0){
        return "Factorial is not defined for negative numbers"
    }
    while(num>1){
        result*=num;
        num--;
    }
    return result;

}
let number=5;
let fact=factorial(number);
console.log("Factorial of"+number+"is"+fact);