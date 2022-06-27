//html for code testing
const sumOfNumber = document.querySelector(".sum-of-no");
const lengthOfArr = document.querySelector(".len-of-arr");
const totalItemsOfArr = document.querySelector(".len-of-arr");
const NumOfChoice = document.querySelector(".num-of-choice");
const firstAndLastName = document.querySelector(".first-and-last-name");
const fiveLetterLong = document.querySelector(".five-letters-long");
const addNameToArray = document.querySelector(".name-to-array");
const countryWithAatTheEnd = document.querySelector(".country-with-a-at-end");
const countryStartingWithN = document.querySelector(
    ".country-with-starting-with-n"
);
const countryWithAInMiddle = document.querySelector(
    ".country-with-a-in-middle"
);


//Array of numbers
const arrOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//======sum of numbers in an Array  (1(a)) SOLUTION=======
const sumNub = arrOfNum.reduce((a, b) => {
    return a + b;
}, 0)
//console.log(sumNub)

//DOM for summation
sumOfNumber.textContent = `= ${sumNub}`




//=============Returning the total items in an array (1(b)) SOLUTION==========

let counter = 0

for (let i = 0; i < arrOfNum.length; i++) {
    counter++;
}

const counted = counter

// console.log(counter)

//DOM for For counting numbers of items in an array
lengthOfArr.textContent = `= ${counted}`

//Alternatively with 'For___in Loop'
let counting = 0

for (i in arrOfNum) {
    counting++
}
//console.log(counting)

//Alternatively with '.LENGTH'
const getNum = arrOfNum.length
//console.log(getNum)




//======Find number i want  (1(c)) SOLUTION=======
const findNumFour = arrOfNum.find(four => four === 4)
// console.log(findNumFour)

//Alternatively
const findNum = arrOfNum[3]
//console.log(findNum)

//DOM for Finding Number I want
NumOfChoice.textContent = `= ${findNumFour}`











//====== Finding first and last name in an array (2(a)) SOLUTION=======

const arrOfName = ["Peter", "Paul", "Mary", "John", "Jane"];

const findNam = arrOfName[0] + " and " + arrOfName[arrOfName.length - 1]

//console.log(findNam)

//DOM for getting first and last name
firstAndLastName.textContent = `= ${findNam}`





//====== Finding name of 5 letters long in an array (2(b)) SOLUTION=======

const findFive = arrOfName.find(v => v.length == 5)
// console.log(findFive)

//Trying something
const fiveLetter = arrOfName.map((x) => {
    if (x.length == 5) {
        return x
    }
})
// console.log(fiveLetter)

fiveLetterLong.textContent = `= ${findFive}`


//====== Adding my name at the end of the array (2(b)) SOLUTION=======

var addMyName = arrOfName.push("Dinho")
//console.log(arrOfName)

addNameToArray.textContent = `= ${arrOfName}`











//====== Finding country starting with N in an array (3(a)) SOLUTION=======

const arrOfCountry = ["USA", "UK", "Germany", "France", "Nigeria"];
let findIt = arrOfCountry.find((x) => {
    if (!x.indexOf("N"))
        return x
})
//console.log(findIt)

countryStartingWithN.textContent = `= ${findIt}`

// var findN = arrOfCountry.map((x) => {
//     if(!x.indexOf('N')){
//         return x
//     }
// })

// var findN = arrOfCountry.indexOf('Nigeria')

// console.log(findN)

// countryStartingWithN.textContent = findN


//====== Finding an array of countries and returns the country that ends with the letter 'A' (3(b)) SOLUTION=======

let findA = arrOfCountry.filter((x) => {
    if (x[x.length - 1] == 'a' || x[x.length - 1] == 'A') {
        return x
    }
})

//console.log(findA)
countryWithAatTheEnd.textContent = `= ${findA}`




//====== Finding an array of countries and returns the country that has the letter 'a' in the middle. (3(c)) SOLUTION=======

let findAMid = arrOfCountry.filter((x) => {
    if (x[x.length - 1] !== 'a' && x[x.length - 1] !== 'A') {
        if (x.includes('a')) {
            return x
        }
    }
})
//console.log(findAMid)

countryWithAInMiddle.textContent = `= ${findAMid}`















const arrOfObject = [
    { name: "Peter", age: 30, country: "USA" },
    { name: "Paul", age: 25, country: "UK" },
    { name: "Mary", age: 28, country: "Germany" },
    { name: "John", age: 35, country: "France" },
    { name: "Jane", age: 28, country: "Nigeria" },
];

const countryWithMap = document.querySelector(
    ".country-with-map");

//======Finding an array of objects then loop through the array in 3 types of looping an array of objects. (4(a)) SOLUTION=======

//first type, using map method to give the 'name' in the array of object

let firstLoop = arrOfObject.map((x) => {
    return x.name
})
//console.log(firstLoop)

countryWithMap.textContent = `= ${firstLoop}`


//second type, using filter method to filter an object with 'Paul' 
let secondLoop = arrOfObject.filter((newName) => {
    if (newName.name == 'Paul') {
        return newName
    }
})
console.log(secondLoop)


//third type, using reduce method to sum the ages in 'age' object in the array 
let thirdLoop = (items, prop)=>{
    return items.reduce((newAge, score) => {
            return newAge + score[prop]
    },0)
}

console.log(thirdLoop(arrOfObject, 'age'))



//function that takes an array of objects and returns the object that has age that is greater than 20 and less than 30.

let findSomeAges = arrOfObject.filter((x) => {
    if(x.age > 20 && x.age < 30){
        return x
    }
})

console.log(findSomeAges)

//function that takes an array of objects and returns the object that has name that is 'John'.

let findJohn = arrOfObject.filter((x) => {
    if(x.name == 'John'){
        return x
    }
})

console.log(findJohn)