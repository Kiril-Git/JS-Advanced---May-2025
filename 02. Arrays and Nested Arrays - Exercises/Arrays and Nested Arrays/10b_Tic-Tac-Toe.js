function TicTacToe (inputArr) {


    function wonGame (dashboard) {
        let match = false

        if (dashboard.some(row => row.every(el => el === row[0] && el !== false))) {
            match = true
        }
        if (
                dashboard[0][0] === dashboard[1][0] && dashboard[1][0] === dashboard[2][0] && dashboard[0][0] !== false
            ||  dashboard[0][1] === dashboard[1][1] && dashboard[1][1] === dashboard[2][1] && dashboard[0][1] !== false
            ||  dashboard[0][2] === dashboard[1][2] && dashboard[1][2] === dashboard[2][2] && dashboard[0][2] !== false
        ) {
            match = true
        }
        if (
            dashboard[0][0] === dashboard[1][1] && dashboard[0][0] === dashboard[2][2] && dashboard[0][0] !== false
            || dashboard[0][2] === dashboard[1][1] && dashboard[0][2] === dashboard[2][0] && dashboard[0][2] !== false
        ){
            match = true
        }
        return match
    }



    let dashboard = [[false, false, false],
                            [false, false, false],
                            [false, false, false]]

    let winner = false
    let players = ['X', 'O']
    let player = players.shift()
        players.push(player)

    let hasFreeFields = (matrix) => matrix.some((arr) => arr.some(value => value === false))

    for (let i = 0; i < inputArr.length && hasFreeFields(dashboard); i++) {

        let [row, cal] = inputArr[i].split(' ').map(Number)

        if (!dashboard[row][cal]) {
            dashboard[row][cal] = player;

            if (wonGame (dashboard)) {
                winner = true
                break
            }
            player = players.shift()
            players.push(player)
        }
        else {
                console.log("This place is already taken. Please choose another!")
        }
    }



    (winner) ? console.log(`Player ${player} wins!`) : console.log("The game ended! Nobody wins :(")

    dashboard.forEach(row => console.log(row.join('\t')))
}



TicTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]


)



// output:                 Player O wins!
//                         O       X       X
//                         X       O       X
//                         O       false   O

//
