function printEvenPosition(inputArr) {


    let posArr = []

    for (let i = 0; i < inputArr.length; i +=2) {

       posArr.push(inputArr[i]);
    }


    console.log(posArr.join(' '));
}

printEvenPosition(['20', '30', '40', '50', '60'])




// output:             20 40 60

//