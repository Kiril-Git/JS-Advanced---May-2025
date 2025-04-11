function sumMatrixDiagonals(inputArr) {

    function fillMatrix(matrix, sum) {

        for (let i = 0; i < matrix.length; i++) {
            let ind = matrix[i].length  -i -1

            for (let j = 0; j < matrix[i].length; j++) {
                if (j !== i && j !== ind) {
                    matrix[i][j] = sum
                }
            }
        }
        return matrix
    }



    let numsMatrix = inputArr.map(row => row.split(' ').map(Number))
    let sumR = 0
    let leftSum = 0

    for (let i = 0; i < numsMatrix.length; i++) {
        let ind = numsMatrix[i].length  -i -1

        let tempR = numsMatrix[i][i]
        let leftTemp = numsMatrix[i][ind]

        sumR += tempR
        leftSum += leftTemp
    }

    if (sumR === leftSum) {
        fillMatrix(numsMatrix, sumR).forEach(row => console.log(row.join(' ')))
    }
    else {
        numsMatrix.forEach(row => console.log(row.join(' ')))
    }


}

sumMatrixDiagonals(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
)





// output:                  5 15 15 15 1
//                          15 4 15 2 15
//                          15 15 3 15 15
//                          15 4 15 2 15
//                          5 15 15 15 1