

    const processOddPositions = inputArr => inputArr
                .filter((el, i) => i % 2)
                .map(el => el * 2)
                .reverse()
                .join(' ')




console.log(processOddPositions([10, 15, 20, 25]))



    // output:          50 30

    //