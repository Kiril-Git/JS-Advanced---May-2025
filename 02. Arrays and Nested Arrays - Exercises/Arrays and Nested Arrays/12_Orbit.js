function numsOrbit(inputArr)

{
    let [width, height, y, x] = inputArr;
    let matrix = [];

    for (let row = 0; row < height; row++) {
        let currentRow = [];

        for (let col = 0; col < width; col++) {
            let value = Math.max(Math.abs(row - y), Math.abs(col - x)) + 1;
            currentRow.push(value);
        }

        matrix.push(currentRow);
    }

    matrix.forEach(row => console.log(row.join(' ')));
}


numsOrbit([5, 5, 0, 0])