function aggregateEls(inputArr) {


    const aggregate = (arr, initVal, func) => {
        let val = initVal;
        for (let el of arr) {
            val = func(val, el);
        }
        return val;
    };

    console.log(aggregate(inputArr, 0, (a, b) => a + b));
    console.log(aggregate(inputArr, 0, (a, b) => a + 1 / b));
    console.log(aggregate(inputArr, '', (a, b) => a + b));
}


aggregateEls([2, 4, 8, 16])




// Output:                  30
//                          0.9375
//                          24816

//