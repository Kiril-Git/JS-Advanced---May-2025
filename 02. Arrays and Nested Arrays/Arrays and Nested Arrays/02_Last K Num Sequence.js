function fibonacciStyleSeq (arrLen, num) {


    let seqArr = [1]

    for (let i = 1; i < arrLen; i++) {

        let temp = 0

        for (let j = seqArr.length -1; j >= seqArr.length -num; j--) {

            temp += seqArr[j]
            if (j === 0) break
        }

        seqArr.push(temp)
    }
    return seqArr
}

console.log(fibonacciStyleSeq(8, 2))


//  output           [1, 1, 2, 3, 5, 8, 13, 21]

//
