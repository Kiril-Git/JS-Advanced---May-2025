function spiralMatrix(rows, cols) {


    let matrix = Array.from({ length: rows }, () => Array(cols).fill(0));

    let counter = 1;
    let top = 0;
    let bottom = rows - 1;
    let left = 0;
    let right = cols - 1;

    while (top <= bottom && left <= right) {
        // Left to Right
        for (let i = left; i <= right; i++) {
            matrix[top][i] = counter++;
        }
        top++;

        // Top to Bottom
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = counter++;
        }
        right--;

        // Right to Left
        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = counter++;
        }
        bottom--;

        // Bottom to Top
        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = counter++;
        }
        left++;
    }

    matrix.forEach(row => console.log(row.join(' ')));
}

spiralMatrix(5, 5)




// output:                 1 2 3 4 5
//                         16 17 18 19 6
//                         15 24 25 20 7
//                         14 23 22 21 8
//                         13 12 11 10 9

//
