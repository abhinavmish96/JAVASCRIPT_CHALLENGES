/* function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string. */


function AlphabetSoup(str) { 

    // code goes here
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
  
  


  function AlphabetSoup(str) { 

    var arrays = str.split("");
    var reversearrays = arrays.sort();
    var result = reversearrays.join("");  
     
    
      return result; 
             
    }