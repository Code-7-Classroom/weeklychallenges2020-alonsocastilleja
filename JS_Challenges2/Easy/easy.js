/************
 * 
 * 
 * EASY: ​Create an array of students holding their 
 * last name, first name, and age with 3 students. 
 * To validate, please log a greeting with the first 
 * name, last name and age of the 2nd student. 
 * The output should look like "Hello, my name is John Doe and I'm 19 years old."
 * 
 * 
 * 
 */



var john = {
    firstName : 'John' ,
    lastName : 'Doe' ,
    age : 19
};


var mary = {
    firstName : 'Mary',
    lastName : 'Poppins',
    age : 26
};


var matthew = {
    firstName : 'Matthew',
    lastName : 'Smith',
    age : 32
};



console.log('Hello, my name is ' + john.firstName + ' ' + john.lastName + 
' and I\'m ' + john.age + ' years old.'); 

console.log('Hello, my name is ' + mary.firstName + ' ' + mary.lastName + 
' and I\'m ' + mary.age + ' years old.'); 

console.log('Hello, my name is ' + matthew.firstName + ' ' + matthew.lastName + 
' and I\'m ' + matthew.age + ' years old.'); 

