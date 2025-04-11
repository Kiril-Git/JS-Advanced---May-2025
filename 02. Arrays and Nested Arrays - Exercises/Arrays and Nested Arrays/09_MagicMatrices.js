function  addElements (inputArr) {

    let rowSum = inputArr[0].reduce((a, b) => a + b);
    let magical = true

    for (let i = 0; i < inputArr.length; i++) {

        if (inputArr[i].reduce((a, b) => a + b) !== rowSum) {
            magical = false;
            break
        }

        let column = 0
        for (let j = 0; j < inputArr.length; j++) {
            column += inputArr[j][i]
        }
        if (column !== rowSum) {
            magical = false
            break
        }
    }


    console.log(magical);
}

addElements([[4, 5, 6],
                    [6, 5, 4],
                    [5, 5, 5]]
)




// output:             true

//