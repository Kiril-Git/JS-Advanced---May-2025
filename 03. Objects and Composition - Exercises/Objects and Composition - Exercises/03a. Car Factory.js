function assembleCar(input) {


    const engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }
    ];

    const engine = engines.find(e => e.power >= input.power);

    const carriage = {
        type: input.carriage,
        color: input.color
    };

    const wheelSize = (Math.floor(input.wheelsize) % 2 === 0)
        ? Math.floor(input.wheelsize) - 1
        : Math.floor(input.wheelsize);
    const wheels = new Array(4).fill(wheelSize);

    return {
        model: input.model,
        engine,
        carriage,
        wheels
    };
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
