function identifyGCD (num1, num2) {

    let iters = num1 < num2 ? num1 : num2;

    for (let i = iters; i > 0; i--) {

        if (num1 % i === 0 && num2 % i === 0) {
            console.log(i);
            break
        }
    }
}

identifyGCD(2154, 458)




// output:         2

//
