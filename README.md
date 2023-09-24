# Code Challenge

# Grading Program

## Description
The Grading Program is designed to help you determine a student's grade based on their marks. It takes an input of student marks (ranging from 0 to 100) and gives a grade according to the following criteria:
- A: Marks greater than 79
- B: Marks between 60 and 79 (inclusive)
- C: Marks between 50 and 59 (inclusive)
- D: Marks between 40 and 49 (inclusive)
- E: Marks less than 40

## How to Use
1. Create a file named `index.js` and copy the provided code into it.
2. Create a file named `grading.js`.
3. In your main program (e.g., `index.js`), require `grading.js`.
4. Call the `getGrade()` function with the student's marks as input.

Example:
```javascript
const readline = require('readline');
const getGrade = require("./grading");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the student's mark (between 0 and 100): ", (marks) => {
  console.log(getGrade(marks));
  rl.close();
});
```

---

# Speed Detection Program

## Description
The Speed Detection Program determines if a car is driving within the speed limit. It takes an input of the car's speed and calculates demerit points based on the following criteria:
- "OK" if the speed is 70 km/h or less.
- 1 demerit point for every 5 km/h above the speed limit (70 km/h).
- "License suspended" if the driver accumulates 12 or more demerit points.

## How to Use
1. Create a file named `index.js` and copy the provided code into it.
2. Create a file named `speeddetector.js`.
3. In your main program (e.g., `index.js`), require `speeddetector.js`.
4. Call the `calculateDemeritPoints()` function with the car's speed as input.

Example:
```javascript
const readline = require('readline');
const calculateDemeritPoints = require('./speeddetector.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the speed of the car: ", (speed) => {
    console.log(calculateDemeritPoints(speed));
    rl.close();
});
```

---

# Salary Calculation Program

## Description
The Salary Calculation Program computes an individual's net salary based on their basic salary and benefits. It also calculates payee (tax), NHIF deductions, NSSF deductions, and net salary using specific rates and rules.

## How to Use
1. Create a file named `index.js` and copy the provided code into it.
2. Create a file named `salary.js`.
3. In your main program (e.g., `index.js`), require `salary.js`.
4. Call the `calculateNetSalary()` function with the individual's basic salary and benefits as input.

Please note: You need to define NHIF rates based on income in the `salary.js' file to complete this program. These rates should be added to the `nhifRate` array according to your country's regulations.

Example:
```javascript
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

```

---

Feel free to use the above program codes for your practice sessions.
