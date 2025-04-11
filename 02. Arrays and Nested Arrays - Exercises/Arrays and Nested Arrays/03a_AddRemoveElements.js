function addRemoveElements(inputArr) {



    let newArr = [];

    inputArr.forEach((el, index) => {
        el === 'add' ? newArr.push(index + 1) : newArr.pop();
    });




    console.log(newArr.length ? newArr.join('\n') : 'Empty');
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