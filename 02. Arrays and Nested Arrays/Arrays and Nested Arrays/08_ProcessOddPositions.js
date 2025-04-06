function processOddPositions (inputArr) {



    let newArr = []

     inputArr.forEach((el, i) => {
        if (i % 2 !== 0) {
            newArr.push(el * 2)
        }
    })

    return newArr.reverse().join(' ')
}

console.log(processOddPositions([10, 15, 20, 25]))



// output:          50 30

//