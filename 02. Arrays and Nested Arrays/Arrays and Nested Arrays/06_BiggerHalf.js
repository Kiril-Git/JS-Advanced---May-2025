function arrSorting(inputArr) {

    inputArr.sort((a, b) => a - b);




    return inputArr.slice(inputArr.length /2)
}

console.log(arrSorting([3, 19, 14, 7, 2, 19, 6]))




// output:             [ 7, 14, 19, 19 ]

//