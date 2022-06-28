/*this challenge should you choose to accept it:
attempt at least 2 out of 3*/

//use this log where ncessary and when you want to log something:
const { log } = console;


//use this html to test your code in the browser:
const sumOfNumber = document.querySelector(".sum-of-no");
const lengthOfArr = document.querySelector(".len-of-arr");
const totalItemsOfArr = document.querySelector(".len-of-arr");
const NumOfChoice = document.querySelector(".num-of-choice");
const firstAndLastName = document.querySelector(".first-and-last-name");
const fiveLetterLong = document.querySelector(".five-letters-long");
const countryWithAatTheEnd = document.querySelector(".country-with-a-at-end");
const countryStartingWithN = document.querySelector(
  ".country-with-starting-with-n"
);
const countryWithAInMiddle = document.querySelector(
  ".country-with-a-in-middle"
);
const nameAtTheEnd = document.querySelector(".array-of-names-with-my-name-at-the-end");
const loopOfArray1 = document.querySelector(".loop-through-an-array-1");
const loopOfArray2 = document.querySelector(".loop-through-an-array-2");
const loopOfArray3 = document.querySelector(".loop-through-an-array-3");
const objectOfAge = document.querySelector(".object-with-particular-age");
const objectOfName = document.querySelector(".object-with-particular-name");

/*--==============================-----------------------=======================-----------------------=======================*/

//hint: to insert your result in the html, use the textContent property of the element you want to insert the result in.
//e.g: sumOfNumber.textContent = yourResult;

//array 1
const arrOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//1. Write a function that takes an array of numbers and returns the sum of all the numbers.
   
              function addArray(arrOfNum){
                    let sum = 0;
                    for(let x = 0;
                      x < arrOfNum.length;
                      x ++){

                        sum += arrOfNum[x]
                      }
                      return sum;
                  }
                sumOfNumber.textContent =  addArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  

//2. Write a function that takes an array of numbers and return the total items in the array.

              function howMany(arrOfNum){
                const total = arrOfNum.length
                    return total
              }
              lengthOfArr.textContent = howMany([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
            
//3. write a function that takes an array of numbers and returns a number you want from the array.

              function getNumber(arrOfNum){
                  const want = arrOfNum[4]
                  return want
              }
              NumOfChoice.textContent = getNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
/*--==============================-----------------------=======================-----------------------=======================*/

//array 2
const arrOfName = ["Peter", "Paul", "Mary", "John", "Jane"];

//1. Write a function that takes an array of names and returns the first name and last name.

              function getName(arrOfName){
                var first = arrOfName[0]
                var last =  arrOfName[arrOfName.length -1]
              
                return  'The first name is' + " " + first + " " + 'while the last name is' + " " + last 
              }
              firstAndLastName.textContent = getName(["Peter", "Paul", "Mary", "John", "Jane"])
                 


//2. write a function that takes an array of names and return the name that is 5 letters long.
              
              function fiveLetters(arrOfName){
              for (let i in arrOfName){
                if (i.length = 5){
                  let x = arrOfName[i]
                  return x
                }
               }
                }
              fiveLetterLong.textContent = fiveLetters(["Peter", "Paul", "Mary", "John", "Jane"])
        

//3. write a function that takes an array of names and returns (your name) at the end of the array.
              
              function myName(arrOfName){

               arrOfName[arrOfName.length] = "Bunmi"
               return arrOfName
              }

             let arrname = myName(["Peter", "Paul", "Mary", "John", "Jane"])
             console.log(arrname)
              
/*--==============================-----------------------=======================-----------------------=======================*/

//array 3
const arrOfCountry = ["USA", "UK", "Germany", "France", "Nigeria"];

//1. Write a function that takes an array of countries and returns the country that starts with the letter 'N'.
             
                function start(arrOfCountry){
                for (let i in arrOfCountry){
                  if (arrOfCountry[i].startsWith("N")){
                    return arrOfCountry[i]
                  }
                }
                }
              countryStartingWithN.textContent =  start(["USA", "UK", "Germany", "France", "Nigeria"])
         

//2. Write a function that takes an array of countries and returns the country that ends with the letter 'A'.
              function ends(arrOfCountry){
                  for(let i in arrOfCountry){
                    if(arrOfCountry[i].endsWith("A")){
                      return arrOfCountry[i]
                    }
                  }
              }
              countryWithAatTheEnd.textContent = ends(["USA", "UK", "Germany", "France", "Nigeria"])
          

//3. Write a function that takes an array of countries and returns the country that has the letter 'a' in the middle.

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
                    // FOR LOOP
       function forLoop(arrOfObject){
        for(x in arrOfObject){
          return arrOfObject
        }
       }
       let looparray = forLoop( [{ name: "Peter", age: 30, country: "USA" },
       { name: "Paul", age: 25, country: "UK" },
       { name: "Mary", age: 28, country: "Germany" },
       { name: "John", age: 35, country: "France" },
       { name: "Jane", age: 28, country: "Nigeria" },
     ]) 
        console.log(looparray)            
 

          //FOR IN LOOP
        function forinloop(arrOfObject){
          for(y in arrOfObject){
            return arrOfObject[y].age
          }
        } 
      let  loopArray2 = forinloop( [{ name: "Peter", age: 30, country: "USA" },
        { name: "Paul", age: 25, country: "UK" },
        { name: "Mary", age: 28, country: "Germany" },
        { name: "John", age: 35, country: "France" },
        { name: "Jane", age: 28, country: "Nigeria" },
      ])
        console.log(loopArray2)
      
      // WHILE LOOP
      function whileloop(arrOfObject){
        x = 1;
        while(x <= 10){
          x = x+2; return arrOfObject 
        }
      }
      let looparray3 =  whileloop( [{ name: "Peter", age: 30, country: "USA" },
      { name: "Paul", age: 25, country: "UK" },
      { name: "Mary", age: 28, country: "Germany" },
      { name: "John", age: 35, country: "France" },
      { name: "Jane", age: 28, country: "Nigeria" },
    ])
      console.log(looparray3)
  
//this 3 methods must be in 3 different functions.

//2 write a function that takes an array of objects and returns the object that has age that is greater than 20 and less than 30.
            function age(arrOfObject){
          
            for(x in arrOfObject){
            if((arrOfObject[x].age > 20) && (arrOfObject[x].age < 30)){
             console.log(arrOfObject[x])
              }
             } 
            }
          age ([{ name: "Peter", age: 30, country: "USA" },
            { name: "Paul", age: 25, country: "UK" },
            { name: "Mary", age: 28, country: "Germany" },
            { name: "John", age: 35, country: "France" },
            { name: "Jane", age: 28, country: "Nigeria" },])
            

//3 write a function that takes an array of objects and returns the object that has name that is 'John'.
             function arrName(arrOfObject){
                for(let i in arrOfObject){
                  if (arrOfObject[i].name == "John"){
                    return arrOfObject[i]
                  }
                }
                }
            let objectname = arrName([
              { name: "Peter", age: 30, country: "USA" },
              { name: "Paul", age: 25, country: "UK" },
              { name: "Mary", age: 28, country: "Germany" },
              { name: "John", age: 35, country: "France" },
              { name: "Jane", age: 28, country: "Nigeria" },
            ])
            console.log(objectname)