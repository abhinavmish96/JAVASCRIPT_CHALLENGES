/* function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. */


function LargestWord(){

    let word = sen.trim().replace(/[^a-zA-Z\s]/g, '').split(" ");
    let largWord = '';
    for(let i = 0; i < word.length ; i++) {
        if(word[i].length > largWord.length) largWord = word[i];
    }
    
    return largWord;

}


// call the function to check for the largest word int the sentence and you can give your favourate sentence as argument; I am using 'fun$** time!' as an example for true.
let string = LargestWord('fun$** time!');

//Display the result 
console.log(string);