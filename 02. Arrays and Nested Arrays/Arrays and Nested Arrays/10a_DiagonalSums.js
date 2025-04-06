function nestedArrIter(inputArr) {


    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < inputArr.length; i++) {

        leftSum += inputArr[i][i]
        rightSum += inputArr[i][inputArr.length -1 -i]

        }



    console.log(leftSum + ' ' + rightSum);
}

nestedArrIter([ [3, 5, 17],
                        [-1, 7, 14],
                        [1, -8, 89]]
)



// output:             99 25

//