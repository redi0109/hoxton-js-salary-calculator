const grossSalary = 500;
const pensionContribution = grossSalary*0.05;
const taxableAmount = grossSalary - pensionContribution;
const taxUnder80Euro = 0;
const taxunder250Euro = (250 - 80) *0.04;
const taxunder450Euro = (450 - 250) *0.08 + taxunder250Euro;
const taxover450Euro = ( taxableAmount - 450) *0.1 + taxunder450Euro;
const netSalary = taxableAmount - taxover450Euro;
console.log(`Gross salary: ${netSalary}`);
