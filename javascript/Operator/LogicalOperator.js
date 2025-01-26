let mathScore = parseFloat(prompt("Enter Math score:"));
let scienceScore  = parseFloat(prompt("Enter science score"));

let isEligible = (mathScore>=90) && (scienceScore>=85);
console.log("Scholarship Eligibility:",isEligible);