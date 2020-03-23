/************
 * MEDIUM: Write a program to tell if someone is shouting (typing in all caps), 
 * whispering (typing in all lowercase), or neither. 
 * Use prompt to get user input, 
 * and then console log whether the user was 
 * shouting, whispering, or talking normally.
 * 
 */

alert('Lets play a game.');
alert('I am going to try to guess whether you are shouting, whispering or speaking normally.');
alert('Lets BEGIN.');


var message = prompt('I need you to speak.');
if (message == message.isUppercase()) {
    console.log('You are shouting!!!!');
}
else if (message == message.isLowercase()) {
    console.log('You are whispering. I can barely hear you!');
}
else {
    console.log('You are speaking normal. You have such a lovely voice.');
}



