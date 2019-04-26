/* function MaximalSquare(strArr) take the strArr parameter being passed which will be a 2D matrix of 0 and 1's, and determine the area of the largest square submatrix that contains all 1's. A square submatrix is one of equal width and height, and your program should return the area of the largest submatrix that contains only 1's. For example: if strArr is ["10100", "10111", "11111", "10010"] then this looks like the following matrix: 
1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0 

For the input above, you can see the bolded 1's create the largest square submatrix of size 2x2, so your program should return the area which is 4. You can assume the input will not be empty. */

function MaximalSquare(strArr){

    // using map from array prototype for converting each element of the given array into sub array and storing those subarrays into parent array named fullArray
    let fullArray = strArr.map(val => val.split(''));

    let initArray = initialEval(fullArray);
    if (initArray.length === 0) {
        return 0;
    }
    count = 1;
    while (initArray.length) {
        initArray = initArray.filter(val => {
            return testOne(fullArray, count + 1, val[0], val[1]);
        })
        count++;
        if (count > 10) break;
    }
    
    return Math.pow(count - 1, 2);
}

function initialEval (arr) {
    // empty array
    let initArray = [];
    // using forEach protoype on the argument arr to get the element and the row number
    arr.forEach((row, rowNum) => {
        // using forEach protoype on the sub array row to get the element and the column number
        row.forEach((val, colNum) => {
            // if the element is 1 only then push the row and column number to the initArray as a sub array
            if (val === '1') {
                initArray.push([rowNum, colNum]);
            }
        });
    });
    
    // return initArray with the all positions of '1'
    return initArray;
}

function testOne(arr, size, r, c) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (!arr[r + i] || !arr[r + i][c + j] || arr[r + i][c + j] !== '1') {
                return false;
            }
        }
    }
    
    return true;
}

// call the function for computing Maximal square and you can give your favourate array of string as argument; I am using "["0111", "1111", "1111", "1111"]" as an example for true.
let result = MaximalSquare(["0111", "1111", "1111", "1111"]);

//Display the result 
console.log(result);