function sumOddEven(){
    let sumOdd=0;
    let sumEven=0;
    for(let i=1;i<=100;i++){
        if(i%2==0){
            sumEven+=i;
        }else{
            sumOdd+=i;
        }
    }
    console.log("Sum of odd numbers"+sumOdd);
    console.log("Sum of even numbers"+sumEven);
}
sumOddEven();