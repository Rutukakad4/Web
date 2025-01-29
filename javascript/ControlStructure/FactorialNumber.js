let number = 5;
let factorial =1;

for(let i=number; i>0;i--){
    factorial *=i;
}
console.log(`The factorial of${number} is ${factorial}`);
if(factorial<10){
    console.log("The factorial is small");
}else if(factorial>=10 && factorial<=100){
    console.log("The factorial is moderate");
}else{
    console.log("The factorial is large");
}