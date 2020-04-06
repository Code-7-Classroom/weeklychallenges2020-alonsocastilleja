/******************************************************************************
 * 
 *    EASY: Write a function that would allow you to do this:
 *       var run = exercise('running');
 *       console.log(run()); // prints "Today's exercise: running" 
 * 
 *        var swim = exercise('swimming');
 *       console.log(swim()); // prints "Today's exercise: swimming"
 * 
 * 
 ******************************************************************************** 
*/


function exercise(sport) {
  var a = 'Today\'s exercise: ';
  return function() {
    if(sport === 'running'){
      console.log(a + 'running');
    } else if(sport === 'swimming') {
      console.log(a + 'swimming');
    }
  }
}

var run = exercise('running');
var swim = exercise('swimming');

console.log(run());
console.log(swim());