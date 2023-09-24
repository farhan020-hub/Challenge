// This function calculates and returns a grade based on the input marks.
function getGrade(marks) {
    // Checks if the input marks is not a number or is outside the valid range.
    if (isNaN(marks) || marks < 0 || marks > 100) {
        return "Invalid input! Please enter a number between 0 and 100.";
    }

    // Determines the grade based on the marks.
    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    // Return the calculated grade.
    return `Grade is: ${grade}`;
}


module.exports = getGrade;
