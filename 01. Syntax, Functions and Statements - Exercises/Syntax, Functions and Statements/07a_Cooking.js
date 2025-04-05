function mathOperation (pan, ...commands) {
    pan = +pan


    for (let el of commands) {

        switch (el) {
            case 'chop': pan /= 2; break;
            case 'dice': pan = Math.sqrt(pan); break;
            case 'spice': pan += 1; break;
            case 'bake': pan *= 3; break;
            case 'fillet': pan *= 0.8; break;
        }

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