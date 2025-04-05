function identifyDiffNums(nums) {

    nums = nums.toString()
    let sum = 0
    let firstNum = nums[0]
    let equalNum = true

    for (let el of nums) {
        if (el !== firstNum) {
            equalNum = false
        }
        sum += +el
    }
    console.log(equalNum)
    console.log(sum);
}

identifyDiffNums(2222222)



// output:             true
//                     14

//
