function calculateAndAverage(N){
    let sum=0;
    for(let i=1; i<=N; i++)
    {
        let num= parseFloat(prompt(`Enter number ${i}:`));
        sum+=num;
    }
    let average = sum/N;
    console.log("Sum of the numbers:"+sum);
    console.log("Average of the numbers:"+average);
}
let N=parseInt(prompt("How many numbers do you want to enter"));
calculateAndAverage(N);