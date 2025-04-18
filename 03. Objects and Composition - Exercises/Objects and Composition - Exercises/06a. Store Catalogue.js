function assembleProductList (inputArr) {


    let productList = {}

    for (let el of inputArr) {

        let [productName, price] = el.split(' : ')
        price = Number(price)

        productList[productName] = price
    }



    const sortedList = Object.keys(productList)
        .sort((a, b) => a.localeCompare(b))

            let initial = ''
        sortedList.forEach(productName => {

            if (initial !== productName[0]) {
                initial = productName[0]
                console.log(initial)
            }
            console.log(`  ${productName}: ${productList[productName]}`)
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