function modifyObject(input) {


    let worker = input

    if (worker.dizziness) {

        worker.levelOfHydrated += worker.weight * 0.1 * worker.experience
        worker.dizziness = false
    }


    return worker
}

console.log(modifyObject({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
))




// output:             { weight: 80, experience: 1, levelOfHydrated: 8, dizziness: false }

//