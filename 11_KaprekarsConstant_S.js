/* function KaprekarsConstant(num) take the num parameter being passed which will be a 4-digit number with at least two distinct digits. Your program should perform the following routine on the number: Arrange the digits in descending order and in ascending order (adding zeroes to fit it to a 4-digit number), and subtract the smaller number from the bigger number. Then repeat the previous step. Performing this routine will always cause you to reach a fixed number: 6174. Then performing the routine on 6174 will always give you 6174 (7641 - 1467 = 6174). Your program should return the number of times this routine must be performed until 6174 is reached. For example: if num is 3524 your program should return 3 because of the following steps: (1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174. */

function KaprekarsConstant(num){

    //a counter to count the number of iteration to reach Kaprekars Constant
    let counter = 0;

    // a loop until 6174 is reached
    while(num !== 6174){

        // converting the number to string
        num = num.toString();

        // calculating the ascending format for the four digit number
        let ascending = num.split('').sort().join('');
        // calculating the descending format for the four digit number
        let descending = ascending.split('').reverse().join('');
        // calculating the difference between the ascending and descending to get to next step
        // also converting the ascending and descending from string to a number
        num = parseInt(descending) - parseInt(ascending);
        // checking if the number becomes less than four digit then converting it back to four digit
        if(num < 1000 && num >= 100) num = num * 10;
        if(num < 100 && num >= 10) num = num * 100;
        if(num < 10 && num >= 1) num = num * 1000;
        // if all digit became same then we need to stop the program and return the message
        if(num === 0) return 'All digit same';
        // if all well counter goes on
        counter++;
    }

    // return the counter
    return counter;
}

// call the function to perform the operation and you can give your favourate number as argument; I am using '2111' as an example.
let check = KaprekarsConstant(2111);

//Display the result 
console.log(check);