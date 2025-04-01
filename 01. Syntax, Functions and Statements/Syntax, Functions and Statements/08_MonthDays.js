function getMonthDays(month, year) {


//  Formula:     new Date(year, month, 0).getDate();

    return new Date(year, month, 0).getDate()

}

console.log(getMonthDays(2, 2020))



// Output:                  29

//