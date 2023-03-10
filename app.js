//Homework Function Drills

// 1 . ) Write a function that outputs the sum of the first and the last index of an array.

function firstLastArraySum(array){
  return array[0] + array[array.length - 1]
} 

let array = [1, 2, 3, 4, 5];
console.log(firstLastArraySum(array));

// ex => var sampleArray = [1,2,3,4,5] 
// expected output =>  sum = 6

// 2. Write a JavaScript program to find the leap years in a given range of years. 

/*   FOT THE ARRAY OF YEARS

function isLeapYear(yearsArray) {
  let result = [];
  yearsArray.forEach((year) => {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
      result.push(year);
    }
  })
  return result;
}

let years = [2000, 2004, 2019, 1998, 1900, 2015];
console.log(isLeapYear(years));
*/

function isLeapYear(year) {
  return year % 4 == 0 && year % 100 != 0 || year % 400 == 0
}

console.log(isLeapYear(2004));

// 3. Write a JavaScript function to sort the following array of objects by title value.
 var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];

     console.log(library);

  // function arrayOfObjectsSort(arrayOfObjects){
  //   arrayOfObjects.sort(function(a, b){
  //     const nameA = a.title.toUpperCase(); // ignore upper and lowercase
  //     const nameB = b.title.toUpperCase(); // ignore upper and lowercase 
  //   // sort in an ascending order
  //     if (nameA < nameB) { return -1; }
  //     if (nameA > nameB) { return 1; }
  //     return 0;
  //   });
  //   return arrayOfObjects;
  // }

  function arrayOfObjectsSort(arrayOfObjects){
    arrayOfObjects.sort((a,b) => a.title < b.title ? -1 : 1)

  }
  console.log("SORTED!!!");
  arrayOfObjectsSort(library);
  console.log(library);

 // 4. Write a JavaScript program that takes an array with mixed data type and calculate the sum of all numbers.

 function sunOfInts(array){
  let sum = 0;
  array.forEach((par) =>{
    if(Number.isInteger(par)) sum = sum + par;
  })
  return sum;
 }

 let arr1  = [2, "11", 3, "a2", false, 5, 7, 1];
 let arr2 = [2, 3, 0, 5, 7, 8, true, false];

 console.log(sunOfInts(arr1));
 console.log(sunOfInts(arr2));

 // Test Data :
// ([2, "11", 3, "a2", false, 5, 7, 1]) -> 18
// ([2, 3, 0, 5, 7, 8, true, false]) -> 25
// Expected Output:
// Original array: 2,11,3,a2,false,5,7,1
// Sum all numbers of the said array: 18

// 5. You will be given an array of drinks, with each drink being an object with two properties: name and price. 
   // Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
   // Assume that the following array of drink objects needs to be sorted:
   drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10},
    {name: "lime", price: 30},
    {name: "lime", price: 55}
  ]

  console.log(drinks);
//   example output =>
//   sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]

function arrayOfObjectsSort2(arrayOfObjects){
  arrayOfObjects.sort((a, b) => a.price < b.price ? -1 : 1 ) 
}
arrayOfObjectsSort2(drinks);
console.log(drinks);
