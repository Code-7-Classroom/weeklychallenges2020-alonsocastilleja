/*****************************************************
 * Using ES6 syntax, write a function that takes in an 
 * array of numbers and outputs the maximum number.
 * 
 * ****************************************************
 */


// I create an empty numbers array that later takes in a list of random numbers,
// based on the requests of the user.

let numbers = [];

let x = prompt('How many numbers would you like in the array?');
let y = prompt('Starting from zero, what is the largest number that you would like in the array of numbers?')

for(i = 0; i < x; i++){
  numbers.push(Math.floor(Math.random() * y));
}


// The maxNum function below will then take in the numbers array. The three dots in front of the numbers
// parameter below is used when the function does not know the number of arguments that will be used. 
// Therefore the rest parameter, represented by three dots, is used to take in as many arguments as needed.
// In this case, the 'x' variable determines the number of items in the array.

function maxNum() {      
    let value = Math.max(...numbers); 
    console.log(numbers);
    console.log(`${value} is the largest number in the array`); 
}

 maxNum(...numbers);    

