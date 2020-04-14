/**********************************************************************************************
 * 
 * VERY HARD: You are given coins of different denominations and a total amount of money ​amount​. 
 * Write a function to compute the fewest number of coins that you need to make up that amount. 
 * If that amount of money cannot be made up by any combination of the coins, return ​-1​.
 *  Hint: Sudo code this problem. 
 *  Focus on breaking the problem down into steps Use functions, arrays and logical operators. 
 *  Do not have anyone give you the answer or solve this problem for you.
 *               Example 1:
 *               Input: coins = [1, 2, 5], amount = 11 Output: 3
 *               Explanation: 11 = 5 + 5 + 1
 *               Example 2:
 *                Input: coins = [2], amount = 3 Output: -1
 * 
 * *******************************************************************************************
 * 
 */

var coins = [1, 2, 5];
var amount = 11;
var value = 0;

for (i = coins.length - 1; i >= 0; i--) {
    if (amount > coins[i]) {
        for (i = coins.length - 1; i > coins.length - 2; i--) {
            amount -= coins[i];
            value += 1;
            break;
        }
        for (i = coins.length - 1; i > coins.length - 2; i--) {
            amount -= coins[i];
            value += 1;
            break;
        }
        for (i = coins.length - 1; i > coins.length - 2; i--) {
            if(coins[0] === amount) {
                amount -= coins[0];
                value += 1;
                break;
            }
        }
    }
}

console.log(`In order to get to 11 with the coins given, you need ${value} coins.`);

/***************************************
 * Unfortunately, I could not solve the problem.
 * However, I understand the process I must follow to solve it.
 *      1. The program must loop from the largest index in the array down to the smallest.
 *      2. The program will use the modulo operator for each index to figure out how much remains.
 *          -If the remainder is larger than the following index number, then it will continue with the loop
 *          -If the remainder is smaller than the following index number, then it will continue with the loop
 *             until it finds a number that is a divisible by it. 
 *          -The program will then store the number of times it was able to divide the number. 
 *      3. The program will loop the remainder of the array until it can find one that reduces the amount to zero.
 *      4. Once the program is finished running, the numbers stored will be added together to get the total number of coins utilized.
 *      5. If the program loops through the array and can not find a divisible number, then it will return a -1.        
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */