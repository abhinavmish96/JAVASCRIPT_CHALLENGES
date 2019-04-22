/* function KaprekarsConstant(num) take the num parameter being passed which will be a 4-digit number with at least two distinct digits. Your program should perform the following routine on the number: Arrange the digits in descending order and in ascending order (adding zeroes to fit it to a 4-digit number), and subtract the smaller number from the bigger number. Then repeat the previous step. Performing this routine will always cause you to reach a fixed number: 6174. Then performing the routine on 6174 will always give you 6174 (7641 - 1467 = 6174). Your program should return the number of times this routine must be performed until 6174 is reached. For example: if num is 3524 your program should return 3 because of the following steps: (1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174. */

function KaprekarsConstant(num){

    //a counter to count the number of iteration to reach Kaprekars Constant
    let counter = 0;
    while(num !== 6174){
        num = num.toString();
        let ascending = num.split('').sort().join('');
        let descending = ascending.split('').reverse().join('');
        num = parseInt(descending) - parseInt(ascending);
        if(num < 1000) num = num * 10;
        if(num === 0) return 'All digit same';
        counter++;
    }

    return counter;
}

// call the function to perform the comparison and you can give your favourate number as argument; I am using '2111' as an example.
let check = KaprekarsConstant(2111);

//Display the result 
console.log(check);