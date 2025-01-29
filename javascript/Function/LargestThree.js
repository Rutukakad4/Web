function largestOfThree(a,b,c){
    if(a>b && a>c) return a;
    if(b>a && b>c) return b;
    return c;
}
console.log("Largest of(10,20,30):",largestOfThree(10,20,30));