
// The following lines create a random list of numbers in an array 
let numbers = []
let x = prompt('How many numbers would you like in the array?')
let y = prompt('Starting from zero, what is the largest number that you would like in the array of numbers?')

for(i = 0; i < x; i++){
  numbers.push(Math.floor(Math.random() * y))
}
 
// The following function named getAvg takes in a parameter of the numbers array 
const getAvg = (...numbers) => {
  // The reduce method results in a single value given an array.
  const total = numbers.reduce((accum, c) => accum + c, 0)  // The function will start at 0 and add up each number in the array
  return total / numbers.length
}

// The spread operator is used to expand the 'numbers' parameter, which is an 
// array, into a sequence of numbers
const average = getAvg(...numbers);
console.log(numbers);
console.log(`The average of the array of numbers given is ${average}`)