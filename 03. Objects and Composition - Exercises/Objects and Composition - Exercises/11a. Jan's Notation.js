function executePostfixNotation(inputArr) {


    let stack = [];

    while (inputArr.length > 0) {

        let ch = inputArr.shift();

        if (typeof ch === 'number') {
            stack.push(ch);
        }
        else if (['+', '-', '*', '/'].includes(ch)) {

            if (stack.length < 2) {
                console.log("Error: not enough operands!");
                return;
            }

            let b = stack.pop();
            let a = stack.pop();

            switch (ch) {
                case '+': stack.push(a + b); break;
                case '-': stack.push(a - b); break;
                case '*': stack.push(a * b); break;
                case '/': stack.push(a / b); break;
            }
        } else {
            console.log("Error: invalid token!");
            return;
        }
    }

    if (stack.length === 1) {
        console.log(stack[0]);
    } else {
        console.log("Error: too many operands!");
    }
}

executePostfixNotation([5, 3, 4,   '*', '-'])





// output:                -7

//