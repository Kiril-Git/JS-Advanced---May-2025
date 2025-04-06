function signSorting (inputArr) {


    let sortedArr = [];

    for (let el of inputArr) {

        if (+el < 0) {
            sortedArr.unshift(el);
        }
        else {
            sortedArr.push(el);
        }
    }

    console.log(sortedArr.join('\n'));
}

signSorting([7, -2, 8, 9])




// output:         -2
//                  7
//                  8
//                  9

//