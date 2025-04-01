function aggregateEls (inputArr) {


    let sum = inputArr.reduce((acc, el) => acc + el, 0);
    let invSum = inputArr.reduce((acc, el) => acc + 1/el, 0);

    console.log(sum);
    console.log(invSum);
    console.log(inputArr.join(''));


}

aggregateEls([2, 4, 8, 16])





// Output:                  30
//                          0.9375
//                          24816

//