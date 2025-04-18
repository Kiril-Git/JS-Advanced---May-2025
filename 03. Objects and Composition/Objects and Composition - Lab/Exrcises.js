function createObj(cityName, cityPopulation, cityTreasury) {


    const city = {
        name: cityName,
        population: cityPopulation,
        treasury: cityTreasury
    }


    return city;
}

console.log(createObj('Tortuga', 7000, 15000))

console.log('end ' + 1)

const name = 'cook'

const phonebook = {
    'Donga': '23',
    'Buzema': '23',
    [name]: 'just 15'
}

console.log(phonebook);

console.log('end ' + 2)


let count = 5

const parser = {
    increment() {count++},
    decrement() {count--},
    reset() {count = 0}
}

const  commands = ['increment', 'increment', 'increment', 'decrement',  'reset', 'increment'];

for (let el of commands) {
    parser[el]()
    console.log(el, ' -> ', count)
}

console.log(count += 40 / 100 * count)