function calculateWalkTime(steps, stepLength, speedKmH) {
    // Total distance in meters
    const distanceMeters = steps * stepLength;

    // Total speed in m/s
    const speedMps = speedKmH * 1000 / 3600;

    // Total walking time in seconds
    let timeSeconds = distanceMeters / speedMps;

    // Add breaks: 1 minute (60 sec) every 500 meters
    const breaks = Math.floor(distanceMeters / 500);
    timeSeconds += breaks * 60;

    // Convert to hours, minutes, seconds
    const hours = Math.floor(timeSeconds / 3600);
    timeSeconds %= 3600;

    const minutes = Math.floor(timeSeconds / 60);
    const seconds = Math.round(timeSeconds % 60);

    // Format with leading zeros
    const formatted = [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        seconds.toString().padStart(2, '0')
    ].join(':');

    console.log(formatted);
}

calculateWalkTime(2564, 0.70, 5.5);




// output:             00:22:35

//
