function sumOfArray(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log("Sum of[1,2,3,4,5]:",sumOfArray([1,2,3,4,5]));