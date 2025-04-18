function heroesReg (input) {

    let register = []

    for (let el of input) {
        if (!el.trim())    continue

        let [name, level, items] = el.split(' / ')

        let hero = {
            name,
            level: Number(level),
            items: items ? items.split(', ') : []
        }
        register.push(hero)
    }

    console.log(JSON.stringify(register) )
}


heroesReg(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)





// output:             [{"name":"Isacc","level":25,"items":["Apple","GravityGun"]},
//                     {"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},
//                     {"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}]

//
