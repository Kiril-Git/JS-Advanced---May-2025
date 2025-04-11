function  extractIncrNums (inputArr) {


    let newArr = [inputArr[0]]

    for (let i = 1; i < inputArr.length; i++) {
        if (newArr.at(-1) <= inputArr[i]) newArr.push(inputArr[i]);

    }


    return newArr
}

console.log(extractIncrNums([1, 3, 8, 4, 10, 12, 3, 2, 24]))




// output:                  [ 1, 3, 8, 10, 12, 24 ]

//