/* function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon. */


function TimeConvert(num) {
    
    
    let hour = Math.floor( num / 60 );
    let min = num % 60;
    let time = hour +':'+ min;
    
    return time; 
           
}


// call the function to convert minutes to huors : minutes representation and you can give your favourate number as argument; I am using '126' as an example.
let time = TimeConvert(126);

//Display the result 
console.log(time);