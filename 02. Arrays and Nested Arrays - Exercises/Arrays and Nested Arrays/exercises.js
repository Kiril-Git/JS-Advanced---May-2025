function  addElements (inputArr) {


    let rowSum = inputArr[0].reduce((a, b) => a + b);
    let magical = true

    for (let i = 0; i < inputArr.length; i++) {
        let verticals = 0

        if (inputArr[i].reduce((a, b) => a + b) !== rowSum) {
            magical = false;
            break
        }

        for (let j = 0; j < inputArr.length; j++) {
            verticals += inputArr[j][i]
        }

        if (verticals !== rowSum) magical = false;

        if (!magical) break

    }


    console.log(magical);
}

addElements([[4, 5, 6],
                    [6, 5, 4],
                    [5, 5, 5]]
)


function numsOrbit(inputArr) {

    let [width, height, rows, cols] = inputArr

    let matrix = []
    let row = []

    for (let i = 1; i <= width; i++) {

        for (let j = 0; j < i; j++) {
            row.push(i)
        }
        for (let k = i +1; k <= height; k++) {
            row.push(k)
        }
        matrix.push(row);
        row = []
    }



    matrix.forEach(row => console.log(row.join(' ')))

}

numsOrbit([5, 5, 0, 0])