/*function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. */

function LetterChanges(str) { 
    
    // using trim function to trim any unwanted spaces from beginnig and end of the string
    // using toLowerCase function to convert all the char to lower case to simplify things
    str = str.trim().toLowerCase();
    
    // using length function to get the length of the string
    let len = str.length;
    
    // a newStr identifier to store modified string
    let newStr = '';
    
    // loop to go over the string's character one by one
    for(let i = 0; i < len; i++) {
        
        // condition to check if the character from the range - /[a-ce-gi-mo-su-y]/ are present in the string using test function of array resulting in true/false
        if(/[a-ce-gi-mo-su-y]/.test(str[i])){

            // newStr gets updated everytime condition is true
            // fromCharCode function used to convert ASCII code to string char
            // charCodeAt used to convert string char to ASCII code
            // the mathematical calculation helps to move to next lower case char
            newStr += String.fromCharCode(((str[i].charCodeAt(0) - 18)% 26) + 97);
        }

        // range in JS can be given in /[-]/ notation for numbers and alphabets
        else if(/[zdhnt]/.test(str[i])){

            // the mathematical calculation helps to move to next upper case char
            newStr += String.fromCharCode(((str[i].charCodeAt(0) - 18)% 26) + 65);
        }
        
        // if no condition is true then make no changes to the char
        else {
            newStr += str[i];
        }
    }
    
    return newStr; 
         
}

// call the function to change the string and you can give your favourate string as argument; I am using 'Hello' as an example.
let string = LetterChanges('Hello');

//Display the result 
console.log(string);

// Fun Tip: This program is a subset of Ceaser Cipher, Google it and try some more cool stuff!!

// if not mentioned explicitly functions called are always inbuilt functions of javascript


// use this link to learn more about ASCII http://www.asciitable.com/