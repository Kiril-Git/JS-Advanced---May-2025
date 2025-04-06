function  arrManipulations (inputArr, startStr, endStr) {


    let ind = inputArr.indexOf(startStr);
    let endInd = inputArr.indexOf(endStr);




    return  inputArr.slice(ind, endInd +1);
}

console.log(arrManipulations(['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
))



// output:               [ 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie' ]

//