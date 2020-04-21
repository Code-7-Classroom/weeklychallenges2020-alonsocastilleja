/***************************************************************
 * VERY EASY: What is the difference between the following
 *  JavaScript keywords: var, let and const. Please provide a 
 * written explanation. You are able to include a code reference 
 * along with your written explanation for each keyword.
 * 
 * **************************************************************
 */

 //There are various differences betweeen the 3 JS keywords: var, let and const

/***********
 *  The var keyword is used to define and set the value for a variable.
 * Another feature of the var keyword is the global and lexical scoping that it 
 * posseses. 
 * However there are a few issues that exist with the use of the var keywork
**************************************/


//The var keyword is used to define and set the value for a variable.
//Another feature of the var keyword is the global and lexical scoping that it posseses. 

    var color = 'red';

    function colorChange() {
        console.log(color);
        
        //Another feature of the var keyword is that it allows you to change
        //the value of the variable without affecting the previous lines of code.
        color = 'green'
        console.log(color);
    }

    colorChange();


// One issue with the var keyword is that you might unknowingly get bugs in your
// code if you reuse the same variable name elsewhere.
   
    var name = 'Alonso';

    if (name === 'Alonso'){
        var name = 'John';
    }

    console.log(name);

// If you come across this issue, it is always better to use the const keyword
// The const keyword is used to keep a constant value on the block scope.
//If you want the value to remain the same on the global scope, you just need to declare
// the constant value outside of the curly braces.
// Block scope refers to anything that is located inside curly braces.
// Both the let and const keyword are block scope keywords.

    // // const name = 'Alonso';

    // // if (name === 'Alonso'){
    // //     const name = 'John'
    // // }

    // // console.log(name);

    // The lines of the code above will result in an error because you can 
    // update the values of a const variable.



    
    {
        //Although the var keyword is already to the name variable above,
        //the following code executes because the code is enclosed in a set
        // of curly braces. Furthermore, the let keyword is block scoped.
        let name = 'Alonsi'
                // let name = 'Mark'   
                //The above line will result in an error because you can't
                //redeclare the name variable with the let keyword. However,
                // you are allowed to update the value of it without the 
                // use of the let keyword like shown below:
        name = 'Mark';
                    
        console.log(name);
    }

