function identifySpeed(speed, zone) {

    const MOTORWAY_SPEED_LIMIT = 130;
    const INTERSTATE_SPEED_LIMIT = 90;
    const CITY_SPEED_LIMIT = 50;
    const RESIDENTIAL_SPEED_LIMIT = 20;

    let diff = 0
    let limit = 0

    switch (zone) {

        case 'motorway':
            diff = speed - MOTORWAY_SPEED_LIMIT
            limit = MOTORWAY_SPEED_LIMIT
            break

        case 'interstate':
            diff = speed - INTERSTATE_SPEED_LIMIT
            limit = INTERSTATE_SPEED_LIMIT
            break

        case 'city':
            diff = speed - CITY_SPEED_LIMIT
            limit = CITY_SPEED_LIMIT
            break

        case 'residential':
            diff = speed - RESIDENTIAL_SPEED_LIMIT
            limit = RESIDENTIAL_SPEED_LIMIT
            break
    }


    if (diff > 40) {
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - reckless driving`)
    }
    else if (diff > 20) {
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - excessive speeding`)
    }
    else if (diff > 0) {
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - speeding`)
    }
    else {
        console.log(`Driving ${speed} km/h in a ${limit} zone`)
    }
}

identifySpeed(21, 'residential')


// output:             The speed is 1 km/h faster than the allowed speed of 20 - speeding

//