function findCheapest(inputArr) {


    let products = {}

    for (let el of inputArr) {

        let [town, product, price] = el.split(' | ')
        price = Number(price)

        if(!products[product]){
            products[product] = {price, town}
        }
        else {
            if(price < products[product].price){
                products[product] = {price, town}
            }
        }
    }

    Object.entries(products).forEach(([key, values]) => {
        console.log(`${key} -> ${values.price} (${values.town})`)
    })
}

findCheapest(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
)






// output:         Sample Product -> 1000 (Sample Town)
//                 Orange -> 2 (Sample Town)
//                 Peach -> 1 (Sample Town)
//                 Burger -> 10 (New York)

//
