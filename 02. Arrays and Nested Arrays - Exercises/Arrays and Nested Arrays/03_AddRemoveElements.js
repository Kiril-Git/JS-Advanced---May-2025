function addRemoveElements  (inputArr) {


    let newArr = []
    for (let i = 0; i < inputArr.length; i++) {

        inputArr[i] === 'add' ? newArr.push(i +1) : newArr.pop()
    }




    if (newArr.length === 0) newArr.push('Empty')
    console.log(newArr.join('\n'));
}

addRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']
)




// output:             1
//                     4
//                     5

//