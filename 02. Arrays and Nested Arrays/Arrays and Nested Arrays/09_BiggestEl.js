function nestedArrIter (inputArr) {


    let biggest = Number.MIN_SAFE_INTEGER

    for (let row of inputArr) {
        for (let el of row) {

            if (el > biggest) {
                biggest = el
            }
        }
    }

    return biggest
}

console.log(nestedArrIter([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]

))



// output:          33

//