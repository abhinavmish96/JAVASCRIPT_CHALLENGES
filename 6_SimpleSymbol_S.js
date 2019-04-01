/*function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter. */

function SimpleSymbols(str) {
    
    let flag = true;
    
    for(let i = 0; i < str.length && flag === true; i++) {
       
        if(str[i] === '+' && /[a-zA-Z]/.test(str[i+1])){
            if(str[i+2] === '+') {
                flag = true;
                i += 2;
            }
        }
        else if(str[i] === '=' || /[1-9]/.test(str[i])) continue;
        else flag = false;
    }

    return flag; 
}


// call the function to check the string and you can give your favourate string as argument; I am using '+a+==44==7+=+Y+' as an example for true.
let string = SimpleSymbols('+a+==44==7+=+Y+');

//Display the result 
console.log(string);


// Fun Tip: Use recursion function to perform addditon and you will see some cool stuff!!

/******************************************/

//Same program Alternate solution

function SimpleSymbols(str) { 
    
    // ^, $: start-of-line and end-of-line respectively. E.g., ^[0-9]$ matches a numeric string.
    if (/^[a-zA-Z]/.test(str) || /[a-zA-Z]$/.test(str)) {
        return false;
    }
    else if (/[^+][a-zA-Z]/.test(str) || /[a-zA-Z][^+]/.test(str)) {
        return false;
    }
    else {
     return true; 
    }
           
  }