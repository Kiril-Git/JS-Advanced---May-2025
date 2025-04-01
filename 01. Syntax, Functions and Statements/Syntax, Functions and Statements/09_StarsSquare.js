function printStarsSquare(inputNum) {

    for (let i = 1; i <= inputNum; i++) {

        let stars = []

        for (let j = 1; j <= inputNum; j++) {

            stars.push('*')
        }

        console.log(stars.join(' '))
    }

}

printStarsSquare(3)