function arrSorting(inputArr) {

    inputArr.sort((a, b) => a - b);


    

    return inputArr.slice(0, 2)
}

console.log(arrSorting([30, 15, 50, 5]))




// output:             [ 5, 15 ]

//