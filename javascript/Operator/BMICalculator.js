let weight=parseFloat(prompt("Enter weight(kg):"));
let height=parseFloat(prompt("Enter height(m):"));

let bmi=weight/(height*height);
console.log("BMI:",bmi);

if(bmi<18.5){
    console.log("Category:Underweight");
}else if(bmi>=18.5 && bmi < 24.9){
    console.log("category: Normal weight");
}else if(bmi>=25 && bmi <29.9){
    console.log("category:Overweight");
}else{
    console.log("category:obesity");
}