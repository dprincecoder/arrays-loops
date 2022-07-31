//This challenge, should you choose to accept: You must attempt at least 2 out of 3.

//Use this log where necessary & when you want to log result:
const { log } = console;


//Use the html selectors to display your code on the browser accordingly.

const sumOfAllNumbers = document.querySelector(".sum-of-all-nums");
const totalItemsOfArr = document.querySelector(".len-of-arr");
const numOfChoice = document.querySelector(".num-of-choice");
const firstAndLastName = document.querySelector(".first-and-last-name");
const fiveLettersLong = document.querySelector(".five-letters-long");
const countryWithAatTheEnd = document.querySelector(".country-with-a-at-end");
const countryStartingWithN = document.querySelector(".country-starting-with-n");
const countryWithAInbetween = document.querySelector(".country-with-a-inbetween");


/*--==============================-----------------------=======================-----------------------=======================*/

//Hint: to insert your result in the html, use the 'textContent' property on the element you want to insert the result.
//e.g: sumOfAllNumbers.textContent = result();

//array 1
const arrOfNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//1. Write a function that takes an array of numbers & return the sum of all the numbers.

//2. Write a function that takes an array of numbers & return the total items in the array.

//3. Write a function that takes an array of numbers & returns a number you want from the array.

/*--==============================-----------------------=======================-----------------------=======================*/

//array 2
const arrOfNames = ["Peter", "Paul", "Mary", "John", "Jane"];

//1. Write a function that takes an array of names & return the first & last name in the array.

//2. write a function that takes an array of names & return names that are 5 letters long.

//3. Write a function that takes an array of names & return (your name) at the end of the array.

/*--==============================-----------------------=======================-----------------------=======================*/

//array 3
const arrOfCountries = ["USA", "UK", "Germany", "France", "Nigeria"];

//1. Write a function that takes an array of countries & return the country that starts with the letter 'n'.

//2. Write a function that takes an array of countries & return the country that ends with the letter 'a'.

//3. Write a function that takes an array of countries & return the country that has the letter 'a' inbetween.

/*--==============================-----------------------=======================-----------------------=======================*/

//array 4
const arrOfObjects = [
  { name: "Peter", age: 30, country: "USA" },
  { name: "Paul", age: 25, country: "England" },
  { name: "Mary", age: 28, country: "Germany" },
  { name: "John", age: 35, country: "France" },
  { name: "Jane", age: 28, country: "Nigeria" },
];

//1. Write a function that takes an array of objects. Use 3 types of looping methods on it.
//1..The 3 methods must be in 3 different functions.

//2 Write a function that takes an array of objects & returns the object with age greater than 20 & less than 30.

//3 Write a function that takes an array of objects & returns the object that has the name 'John'.
