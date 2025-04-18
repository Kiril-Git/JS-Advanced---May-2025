function createObj(cityName, cityPopulation, cityTreasury) {


    const city = {
        name: cityName,
        population: cityPopulation,
        treasury: cityTreasury,
        taxRate: 10,

        collectTaxes() {
            this.treasury = Math.floor(this.treasury += this.population * this.taxRate)
        },
        applyGrowth(percentage) {
            this.population = Math.floor(this.population + this.population * percentage / 100)
        },
        applyRecession(percentage) {
            this.treasury = Math.floor(this.treasury - this.treasury * percentage / 100)
        }

}

    return city;
}

const city = createObj('Tortuga', 7000, 15000);

// ✅ Testing methods (the "second input" you're referring to)
city.collectTaxes();
console.log(city.treasury); // ➤ 85000

city.applyGrowth(5);
console.log(city.population); // ➤ 7350

city.applyRecession(10);
console.log(city.treasury); // ➤ 76500




// outcome:            { name: 'Tortuga', population: 7000, treasury: 15000 }

//