// This function calculates and returns the demerit points based on the speed of a car.
function calculateDemeritPoints(speed) {
    // Defines the speed limit and the rate at which demerit points are given.
    const speedLimit = 70;
    const speedPerDemeritPoint = 5;

    // Checks if the car's speed is within the speed limit.
    if (speed <= speedLimit) {
        return "Ok"; // If within the limit, return "Ok."
    }

    // Calculates the number of demerit points based on how much the speed exceeds the limit.
    const demeritPoints = Math.floor((speed - speedLimit) / speedPerDemeritPoint);

    // Checks if the number of demerit points exceeds or is equals to 12, which results in a license suspension.
    if (demeritPoints >= 12) {
        return "License suspended"; // If it is 12 or more points, return "License suspended."
    }

    // If the speed exceeds the limit but does not reach the suspension threshold, return the number of points.
    return `Points: ${demeritPoints}`;
}


module.exports = calculateDemeritPoints;
