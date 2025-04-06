function nestedArrIter(inputArr) {


    let counter = 0;

    for (let i = 0; i < inputArr.length -1; i++) {
        for (let j = 0; j < inputArr[i].length; j++) {

            let temp = inputArr[i][j];
            let temp2 = inputArr[i +1][j];

            if (temp === temp2) {
                counter++;
            }
        }
    }

    for (let i = 0; i < inputArr.length; i++) {
        for (let j = 0; j < inputArr[i].length -1; j++) {

            let temp = inputArr[i][j];
            let temp2 = inputArr[i][j +1];

            if (temp === temp2) {
                counter++;
            }
        }
    }

    return counter;
}

console.log(nestedArrIter(  [['test', 'yes', 'yo', 'yo'],
                                    ['well', 'done', 'yo', '6'],
                                    ['not', 'done', '5', '5']]
))



// output:             4

//