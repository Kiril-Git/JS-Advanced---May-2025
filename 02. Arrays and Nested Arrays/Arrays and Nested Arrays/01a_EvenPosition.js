function printEvenPosition(inputArr) {





    // The _ means “I don't care about the actual value in the filter, just the index”



    console.log(inputArr.filter((_, i) => i % 2 === 0).join(' '));
}

printEvenPosition(['20', '30', '40', '50', '60'])





// output:             20 40 60

//