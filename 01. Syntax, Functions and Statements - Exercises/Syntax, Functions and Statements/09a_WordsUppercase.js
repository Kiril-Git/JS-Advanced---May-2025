function regFun(inputStr) {

    

    let words = inputStr
        .match(/\w+/g)
        .map(word => word.toUpperCase());

    console.log(words.join(', '));
}


regFun('Hi, how are you?')



// output:         HI, HOW, ARE, YOU

//