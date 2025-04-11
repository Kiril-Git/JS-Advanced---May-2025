function addRemoveElements  (inputArr, iters) {


    for (let i = 0; i < iters; i++) {

        inputArr.unshift(inputArr.pop())
    }


    console.log(inputArr.join(' '));
}

addRemoveElements(['1', '2', '3', '4'], 2)




// output:             3 4 1 2

//
