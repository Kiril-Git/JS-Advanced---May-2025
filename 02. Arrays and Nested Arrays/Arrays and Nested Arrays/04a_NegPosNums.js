function signSorting(inputArr) {



    const negatives = inputArr.filter(x => x < 0);
    const nonNegatives = inputArr.filter(x => x >= 0);
    const sortedArr = [...negatives, ...nonNegatives];

    console.log(sortedArr.join('\n'));
}

signSorting([7, -2, 8, 9])





// output:         -2
//                  7
//                  8
//                  9

//
