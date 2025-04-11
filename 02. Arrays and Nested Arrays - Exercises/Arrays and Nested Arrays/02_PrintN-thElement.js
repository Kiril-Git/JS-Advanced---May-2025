function printNthElement (inputArr, stepLen) {



    let newArray = [];
    for (let i = 0; i < inputArr.length; i += stepLen) {

        newArray.push(inputArr[i]);
    }



    return newArray;
}

console.log(printNthElement(['5', '20', '31', '4', '20'], 2))





// output:             [ '5', '31', '20' ]

//