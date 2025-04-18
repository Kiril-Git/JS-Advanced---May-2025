function assembleProductList (inputArr) {


    let productList = {}

    for (let el of inputArr) {

        let [productName, price] = el.split(' : ')
        price = Number(price)

        let key = productName[0]

        if (!productList[key]) {
            productList[key] = []
        }
        productList[key].push({productName, price})
    }



    const sortedKeys = Object.keys(productList).sort()

    for (let key of sortedKeys) {
        console.log(key)

        const sortedProductList = productList[key]
            .sort((a, b) => a.productName.localeCompare(b.productName))

        for (let { productName, price } of sortedProductList) {
            console.log(`  ${productName}: ${price}`)
        }
    }
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