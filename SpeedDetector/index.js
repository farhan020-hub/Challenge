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
