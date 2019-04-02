/* function CheckNums(num1,num2) take both parameters being passed and return the string true if num2 is greater than num1, otherwise return the string false. If the parameter values are equal to each other then return the string -1.  */

function CheckNums(num1,num2) {
    
    // if the numbers are equal then return -1
    if(num2 === num1) return -1;
    // otherwise return the boolean result for comparision performed in brackets; if the num2 is greater than num1 the return true else false
    else return (num2 > num1);

}


// call the function to perform the comparison and you can give your favourate number as argument; I am using '122' and '57' as an example.
let comp = CheckNums(122,57);

//Display the result 
console.log(comp);