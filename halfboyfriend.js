//Number 1
const sumOfNumber = document.querySelector(".sum-of-no");
const arrOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for(let i = 0; i < arrOfNum.length; i++ ){
    sum +=arrOfNum[i]
}
console.log(sum);
sumOfNumber.textContent = sum;

//Number 2
const lengthOfArr = document.querySelector(".len-of-arr")
let items = arrOfNum.length;

console.log(items)
lengthOfArr.textContent = items;

//Number 3
const NumOfChoice = document.querySelector(".num-of-choice");
let num= arrOfNum[5];

console.log(num)
NumOfChoice.textContent = num;

//NEW QUESTION
const arrOfName = ["Peter", "Paul", "Mary", "John", "Jane"];

//Number 1
const firstAndLastName = document.querySelector(".first-and-last-name");
let firstName = arrOfName[0];
let lastName = arrOfName[4];

console.log();
firstAndLastName.textContent = firstName;

//Number 2
const fiveLetterLong = document.querySelector(".five-letters-long");

 let letters = arrOfName[0];

 console.log(letters)
 fiveLetterLong.textContent = letters;

 //Number 3
 arrOfNum.push("Halfboyfriend");



 const arrOfCountry = ["USA", "UK", "Germany", "France", "Nigeria"];

//Number 1
const countryStartingWithN = document.querySelector(
  ".country-with-starting-with-n"
);
 let first = arrOfCountry[4];

 console.log(first);
countryStartingWithN.textContent = first;

 //Number 2
 const countryWithAInMiddle = document.querySelector(
    ".country-with-a-in-middle"
  );
let second = arrOfCountry[2];


console.log(second);
countryWithAInMiddle.textContent = second;

//Number 3
const countryWithAatTheEnd = document.querySelector(".country-with-a-at-end");
let cont1 = arrOfCountry[0];
let cont2 = arrOfCountry[2];
let cont3 = arrOfCountry[3];
let cont4 = arrOfCountry[4];

console.log(cont1)
countryWithAatTheEnd.textContent = cont1;

const arrOfObject = [
    { name: "Peter", age: 30, country: "USA" },
    { name: "Paul", age: 25, country: "UK" },
    { name: "Mary", age: 28, country: "Germany" },
    { name: "John", age: 35, country: "France" },
    { name: "Jane", age: 28, country: "Nigeria" },
  ];

  let start = 0;
  for(let i = 0; i > arrOfCountry.length; i++ ){

    start += arrOfCountry[i]
  }