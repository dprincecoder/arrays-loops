//use this html to test your code in the browser:
const sumOfNumber = document.querySelector(".sum-of-no");
const lengthOfArr = document.querySelector(".len-of-arr");
const totalItemsOfArr = document.querySelector(".len-of-arr");
const NumOfChoice = document.querySelector(".num-of-choice");
const firstAndLastName = document.querySelector(".first-and-last-name");
const fiveLetterLong = document.querySelector(".five-letters-long");
const countryWithAatTheEnd = document.querySelector(".country-with-a-at-end");
const countryStartingWithN = document.querySelector(".country-with-starting-with-n");
const countryWithAInMiddle = document.querySelector(".country-with-a-in-middle");

//array 1
const arrOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Task 1.1
const accumulator = arr => {
    let result = 0
    for(let item of arr){
        result += item
    }
    return result
}
sumOfNumber.textContent = accumulator(arrOfNum)

//Task 1.2
const totalLength = arr => {
    let result
    for(let item of arr){
       result = item 
    }
    return result
}
lengthOfArr.textContent = totalLength(arrOfNum)

//Task 1.3
const chosenNum = (arr, num) => {
    let result
    for(let item of arr){
        if(num === item) result = item
     }
     return result
}
NumOfChoice.textContent = chosenNum(arrOfNum, 2)

//array 2
const arrOfName = ["Peter", "Paul", "Mary", "John", "Jane"];

//Task 2.1
const fnlName = (arr) => {
    let result = []
    for(let item of arr){
        if(item === arr[0] || item === arr[arr.length - 1]) {
            result.push(item)
        }
     }
     return result
}
firstAndLastName.textContent = fnlName(arrOfName)

//Task 2.2
const fiveLetters = (arr) => {
    let result = []
    for(let item of arr){
        if(item.length === 5) {
            result.push(item)
        }
     }
     return result
}
fiveLetterLong.textContent = fiveLetters(arrOfName)

//Task 2.3
const myName = (arr, newName) => {
    arr.push(newName)
    return {arr, newName}
}
console.log(myName(arrOfName, 'Avos'))

//array 3
const arrOfCountry = ["USA", "UK", "Germany", "France", "Nigeria"];

//Task 3.1
const startsWithN = (arr) => {
    let result = []
    for(let item of arr){
        if(item[0] === 'N') {
            result.push(item)
        }
     }
     return result
}
countryStartingWithN.textContent = startsWithN(arrOfCountry)

//Task 3.2
const EndsWithA = (arr) => {
    let result = []
    for(let item of arr){
        if(item[item.length - 1] === 'A') {
            result.push(item)
        }
     }
     return result
}
countryWithAatTheEnd.textContent = EndsWithA(arrOfCountry)

//Task 3.2
const middleLetterA = (arr) => {
    let result = []
    for(let item of arr){
        let sliced = item.slice(1,[item.length - 1])
        for(let i of sliced){ 
            if(i === 'a'){
                result.push(item)
            }
        }
     }
     return result
 }
countryWithAInMiddle.textContent = middleLetterA(arrOfCountry)

//array 4
const arrOfObject = [
    { name: "Peter", age: 30, country: "USA" },
    { name: "Paul", age: 25, country: "UK" },
    { name: "Mary", age: 28, country: "Germany" },
    { name: "John", age: 35, country: "France" },
    { name: "Jane", age: 28, country: "Nigeria" },
  ];

//Task 4.1.1
const loopObjOne = arr => {
    let result = []
    for(let item of arr){
        result.push(item)
    }
    return result
}
console.log(loopObjOne(arrOfObject))

//Task 4.1.2
const loopObjTwo = arr => {
    let result = []
    let obj = 0
    while(obj < arr.length){
        result.push(arr[obj])
        obj++
    }
    return result
}
console.log(loopObjTwo(arrOfObject))

//Task 4.1.3
const loopObjTree = arr => {
    let result = []
    let obj = 0
    do{
        result.push(arr[obj])
        obj++
    }
    while(obj < arr.length) 
    return result
}
console.log(loopObjTree(arrOfObject))

//Task 4.2
const ageSort = arr => {
    result = arr.filter(arr => arr.age > 20 && arr.age < 30)
    return result
}
console.log(ageSort(arrOfObject))

//Task 4.3
const nameChecker = (arr, name) => {
    let result = []
    for(let item of arr){ 
        if(name ===  item.name)
        result.push(item)
    }
    return result
}
console.log(nameChecker(arrOfObject, 'John'))