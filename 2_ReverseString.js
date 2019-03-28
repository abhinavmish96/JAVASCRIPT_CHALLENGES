/*function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH. */

function ReverseString(str){

    // extracting the characters of the string into an array by using split function; the argument ''(single qoutes without spaces) used is for picking each character as an element of the array.
    let arr = str.split('');

    //in built reverse function of arrray to reverse the array.
    arr = arr.reverse();

    //joining all the characters back from the array and assembiling to string back.
    str = arr.join('');
    
    //return the reverse string
    return str;

}

// call the function to reverse the string and you can give your favourate string as argument; I am using 'Hello' as an example.
let string = ReverseString('Hello');

//Display the result 
console.log(string);

// Fun Tip: Use different arguments in split and join function and you will see some cool stuff!!

//for exapmle try " "(double qoutes with spaces)

// Also see __proto__ of any array in the console of a web browser to find all the function we can use with arrays