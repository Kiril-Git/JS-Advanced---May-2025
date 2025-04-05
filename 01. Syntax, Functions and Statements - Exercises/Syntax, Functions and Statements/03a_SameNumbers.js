function identifyDiffNums(nums) {


    nums = nums.toString().split('')

    let sum = nums.reduce((acc, el) => acc + +el, 0)
    let equalNum = nums.every(el => el === nums[0])



    console.log(equalNum)
    console.log(sum);
}

identifyDiffNums(2222222)



// output:             true
//                     14

//
  
