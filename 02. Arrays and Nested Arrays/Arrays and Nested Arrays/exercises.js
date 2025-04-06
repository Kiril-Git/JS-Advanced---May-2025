function arrSorting(inputArr) {

    inputArr.sort((a, b) => a - b);


    let increasedBy1 = inputArr.map(el => el + 1)

    return increasedBy1.forEach((el, i) => console.log(i + ' -> ' + el));
}

console.log(arrSorting([3, 19, 14, 7, 2, 19, 6]))




// output:             [ 7, 14, 19, 19 ]

//