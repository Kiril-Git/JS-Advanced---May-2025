function sortNums (inputArr) {


    inputArr.sort((a, b) => a - b);
    let sortedArr = [];

    while (inputArr.length > 0)  {

        let smallest = inputArr.shift()
        sortedArr.push(smallest)

        if (inputArr.length > 0) {
            let biggest = inputArr.pop()
            sortedArr.push(biggest)
        }

    }


    return sortedArr
}

console.log(sortNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))



// output:                 [-3, 65,  1, 63,  3, 56, 18, 52, 31, 48]

//
