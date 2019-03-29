/* function SimpleAdding(num) add up all the numbers from 1 to num. For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000. */

function SimpleAdding(num) { 

    // a store identifier for storing the result
    let y = 0;

    // a loop to go from 1 to the number and using store identifier to store the result as the loop iterates
    for(let i =1; i<=num; i++) y +=i;

    // return the sum
    return y; 
           
  }

// call the function to perform the addition and you can give your favourate number as argument; I am using '4' as an example.
let sum = SimpleAdding(4);

//Display the result 
console.log(sum);

// Fun Tip: Use recursion function to perform addditon and you will see some cool stuff!!
/******************************************/
//Same program Alternate solution
// Recusrion function
function SimpleAdding(num) {
  
  //to check if the number is 1 then no need perfom anyoperation and simply return
  if (num === 1) {
      return 1;
    } 
    
    //if num is greater than one then start recursion sum operation
    else {
      return num + SimpleAdding(num -1);
    }
  }