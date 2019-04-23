/* function ChessboardTraveling(str) read str which will be a string consisting of the location of a space on a standard 8x8 chess board with no pieces on the board along with another space on the chess board. The structure of str will be the following: "(x y)(a b)" where (x y) represents the position you are currently on with x and y ranging from 1 to 8 and (a b) represents some other space on the chess board with a and b also ranging from 1 to 8 where a > x and b > y. Your program should determine how many ways there are of traveling from (x y) on the board to (a b) moving only up and to the right. For example: if str is (1 1)(2 2) then your program should output 2 because there are only two possible ways to travel from space (1 1) on a chessboard to space (2 2) while making only moves up and to the right. */

function ChessboardTraveling(str){
    regEx = /^(dsd)(dsd)$/
    var isFormatted = regEx.test(str);
    if (isFormatted) {
        var horShift = parseInt(str.charAt(8), 10) - parseInt(str.charAt(3), 10);
        var vertShift = parseInt(str.charAt(6), 10) - parseInt(str.charAt(1), 10);
        return factorial(horShift + vertShift) / (factorial(vertShift) * factorial(horShift));
    } else {
      return 'error'
    }
}

function factorial(num) {
    return num === 0 ? 1 : num * factorial(num - 1);
}

// call the function to check for computing chessboard travelling and you can give your favourate string as argument; I am using "(1 1)(3 3)" as an example for true.
let string = ChessboardTraveling("(1 1)(3 3)");

//Display the result 
console.log(string);

/* Detailed Explaination of the Math involved: If you move the (𝑎,𝑏) to (𝑐,𝑑) where 𝑐≥𝑎 and 𝑑≥𝑏.

In total, we know that you have to take (𝑐−𝑎)+(𝑑−𝑏) steps of which (𝑐−𝑎) of them are horizontal steps and clearly the rest are vertical moves.

That is out of (𝑐−𝑎)+(𝑑−𝑏) steps, we have to select 𝑐−𝑎 of them to be horizontal steps. Hence the number of possible moves are

(((𝑐−𝑎)+(𝑑−𝑏))/𝑐−𝑎)=(𝑐−𝑎+𝑑−𝑏)!/(𝑐−𝑎)!(𝑑−𝑏)! */

/*Number of Ways to Move:
In order to solve this problem, you need to start with a simple 
problem and then work your way to a harder one.  

Let's start with a 2 by 2  matrix, that is, a square made up of 4 unit 
squares.  Now to get from  the upper left square to the bottom right 
is going to require one move  to the right and one move down.  The 
question is, "How many ways can I  do that?"  

Let us represent a move to the right by x and a move down by  y.  
Then there are two ways to complete the process: either xy or yx. 

What about a 3 by 3 arrangment?  You will need two horizontal 
moves and  two vertical moves, that is, you need 2 x's and 2 y's.  
Let's list the  number of ways you could complete the problem:

xxyy  xyxy  xyyx  yxyx  yxxy  yyxx   - a total of six ways.

Now this problem is very similar to the one where you arrange 
letters in  a word and have repeating letters.  For the 3 by 3 
arrangment you have a  total of 4 letters (2 x's and 2 y's) but each of 
these is repeated, so that the number of ways they can be arranged is 
4!/(2!2!) = 6  where the "!" stands for factorial. */