/**************
 * 
 * VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) 
 * and another number, and then uses the functions created in the hard challenge to output the
 * value in sentence form. Example output: "3 + 4 = 7"
 * 
 * 
 */


 alert('Welcome to the website that does your math homework for you!!!');
 alert('Ready to see some magic? Lets BEGIN.');

 var num1 = parseInt(prompt('What is your first number?'));

 var num2 = parseInt(prompt('What is your second number?'));

 var operator = prompt('What operator do you want to use on these two numbers(either +, -, * or /) ?');



 function add() {
    return num1 + num2;
}

function subtract() {
    return num1 - num2;
}

function multiply() {
    return num1 * num2;
}

function divide() {
    return num1 / num2;
}



if (operator == '+') {
    console.log(num1 + ' ' + operator + ' ' + num2 + ' = ' + add());
} else if (operator == '-') {
    console.log(num1 + ' ' + operator + ' ' + num2 + ' = ' + subtract());
} else if (operator == '*') {
    console.log(num1 + ' ' + operator + ' ' + num2 + ' = ' + multiply());
} else if (operator == '/') {
    console.log(num1 + ' ' + operator + ' ' + num2 + ' = ' + divide());
} else {
    console.log('You either did not enter any number(s) or any operator. PLEASE TRY AGAIN');
}







