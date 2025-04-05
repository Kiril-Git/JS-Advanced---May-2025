function regFun (inputStr) {


    let regex = /\w+/g
    let matches = inputStr.matchAll(regex)

    let upperArr = []

    for (let el of matches) {
        upperArr.push(el[0].toUpperCase())
    }


    console.log(upperArr.join(', '))
}

regFun('Hi, how are you?')



// output:         HI, HOW, ARE, YOU

//