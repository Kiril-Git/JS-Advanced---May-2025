function calcShopping (fruit, weight, price) {

    weight /= 1000
    let sum = weight * price

    console.log(`I need \$${sum.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
}

calcShopping('apple', 1563, 2.35);




// output:                 I need $3.67 to buy 1.56 kilograms apple.

//