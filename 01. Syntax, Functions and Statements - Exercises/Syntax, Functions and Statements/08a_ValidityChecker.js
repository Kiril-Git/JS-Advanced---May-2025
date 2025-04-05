function validateDist(x1, y1, x2, y2) {


    let distance1 = Math.sqrt(x1 **2 + y1 **2)
    let distance2 = Math.sqrt(x2 **2 + y2 **2)

    let distance = Math.sqrt((x2 - x1) **2 + (y2 - y1) **2)


    const print = (xA, yA, xB, yB, dist) => {
        const validity = Number.isInteger(dist) ? 'valid' : 'invalid'
        console.log(`{${xA}, ${yA}} to {${xB}, ${yB}} is ${validity}`)
    }

    print(x1, y1, 0, 0, distance1)
    print(x2, y2, 0, 0, distance2)
    print(x1, y1, x2, y2, distance)

}

validateDist(2, 1, 1, 1);

