
const noRepeat = (sentence) => {

    // I split all the characters in the phrase/ sentence into 
    //individual characters, which will be stored in an array
    let array = sentence.toLowerCase().split(''),
    result = '', 
    count = 0;          // The count variable is used to store the number of times charcter showed up in the array 
   
    //The program will then loop through the array and it will
    // have a nested loop to see if there is a second occurrence
    // of the character in the main loop.
    for (let x = 0; x < array.length; x++) {
            count = 0;
        
            for (let y = 0; y < array.length; y++) 
            {
                if (array[x] === array[y]) {
                count++;    // If there is another occurence of the same character
                }           // the count variable will increase by a value of 1.
            }
        
            if (count < 2) {
                result = array[x];  //If there is only one occurence of the character in
                break;              //in the array, then the program will stop, and the 
                                    //character that only showed up one time will be store in
                                    // the result variable         
            }
    }
    return result;      // The result will then be used outside as the value of the executed function. 
  }

// The following line of code will log the first non-repeating character, in the sentence that was 
// used as an argument in the noRepeat function, to the console.
console.log(noRepeat('the quick brown fox jumps over the calm kitten quietly'));