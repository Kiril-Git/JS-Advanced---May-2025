function assembleProductList (inputArr) {


    let productList = []

    for (let el of inputArr) {

        let [productName, price] = el.split(' : ')
        price = Number(price)

        productList.push([productName, price])
    }


        productList.sort((a, b) => a[0].localeCompare(b[0]))

        let initial = ''
        productList.forEach(el => {

            if (initial !== el[0][0]) {
                initial = el[0][0]
                console.log(initial)
            }
            console.log(`  ${el[0]}: ${el[1]}`)
        })
}


assembleProductList (['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)




// output:                 A
//                             Anti-Bug Spray: 15
//                             Apple: 1.25
//                             Appricot: 20.4
//                         B
//                             Boiler: 300
//                         D
//                             Deodorant: 10
//                         F
//                             Fridge: 1500
//                         T
//                             T-Shirt: 10
//                             TV: 1499
//

//