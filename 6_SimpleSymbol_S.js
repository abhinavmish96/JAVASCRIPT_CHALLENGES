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