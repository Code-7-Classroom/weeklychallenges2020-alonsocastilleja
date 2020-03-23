/**************
 * 
 * EASY: Create two variables and assign a person’s name to each. 
 * Console log a statement that says which name is shorter or longer, 
 * and by how many characters.
 * Example output: “The name Thomas is longer than John by 2 characters”
 *
 */


var name1 = prompt('What is your name?');
alert('Hello how are you, ' + name1 + '!');
var name2 = prompt('We have met ' + name1 + '. Now what is your name?');
alert('Hello how are you, ' + name2 + '!');


if (name1.length > name2.length && name1.length > 0 && name2.length > 0){
    var difference = name1.length - name2.length;
    console.log('The name ' + name1 + ' is longer than ' + name2 + ' by ' + difference + ' characters.');
} else if (name2.length > name1.length) {
    var difference = name2.length - name1.length;
    console.log('The name ' + name2 + ' is longer than ' + name1 + ' by ' + difference + ' characters.');
} else if (name1 === name2) {
    alert('Oops! you might\'ve entered the same name twice!');
    alert('Please try again!!')
} else {
    console.log('One of your names ' + ' has not been entered yet! Please try again!')
}








