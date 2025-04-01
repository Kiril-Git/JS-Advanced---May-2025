function getWeekdayIndex(inputStr) {

    let dayInd = ''

    switch (inputStr) {

        case 'Monday':
            dayInd = 1
            break

        case 'Tuesday':
            dayInd = 2
            break

        case 'Wednesday':
            dayInd = 3
            break

        case 'Thursday':
            dayInd = 4
            break

        case 'Friday':
            dayInd = 5
            break

        case 'Saturday':
            dayInd = 6
            break

        case 'Sunday':
            dayInd = 7
            break

        default: dayInd = 'error'

    }

    console.log(dayInd)
}

getWeekdayIndex('Monda')




// Output:                  error

//