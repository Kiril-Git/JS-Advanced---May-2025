function jsonTask (input) {

    let data = JSON.parse(input);



    for (let el of data) {

        Object.keys(el).forEach((key) => {
            console.log(el[key]);
        })
    }

}

const jsonStr =  `[
        {
            "name": "Apple",
            "price": 1.25
        },
        {
            "name": "TV",
            "price": 1499
        }
    ]`


jsonTask(jsonStr);