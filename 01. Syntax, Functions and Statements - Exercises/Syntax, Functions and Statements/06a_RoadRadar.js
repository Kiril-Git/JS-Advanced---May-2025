function identifySpeed(speed, zone) {
    const SPEED_LIMITS = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    };

    const limit = SPEED_LIMITS[zone];
    const diff = speed - limit;

    if (diff <= 0) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else {
        let status = '';

        if (diff <= 20) {
            status = 'speeding';
        } else if (diff <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }

        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}

identifySpeed(21, 'residential');




// output:             The speed is 1 km/h faster than the allowed speed of 20 - speeding

//
