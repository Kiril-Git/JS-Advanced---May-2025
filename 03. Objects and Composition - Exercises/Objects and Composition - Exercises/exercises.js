let car1 = {
    model: "Race Car",
    grade: {
        a: 1,
        b: 2
    },
    start () {
        console.log(`${this.model} goes vroom`);
    }
}
// let car3 = JSON.parse(JSON.stringify(car1));  -  JSON can't copy the start function because Jason doesn't support functions.

let car3 = Object.assign({}, car1);
car3.model = "Sport Car",
console.log(car1)
console.log(car3)


let car2 = {
    model: "Regular Car",
    start: car1.start
}


console.log(car2.start())

// output:             Regular Car goes vroom
