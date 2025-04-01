function calculator(firstN, secondN, operator) {

    let result = 0

    switch(operator) {

        case '+':
            result = firstN + secondN
            break

        case '-':
            result = firstN - secondN
            break

        case '*':
            result = firstN * secondN
            break

        case '/':
            result = firstN / secondN
            break

        case '%':
            result = firstN % secondN
            break

        case '**':
            result = firstN ** secondN
            break
    }

    console.log(result)
}

calculator(5, 2, '%')