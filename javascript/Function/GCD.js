function gcd(a,b){
    while(b!==0){
        let temp=b;
        b=a%b;
        a=temp;

    }
    return a;
}
console.log("GCD of 56 and 98:",gcd(56,98));
