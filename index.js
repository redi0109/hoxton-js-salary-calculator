//  taxableAmount <= 80 
let grossSalary1 = 50;
const pensionContribution1 = grossSalary1*0.05;
const taxableAmount1 = grossSalary1 - pensionContribution1;
let taxUnder80Euro = 0;
let netSalary1=taxableAmount1;
console.log("This person's final pay is " + netSalary1 + " EUR");

//  80 < taxableAmount <= 250
let grossSalary2 = 200;
const pensionContribution2 = grossSalary2*0.05;
const taxableAmount2 = grossSalary2 - pensionContribution2;
let taxunder250Euro = (taxableAmount2 - 80) *0.04;
let netSalary2=taxableAmount2-taxunder250Euro
console.log("This person's final pay is " + netSalary2 + " EUR");

// 250 < taxableAmount <= 450
let grossSalary3 = 400;
const pensionContribution3 = grossSalary3*0.05;
const taxableAmount3 = grossSalary3 - pensionContribution3;
let taxunder450Euro = (taxableAmount3 - 250) *0.08 + (250-80)*0.04;
let netSalary3=taxableAmount3-taxunder450Euro;
console.log("This person's final pay is " + netSalary3 + " EUR");


// 450 < taxableAmount3
let grossSalary4 = 500;
const pensionContribution4 = grossSalary4*0.05;
const taxableAmount4 = grossSalary4 - pensionContribution4;
let taxover450Euro = (taxableAmount4 - 450)*0.1 + (450 - 250) *0.08 + (250-80)*0.04;
let netSalary4=taxableAmount4-taxover450Euro
console.log("This person's final pay is " + netSalary4 + " EUR");





