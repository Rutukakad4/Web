let age=parseInt(prompt("Enter age"));
let isCitizen=prompt("Are you a citizen(true.false)?")=="true";

let canVote=(age>=18)&& isCitizen;
console.log("Eligible to vote",canVote);