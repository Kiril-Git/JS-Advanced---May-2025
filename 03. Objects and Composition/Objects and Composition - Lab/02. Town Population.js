function createTownReg (inputArr) {


    const city = {}

    for (let el of inputArr) {
        let [name, population] = el.split(' <-> ')

        if (!city[name])         city[name] = 0

        city[name] += +population
    }


    Object.entries(city).forEach(([key, value]) => {
        console.log(key + ' : ' + value)
    })

}

createTownReg(
    ['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
)





// output:         Istanbul : 101000
//                 Honk Kong : 2100004
//                 Jerusalem : 2352344
//                 Mexico City : 23401925

//