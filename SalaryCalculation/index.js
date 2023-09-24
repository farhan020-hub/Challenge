const readline = require('readline');
const calculateNetSalary = require('./salary');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your basic salary: ", (basicSalary) => {
    rl.question("Enter your benefits: ", (benefits) => {
        const result = calculateNetSalary(parseFloat(basicSalary), parseFloat(benefits));
        
        console.log("Tax Amount:", result.taxAmount); // Display Tax Amount
        console.log("NHIF Deduction:", result.nhifDeduction); // Display NHIF Deduction
        console.log("NSSF Amount :", result.nssfDeduction); // Display NSSF Amount
        console.log("Total Deduction:", result.totalDeduction); // Display total deduction
        console.log("Net Salary:", result.netSalary); // Display Net Slary
        rl.close();
    });
});
