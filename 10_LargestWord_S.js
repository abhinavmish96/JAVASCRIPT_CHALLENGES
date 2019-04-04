/* function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. */


function LargestWord(){

    // using trim function to trim any unwanted spaces from beginnig and end of the string
    // using replace function to remove any other char than mentioned in the range /[^]/: (range : /[]/; not : ^)
    // except from range a-z, A-Z and [\s : space ] remove 
    // g in the replace range stands for the global modifier; which means find all matches and don't stop after the first match is found
    // extracting the characters of the string into an array by using split function; the argument ""(double qoutes without spaces) used is for picking each character as an element of the array.
    let word = sen.trim().replace(/[^a-zA-Z\s]/g, '').split(" ");

    // empty string identifier to store the largest word
    let largeWord = '';

    // loop to go over the word array
    for(let i = 0; i < word.length ; i++) {

        // if the word array element is greater in length than store in the largeWord as the largest word
        if(word[i].length > largeWord.length) largeWord = word[i];
    }
    
    // return the largest word
    return largWord;

}


// call the function to check for the largest word int the sentence and you can give your favourate sentence as argument; I am using 'fun$** time!' as an example for true.
let string = LargestWord('fun$** time!');

//Display the result 
console.log(string);