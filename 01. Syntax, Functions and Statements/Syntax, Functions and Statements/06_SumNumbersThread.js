function sumNums(firstN, secondN) {

    let sum = 0

    for (let i = +firstN; i <= +secondN; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumNums('-8', '20'))




// Output:                  174

//