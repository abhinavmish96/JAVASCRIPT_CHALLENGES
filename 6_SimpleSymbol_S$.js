/* function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter. */

function SimpleSymbols(str) {
    
    // a flag identifier to set the value of the result
    let flag = true;
    
    // a loop to iterate over all the string character
    // this loop is also constantly checking the flag; if flag becomes false there is no point moving forward for more iteration
    for(let i = 0; i < str.length && flag === true; i++) {
        
        // a condition to check if the char is '+' and the next char is a letter then execute the following block; i.e a nested if block
        if(str[i] === '+' && /[a-zA-Z]/.test(str[i+1])){
            
            // nested condition : if the next char after the letter is also '+' then the flag remains unchaged and index is shifted the char after the second '+'
            if(str[i+2] === '+') i += 2;
        }

        // if there is any '=' or a number just continue to the next char
        else if(str[i] === '=' || /[1-9]/.test(str[i])) continue;

        // if any of the condition fails then set the flag to false and return false
        else flag = false;
    }

    // return the boolean result    
    return flag; 
}


// call the function to check the string and you can give your favourate combination of string and symbol as argument; I am using '+a+==44==7+=+Y+' as an example for true.
let string = SimpleSymbols('+a+==44==7+=+Y+');

//Display the result 
console.log(string);

// Fun Tip: This type of code and program can be used to check a specific type of string passed; for example : email, phone number, etc


/******************************************/

//Same program Alternate solution

function SimpleSymbols(str) { 
    
    // ^, $: start-of-line and end-of-line respectively. E.g., ^[0-9]$ matches a numeric string.
    if (/^[a-zA-Z]/.test(str) || /[a-zA-Z]$/.test(str)) {
        
        // if the string starts or ends with a alphabet then return false 
        return false;
    }

    // if the alphabet char of the given string does not begin or end with '+' then return false
    else if (/[^+][a-zA-Z]/.test(str) || /[a-zA-Z][^+]/.test(str)) {
        return false;
    }

    // if the above conditions are false then return true
    else {
     return true; 
    }
           
}

//Fun Tip: http://www.ntu.edu.sg/home/ehchua/programming/howto/regexe.html ; check this link to get a better understandig of symbol used such as ^,$, etc.