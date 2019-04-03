/* function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string. */


function AlphabetSoup(str) {
    
    // an empty string container for swaping the char
    let x = '';

    // using trim function to trim any unwanted spaces from beginnig and end of the string
    // using toLowerCase function to convert all the char to lower case to simplify things
    // extracting the characters of the string into an array by using split function; the argument ''(single qoutes without spaces) used is for picking each character as an element of the array.
    str = str.trim().toLowerCase().split('');

    /* nested loop to check each char with all the char in the string */

    // selcte char loop to select one char at a time
    for(let j = 0; j < str.length ; j++){

        // compare loop to compare the above selected char with all the avialable char in the string to perform sorting
        for(let i = j + 1; i < str.length ; i++){

            // condotion to check if the selected char ASCII code is greater than the char from the compare loop char
            // if true then bring the smaller alphabet char before the larger char in the string
            if(str[j].charCodeAt() > str[i].charCodeAt()){

                // swapping char to sort the array
                x = str[i];
                str[i] = str[j];
                str [j] = x;
            }
        }
    }
    
    // return the sorted string formed by joining the sorted char array
    return str.join('');

}
  
  
// call the function to perform the sorting and you can give your favourate string as argument; I am using 'myfavstringisa' as an example.
let sort = AlphabetSoup('myfavstringisa');

//Display the result 
console.log(sort);


// use this link to learn more about ASCII http://www.asciitable.com/

// Fun Tip: Use sort function to perform sorting and you will see some cool stuff!!

/******************************************/

//Same program Alternate solution

function AlphabetSoup(str) {
    
    // extracting the characters of the string into an array by using split function; the argument ""(double qoutes without spaces) used is for picking each character as an element of the array.
    var arr = str.split("");
    
    // built-in sort function of arrray to sort the array.
    var sortarr = arr.sort();

    //joining all the characters back from the array and assembiling to string back.
    //return the reverse string
    return sortarr.join("");

}


// Also see __proto__ of any array in the console of a web browser to find all the function we can use with arrays

// if not mentioned explicitly functions called are always inbuilt functions of javascript