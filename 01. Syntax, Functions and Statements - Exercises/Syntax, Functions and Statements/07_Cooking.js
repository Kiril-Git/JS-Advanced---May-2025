function mathOperation (pan, ...commands) {
    pan = +pan

    const operations = {

        chop: x => x / 2,
        dice: x => Math.sqrt(x),
        spice: x => x +1,
        bake: x => x * 3,
        fillet: x => x * 0.8
    }



    for (let el of commands) {

        pan = operations[el](pan)
        console.log(pan)
    }
}



mathOperation('32', 'chop', 'chop', 'chop', 'chop', 'chop')




// output:             16
//                     8
//                     4
//                     2
//                     1

//

