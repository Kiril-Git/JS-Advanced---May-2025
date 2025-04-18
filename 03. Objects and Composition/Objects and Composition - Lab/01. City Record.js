function createObj(cityName, cityPopulation, cityTreasury) {


    const city = {
        name: cityName,
        population: cityPopulation,
        treasury: cityTreasury
    }

    return city;
}

console.log(createObj('Tortuga', 7000, 15000))





// outcome:            { name: 'Tortuga', population: 7000, treasury: 15000 }

//