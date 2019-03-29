/* function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. */

function LetterCapitalize(str) {
    
    // extracting the words of the string into an array by using split function; the argument " "(double qoutes with spaces) used is for picking each word as an element of the array.
    str = str.split(" ");
    
    //loop to iterate over the str array
    for(let i = 0; i < str.length; i++) {
        // the statement looks really daunting but no worries we will break it down into small bits.
        // on the left side we have have the str[i] which storing the modified string
        /* on the right side we have two parts :
        1.str[i][0].toUpperCase() : str[i][0] is a 2-D array it is accesing the first char of the word as the str array element and coverting it to upper case.
        2. str[i].slice(1) : slice creates a subarray of str[i] i.e element of the str array; starting from the second char to the last char of the element/word because that remains the same.
        Then we use '+' to join both the parts
        */ 
        str[i] = str[i][0].toUpperCase() + str[i].slice(1);
    }

    //return the modified string    
    return str.join(" ");
}


// call the function to change the string and you can give your favourate string as argument; I am using 'hello world code' as an example.
let string = LetterCapitalize('hello world code');

//Display the result 
console.log(string);

// Fun Tip: As disscused in the 2_ReverseString_S program we are using different arguments in split and join function.

// Also see __proto__ of any array in the console of a web browser to find all the function we can use with arrays