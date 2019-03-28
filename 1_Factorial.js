/* The function Factorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer */

function Factorial(num){
    
    // to store factorial; assign 1 otherwise you might see bizzare result such as NaN
    let fact = 1;

    // For value 0 and 1 the factorial is always 1
    if(num === 0 || num ===1 ) return 1;
    
    // For other values calculate the factorial
    else{
        // loop to caluculate factorial from 1 to num
        for(let i =1; i<=num; i++ ){
            fact = fact*i;
        }
        // return factorial
        return fact;
    }

}

// call the function for calculating the factorial and you can give your favourate number as argument; I am using 4 as an example
let result = Factorial(4);

//Display the result 
console.log(result);