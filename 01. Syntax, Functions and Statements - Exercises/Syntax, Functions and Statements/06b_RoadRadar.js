function identifySpeed(speed, zone) {
    const speedLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    };

    const limit = speedLimits[zone];
    const diff = speed - limit;

    const getStatus = (difference) => {
        if (difference <= 0) return `Driving ${speed} km/h in a ${limit} zone`;
        if (difference <= 20) return `The speed is ${difference} km/h faster than the allowed speed of ${limit} - speeding`;
        if (difference <= 40) return `The speed is ${difference} km/h faster than the allowed speed of ${limit} - excessive speeding`;
        return `The speed is ${difference} km/h faster than the allowed speed of ${limit} - reckless driving`;
    };

    console.log(getStatus(diff));
}

identifySpeed(21, 'residential');




// output:             The speed is 1 km/h faster than the allowed speed of 20 - speeding

//