function executePostfixNotation (inputArr) {


    // let ind = inputArr.findIndex(el => !String(el).match(/^\d$/))
    let digiArr = []

    while ( inputArr.length > 0) {

        let ch = inputArr.shift()

        if (isNaN(ch)) {

            if (digiArr.length < 2) {
                console.log("Error: not enough operands!")
                return
            }

            let secondNum = digiArr.pop()
            let firstNum = digiArr.pop()

            switch (ch) {
                case '+':
                    digiArr.push(firstNum + secondNum);
                    break
                case '-':
                    digiArr.push(firstNum - secondNum);
                    break
                case '*':
                    digiArr.push(firstNum * secondNum);
                    break
                case '/':
                    digiArr.push(firstNum / secondNum);
                    break
            }
        }
        else {
            digiArr.push(ch)
        }

        // ch = inputArr.shift()
    }

    if (digiArr.length >= 2) {
        console.log("Error: too many operands!")
    }
    else{
        console.log(digiArr[0])
    }

}

executePostfixNotation([5, 3, 4,   '*', '-'])






// output:                -7

//