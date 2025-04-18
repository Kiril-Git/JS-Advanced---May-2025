function composeObj (inputArr) {


    let productList = {}

    for (let i = 0; i < inputArr.length; i +=2) {

        let product = inputArr[i];
        let cals = +inputArr[i +1];

        productList[product] = cals;
    }

    console.log(productList);
}

composeObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])






// output:                 { Yoghurt: 48, Rise: 138, Apple: 52 }

//