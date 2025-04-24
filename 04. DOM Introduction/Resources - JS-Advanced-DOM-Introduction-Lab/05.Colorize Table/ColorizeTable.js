function colorize() {

                                                                                    //  or    (2n)
    let evenRowEls = document.querySelectorAll('table tr:nth-child(even)');

    for (let el of evenRowEls) {
        el.style.backgroundColor = 'teal'
    }
}