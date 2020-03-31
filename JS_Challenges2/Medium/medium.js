/************
 * 
 * MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console 
 * that number and its corresponding month. For example: if the user enters the number 3, 
 * then it should return the month “March.” Alert the user if they enter an invalid number 
 * (e.g. less than 1 or greater than 12).
 * 
 * 
 * 
 * 
 */

    

 var num1 = parseInt(prompt('Please enter a number: '));

 
var months = ['Please enter a valid number between 1 and 12', 'January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August', 'September', 
             'October', 'November','December'];

             if (num1 <= 12 && num1 >= 1) {
                 console.log(`The corresponding month is ${months[num1]}`);
             } else {
                 alert('Please enter a valid number between 1 and 12');
             }


