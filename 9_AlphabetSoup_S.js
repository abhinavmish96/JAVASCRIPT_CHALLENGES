/* function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string. */


function AlphabetSoup(str) {
    
    let x = '';
    str = str.trim().toLowerCase().split('');
    for(let j = 0; j < str.length ; j++){
        for(let i = j + 1; i < str.length ; i++){
            if(str[j].charCodeAt() > str[i].charCodeAt()){
                x = str[i];
                str[i] = str[j];
                str [j] = x;
            }
        }
    }

return str.join('');

}
  
  
// call the function to perform the sorting and you can give your favourate string as argument; I am using 'myfavstringisa' as an example.
let sort = AlphabetSoup('myfavstringisa');

//Display the result 
console.log(sort);

// Fun Tip: Use sort function to perform sorting and you will see some cool stuff!!

/******************************************/

//Same program Alternate solution

function AlphabetSoup(str) {
    
    // extracting the characters of the string into an array by using split function; the argument ''(single qoutes without spaces) used is for picking each character as an element of the array.
    var arr = str.split("");
    
    // built-in sort function of arrray to sort the array.
    var sortarr = arr.sort();

    //joining all the characters back from the array and assembiling to string back.
    //return the reverse string
    return sortarr.join("");

}


// Also see __proto__ of any array in the console of a web browser to find all the function we can use with arrays

// if not mentioned explicitly functions called are always inbuilt functions of javascript

// use this link to learn more about ASCII http://www.asciitable.com/