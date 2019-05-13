/* function CorrectPath(str) read the str parameter being passed, which will represent the movements made in a 5x5 grid of cells starting from the top left position. The characters in the input string will be entirely composed of: r, l, u, d, ?. Each of the characters stand for the direction to take within the grid, for example: r = right, l = left, u = up, d = down. Your goal is to determine what characters the question marks should be in order for a path to be created to go from the top left of the grid all the way to the bottom right without touching previously travelled on cells in the grid. 

For example: if str is "r?d?drdd" then your program should output the final correct string that will allow a path to be formed from the top left of a 5x5 grid to the bottom right. For this input, your program should therefore return the string rrdrdrdd. There will only ever be one correct path and there will always be at least one question mark within the input string.  */

function CorrectPath(str){

    // 5X5 matrix grid
    let arr = [[0,1,2,3,4],[0,1,2,3,4],[0,1,2,3,4],[0,1,2,3,4],[0,1,2,3,4]];
    let step = str.split('');
    let currPos = arr[0][0];
    let startPos = arr[0][0];
    let finPos = arr[4][4];
    //create an array to hold the positions of the question marks
    let blankArray = [];
    //put the position of the question marks into the array
    str.split('').forEach((val, ind) => {
        if (val === '?')blankArray.push(ind);
    });
    let num = blankArray.length;
    //we are going to try each possibility until we find one that works,  This will be 4^num permutations
    let total = Math.pow(4, num);
    // return the result
    return str;
}

function right (array,i,j){
    if (j >= 4) return array[i][j];
    else return array[i][j+1];
}

function left (array,i,j){
    if (j <= 0) return array[i][j];
    else return array[i][j-1];
}

function up (array,i,j){
    if (i <= 0) return array[i][j];
    else return array[i+1][j];
}

function down (array,i,j){
    if (i >= 4) return array[i][j];
    else return array[i+1][j];
}

// call the function to check for the Correct Path in the sentence and you can give your favourate sentence as argument; I am using '???rrurdr?' as an example.
let string = CorrectPath("???rrurdr?");

//Display the result 
console.log(string);