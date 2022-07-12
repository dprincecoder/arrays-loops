/*this challenge should you choose to accept it:
attempt at least 2 out of 3*/

//use this log where ncessary and when you want to log something:
const { log } = console;


//use this html to test your code in the browser:
const sumOfNumber = document.querySelector(".sum-of-no");
const lengthOfArr = document.querySelector(".len-of-arr");
const totalItemsOfArr = document.querySelector(".len-of-arr");
const numOfChoice = document.querySelector(".num-of-choice");
const firstAndLastName = document.querySelector(".first-and-last-name");
const fiveLetterLong = document.querySelector(".five-letters-long");
const yourName = document.querySelector(".your-name");
const countryWithAatTheEnd = document.querySelector(".country-with-a-at-end");
const countryStartingWithN = document.querySelector(
  ".country-with-starting-with-n"
);
const countryWithAInMiddle = document.querySelector(
  ".country-with-a-in-middle"
);
const hasJohn = document.querySelector(".has-john");


/*--==============================-----------------------=======================-----------------------=======================*/

//hint: to insert your result in the html, use the textContent property of the element you want to insert the result in.
//e.g: sumOfNumber.textContent = yourResult;

//array 1
const arrOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//1. Write a function that takes an array of numbers and returns the sum of all the numbers.

let sum = 0;
function arrSum(arrOfNum) {
    for (const x of arrOfNum){
      sum += x;
    }
    return sum;
}
sumOfNumber.textContent = arrSum(arrOfNum);

//2. Write a function that takes an array of numbers and return the total items in the array.
function arrLen(arr){
  return arr.length;
}
console.log(arrLen(arrOfNum));
lengthOfArr.textContent = arrLen(arrOfNum);
//3. write a function that takes an array of numbers and returns a number you want from the array.
function myChoice(arr){
    return arr[6];
}
console.log(myChoice(arrOfNum));
numOfChoice.textContent = myChoice(arrOfNum);
/*--==============================-----------------------=======================-----------------------=======================*/

//array 2
const arrOfName = ["Peter", "Paul", "Mary", "John", "Jane"];

//1. Write a function that takes an array of names and returns the first name and last name.
function firstAndLast(arrOfName) {
  firstName = arrOfName[0];
  lastName = arrOfName[arrOfName.length -1];
 
  return `${firstName} ${lastName}`;
}
firstAndLastName.textContent = firstAndLast(arrOfName);
//2. write a function that takes an array of names and return the name that is 5 letters long.
function fiveLetterWord(arr){
 for (let i = 0; i < arr.length; i++){
   if (i.length === 5){
    console.log(arr[i]);
   }
   return arr[i]; 
 }
}  
console.log(fiveLetterWord(arrOfName));
fiveLetterLong.textContent = fiveLetterWord(arrOfName);
//3. write a function that takes an array of names and returns (your name) at the end of the array.
function addMyName(arr){
  arr.push("Dami E.")
  return arr;
}
yourName.textContent = addMyName(arrOfName);
// console.log(addMyName(arrOfName))
/*--==============================-----------------------=======================-----------------------=======================*/

//array 3
const arrOfCountry = ["USA", "UK", "Germany", "France", "Nigeria"];

//1. Write a function that takes an array of countries and returns the country that starts with the letter 'N'.
function startsWithN (array) {
  let c = 0;
  for(let c in array){
    if (array[c].startsWith('N') === true){
      return (array[c]);
    }
    
  }
} 
console.log(startsWithN(arrOfCountry));
countryStartingWithN.textContent = startsWithN(arrOfCountry);
//2. Write a function that takes an array of countries and returns the country that ends with the letter 'A'.
function endsWithA (arr) {
  
  for(let a = 0; a < arr.length; a++){
    if (arr[a].endsWith('A') === true){
      return (arr[a]);
    }
    
  }
} 
console.log(endsWithA(arrOfCountry));
countryWithAatTheEnd.textContent = endsWithA(arrOfCountry);

//3. Write a function that takes an array of countries and returns the country that has the letter 'a' in the middle.
/*
function withMiddleA(arr){
  let a;
  while (a < arr.length){
    let str ;
    if (arr[a].length % 2 === 0 && (str.charAt(arr[(arr[a].length -1) / 2]) === 'a')) {
      arr[a];
    }
    a++
  }
  return arr[a]
}
countryWithAInMiddle.textContent = withMiddleA(arrOfCountry); */
/*--==============================-----------------------=======================-----------------------=======================*/

//array 4
const arrOfObject = [
  { name: "Peter", age: 30, country: "USA" },
  { name: "Paul", age: 25, country: "UK" },
  { name: "Mary", age: 28, country: "Germany" },
  { name: "John", age: 35, country: "France" },
  { name: "Jane", age: 28, country: "Nigeria" },
];

//1 write a function that takes an array of objects then loop through the array in 3 types of looping an array of objects.
//this 3 methods must be in 3 different functions.
function firstLoop(arrObj){
  for (let i = 0; i < arrObj.length; i++) {
    console.log(arrObj[i]);
  }
  return arrObj[i];
}
console.log(firstLoop(arrOfObject));
//2 write a function that takes an array of objects and returns the object that has age that is greater than 20 and less than 30.
function filterArr(arrOfObject){
  
}


//3 write a function that takes an array of objects and returns the object that has name that is 'John'.

function nameHasJohn(item){
 
}
