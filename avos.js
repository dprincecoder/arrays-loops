'use strict'
//use this html to test your code in the browser:
const sumOfAllNumbers = document.querySelector(".sum-of-all-nums");
const totalItemsOfArr = document.querySelector(".len-of-arr");
const numOfChoice = document.querySelector(".num-of-choice");
const firstAndLastName = document.querySelector(".first-and-last-name");
const fiveLettersLong = document.querySelector(".five-letters-long");
const countryWithAatTheEnd = document.querySelector(".country-with-a-at-end");
const countryStartingWithN = document.querySelector(".country-starting-with-n");
const countryWithAInbetween = document.querySelector(".country-with-a-inbetween");

//array 1
const arrOfNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Task 1.1
const accumulator = arr => {
    let result = 0
    for (let item of arr) {
        result += item
    }
    return result
}
sumOfAllNumbers.textContent = accumulator(arrOfNums)

//Task 1.2
const totalItems = arr => {
    let result
    for (let item of arr) {
        result = item
    }
    return result
}
totalItemsOfArr.textContent = totalItems(arrOfNums)

//Task 1.3
const chosenNum = (arr, num) => {
    let result
    for (let item of arr) {
        if (num === item) result = item
    }
    return result
}
numOfChoice.textContent = chosenNum(arrOfNums, 2)

//array 2
const arrOfNames = ["Peter", "Paul", "Mary", "John", "Jane"];

//Task 2.1
const fnlName = (arr) => {
    let result = []
    for (let item of arr) {
        if (item === arr[0] || item === arr[arr.length - 1]) {
            result.push(item)
        }
    }
    return result
}
firstAndLastName.textContent = fnlName(arrOfNames)

//Task 2.2
const fiveLetters = (arr) => {
    let result = []
    for (let item of arr) {
        if (item.length === 5) {
            result.push(item)
        }
    }
    return result
}
fiveLettersLong.textContent = fiveLetters(arrOfNames)

//Task 2.3
const myName = (arr, newName) => {
    arr.push(newName)
    return { arr, newName }
}
console.log(myName(arrOfNames, 'Avos'))

//array 3
const arrOfCountries = ["USA", "UK", "Germany", "France", "Nigeria"];

//Task 3.1
const startsWithN = (arr) => {
    let result = []
    for (let item of arr) {
        if (item[0] === 'N') {
            result.push(item)
        }
    }
    return result
}
countryStartingWithN.textContent = startsWithN(arrOfCountries)

//Task 3.2
const endsWithA = (arr) => {
    let result = []
    for (let item of arr) {
        if (item[item.length - 1] === 'A') {
            result.push(item)
        }
    }
    return result
}
countryWithAatTheEnd.textContent = endsWithA(arrOfCountries)

//Task 3.2
const aInbetween = (arr) => {
    let result = []
    for (let item of arr) {
        let sliced = item.slice(1, [item.length - 1])
        for (let i of sliced) {
            if (i === 'a') {
                result.push(item)
            }
        }
    }
    return result
}
countryWithAInbetween.textContent = aInbetween(arrOfCountries)

//array 4
const arrOfObjects = [
    { name: "Peter", age: 30, country: "USA" },
    { name: "Paul", age: 25, country: "England" },
    { name: "Mary", age: 28, country: "Germany" },
    { name: "John", age: 35, country: "France" },
    { name: "Jane", age: 28, country: "Nigeria" },
];

//Task 4.1.1
const loopObjOne = arr => {
    let result = []
    for (let item of arr) {
        result.push(item)
    }
    return result
}
console.log(loopObjOne(arrOfObjects))

//Task 4.1.2
const loopObjTwo = arr => {
    let result = []
    let obj = 0
    while (obj < arr.length) {
        result.push(arr[obj])
        obj++
    }
    return result
}
console.log(loopObjTwo(arrOfObjects))

//Task 4.1.3
const loopObjTree = arr => {
    let result = []
    let obj = 0
    do {
        result.push(arr[obj])
        obj++
    }
    while (obj < arr.length)
    return result
}
console.log(loopObjTree(arrOfObjects))

//Task 4.2
const ageSort = arr => {
    let result = arr.filter(arr => arr.age > 20 && arr.age < 30)
    return result
}
console.log(ageSort(arrOfObjects))

//Task 4.3
const nameChecker = (arr, name) => {
    let result = []
    for (let item of arr) {
        if (name === item.name)
            result.push(item)
    }
    return result
}
console.log(nameChecker(arrOfObjects, 'John'))