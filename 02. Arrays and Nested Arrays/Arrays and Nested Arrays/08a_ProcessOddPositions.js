function processOddPositions (inputArr) {


    inputArr = inputArr.filter((el, i) => i % 2)
                .map(el => el * 2)
                .reverse()
                .join(' ')


    return inputArr
}

console.log(processOddPositions([10, 15, 20, 25]))




// output:          50 30

//