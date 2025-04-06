function nestedArrIter(inputArr) {


    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < inputArr.length; i++) {
        for (let j = i; j < inputArr[i].length; j++) {

            let temp = inputArr[i][j];
            leftSum += temp;
            break
        }
    }


    for (let i = 0; i < inputArr.length; i++) {
        for (let j = inputArr[i].length -1 -i; j >= 0; j--) {

            let temp = inputArr[i][j];
            rightSum += temp;
            break
        }

    }

    console.log(leftSum + ' ' + rightSum);
}

nestedArrIter([ [3, 5, 17],
                        [-1, 7, 14],
                        [1, -8, 89]]
)



// output:             99 25

//