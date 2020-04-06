/*****************
* 
* HARD: Data security exercise. Inside of a closure, create an object called 
* pii (Personally Identifiable Information)that cannot be accessed directly. 
* The object should have at least two properties: name and ssn.
*  Only the name property should be accessible, and it should be called through a public function. 
* The ssn property should not be accessible at all.
* Creating private objects and private properties helps you control who has access 
*to what data and helps you prevent people who shouldn't see important info like social 
*security numbers from getting access to the data.
 *
 * 
 * 
 */



function getName(){
    return function(){              //Immediately Invoked Function
      var pii = {
          name: 'Alonso',
          lastName: 'Castilleja',
          ssn: '123-45-6789'
      };
      return pii.name;                  // Only returns names from pii object
  }
}
var onlyGetName = getName();        // Value of getName() is stored in onlyGetName 
console.log(onlyGetName());         // Console logs result

