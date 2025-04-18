function tableInJSON (inputArr) {


    inputArr.shift()
    let townTable = []

    for (let el of inputArr) {
        
        let [_, town, latitude, longitude] = el.split(/\s*\|\s*/)

        let objTown = {
            Town: town,
            Latitude: Number(Number(latitude).toFixed(2)),
            Longitude: Number(Number(longitude).toFixed(2))
        }
            townTable.push(objTown)

    }

    console.log(JSON.stringify(townTable) )

}

tableInJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)




// output:             [{"Town":"Sofia","Latitude":42.7,"Longitude":23.33},
//                     {"Town":"Beijing","Latitude":39.91,"Longitude":116.36}]

//
