function twoCriteriaSort(inputArr) {






    let sorted = inputArr.sort((a, b) => a.length - b.length || a.localeCompare(b))

    console.log(sorted.join('\n'));
}

twoCriteriaSort(['alpha', 'beta', 'gamma'])



// output:             beta
//                     alpha
//                     gamma

//
