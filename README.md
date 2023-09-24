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
1. Create a file named `grading.js` and copy the provided code into it.
2. In your main program (e.g., `index.js`), require `grading.js`.
3. Call the `getGrade()` function with the student's marks as input.

Example:
```javascript
const getGrade = require('./grading.js');

const studentMarks = 85;
const grade = getGrade(studentMarks);
console.log(`Student Grade: ${grade}`);
```

---

# Speed Detection Program

## Description
The Speed Detection Program is a tool to determine if a car is driving within the speed limit. It takes an input of the car's speed and calculates demerit points based on the following criteria:
- "Ok" if the speed is 70 km/h or less.
- 1 demerit point for every 5 km/h above the speed limit (70 km/h).
- "License suspended" if the driver accumulates 12 or more demerit points.

## How to Use
1. Create a file named `speeddetector.js` and copy the provided code into it.
2. In your main program (e.g., `index.js`), require `speeddetector.js`.
3. Call the `calculateDemeritPoints()` function with the car's speed as input.

Example:
```javascript
const calculateDemeritPoints = require('./speeddetector.js');

const carSpeed = 80;
const points = calculateDemeritPoints(carSpeed);
console.log(points);
```

---

# Salary Calculation Program

## Description
The Salary Calculation Program computes an individual's net salary based on their basic salary and benefits. It also calculates payee (tax), NHIF deductions, NSSF deductions, gross salary, and net salary using specific rates and rules.

## How to Use
1. Create a file named `salary.js` and copy the provided code into it.
2. In your main program (e.g., `index.js`), require `salary.js`.
3. Call the `calculateNetSalary()` function with the individual's basic salary and benefits as input.

Please note: You need to define NHIF rates based on income in the `salary.js` file to complete this program. These rates should be added to the `NHIF_RATES` array according to your country's regulations.

Example:
```javascript
const calculateNetSalary = require('./salary.js');

const basicSalary = 50000;
const benefits = 10000;

const result = calculateNetSalary(basicSalary, benefits);
console.log("Gross Salary:", result.grossSalary);
console.log("KRA Tax:", result.kraTax);
console.log("NHIF Deduction:", result.nhifDeduction);
console.log("NSSF Deduction (Employee):", result.nssfDeductionEmployee);
console.log("Total Deduction:", result.totalDeduction);
console.log("Net Salary:", result.netSalary);
```

---

Feel free to modify and use these programs in your projects as needed.
