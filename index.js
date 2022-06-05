// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// takes an array of drivers' names and a string as arguments
// and returns the matching list of drivers. The function should be case insensitive.

function findMatching(drivers, str) {
    let lowerCaseStr = drivers.filter(driver => driver.toLowerCase() === str.toLowerCase())
    return lowerCaseStr
}

// This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

function fuzzyMatch(drivers, str) {
    let nameStr = drivers.filter(driver => driver[0] === str[0])
    return nameStr
}

// Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.

function matchName(drivers, str) {
    let driversObj = drivers.filter(driver => driver.name === str)
    return driversObj
}

