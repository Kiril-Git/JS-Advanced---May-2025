function calculateWalkTime (kra4ki, kra4kaLen, speed) {

    let distance = kra4ki * kra4kaLen
    let breaks = Math.floor(distance / 500)
    distance /= 1000

    let totalMin = (distance / speed) * 60 + breaks
    let hours = Math.floor(totalMin / 60)
    totalMin -= hours * 60

    let totalSec = totalMin * 60
    let min = Math.floor(totalSec / 60)
    totalSec -= min * 60
    totalSec = totalSec.toFixed(0)

    hours = hours.toString().padStart(2, '0')
    min = min.toString().padStart(2, '0')
    let sec = totalSec.toString().padStart(2, '0')


    console.log(hours + ':' + min + ':' + sec);
}

calculateWalkTime(2564, 0.70, 5.5)




// output:             00:22:35

//