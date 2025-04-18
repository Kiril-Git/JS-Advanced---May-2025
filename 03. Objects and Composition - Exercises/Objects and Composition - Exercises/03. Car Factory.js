function assembleCar (inputObj) {


    function estimateEngine (power) {
        let engine = {}

        if (power <= 90) {
            engine.power = 90
            engine.volume = 1800
        }
        else if (power <= 120) {
            engine.power = 120
            engine.volume = 2400
        }
        else if (power > 120) {
            engine.power = 200
            engine.volume = 3500
        }
        return engine;
    }

    let carriage = {
        type: inputObj.carriage,
        color: inputObj.color
    }

    let wheelSize = Math.floor(inputObj.wheelsize)
    if (wheelSize % 2 === 0)    wheelSize -= 1
    let wheels = [wheelSize, wheelSize, wheelSize, wheelSize]


    // - - - Main function - - -

    let car = {}

    car.model = inputObj.model
    car.engine = estimateEngine(inputObj.power)
    car.carriage = carriage
    car.wheels = wheels


    return car
}


console.log(assembleCar({ model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }
))






// output:             {
//                         model: 'VW Golf II',
//                             engine: { power: 90, volume: 1800 },
//                         carriage: { type: 'hatchback', color: 'blue' },
//                         wheels: [ 13, 13, 13, 13 ]
//                     }

//
