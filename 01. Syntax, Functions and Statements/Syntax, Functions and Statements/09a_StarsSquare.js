function printStarsSquare(inputNum) {


    let starLine = '* '.repeat(inputNum).trim()

    for (let i = 1; i <= inputNum; i++) {

        console.log(starLine)
    }

}

printStarsSquare(3)