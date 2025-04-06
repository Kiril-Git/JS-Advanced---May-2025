function fibonacciStyleSeq(arrLen, num) {


    let seqArr = [1];

    for (let i = 1; i < arrLen; i++) {

        let start = Math.max(0, i - num);
        let sum = seqArr.slice(start, i).reduce((a, b) => a + b, 0);

        seqArr.push(sum);
    }

    return seqArr;
}

console.log(fibonacciStyleSeq(8, 2));





//  output           [1, 1, 2, 3, 5, 8, 13, 21]

//
