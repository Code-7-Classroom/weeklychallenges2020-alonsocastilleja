/********
* 
* 
*  HARD: Given the information below for Tom and Jerry.
*              ● Tom - height: 9in mass: 8 lbs
*                ● Jerry - height: 10cm mass: 45 g
*  Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
*           ​BMI = mass / height ^2 = mass / (height * height)
*  Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. 
*       Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. 
*            Print a string to the console with the variable from step 3 
*           ( e.g. Is Tom’s BMI higher than Jerry’s? false).
*  
* 
*/


var mass, height, higherBMI;

// Converts centimeters to inches
function cmToIn(height) {
    return height / 2.54;
}

// Converts grams to pounds
function gmToLbs(mass) {
    return mass / 454;
}

// BMI Formula
function BMI(mass, height) {
    return mass / (height * height);
}


//Tom and Jerry's Measurements
var tom = {
    height : 9,   // inches
    mass : 8     //In pounds
};
var jerry = {
    height : 10, //In centimeters
    mass : 45    //In grams
};


//BMI Calculations
var jerryBMI = BMI(gmToLbs(jerry.mass), cmToIn(jerry.height));      //Uses the conversion function
var tomBMI = BMI(tom.mass, tom.height);

//BMI comparison

if (jerryBMI < tomBMI) {
    higherBMI = true;
    console.log(`Is Tom’s BMI higher than Jerry’s? ${higherBMI}`);
} else if (jerryBMI > tomBMI){
    higherBMI = false;
    console.log(`Is Tom’s BMI higher than Jerry’s? ${higherBMI}`);
} else {
    console.log('They have the same BMI!');
}







