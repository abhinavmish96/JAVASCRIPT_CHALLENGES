/* function PentagonalNumber(num) read num which will be a positive integer and determine how many dots exist in a pentagonal shape around a center dot on the Nth iteration. For example, in the image below you can see that on the first iteration there is only a single dot, on the second iteration there are 6 dots, on the third there are 16 dots, and on the fourth there are 31 dots.

14_PentagonalNumber_M$.png

Your program should return the number of dots that exist in the whole pentagon on the Nth iteration. */

function PentagonalNumber(num){
    
    // using recursion function
    // if the Nth iteration is '1' then return 1 otherwise call the recursive function for the Nth -1 iteration with formula (5 * (num - 1))
    return num === 1 ? 1 : PentagonalNumber(num - 1) + (5 * (num - 1));

}

// call the function for computing Pentagonal NUmber and you can give your favourate number as argument; I am using "2" as an example for true.
let result = PentagonalNumber(2);

//Display the result 
console.log(result);