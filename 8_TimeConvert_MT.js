/* function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon. */


function TimeConvert(num) {
    
    // calculating hours by dividing total minutes by 60 and taking the floor value to take hours as rational unit
    // using floor as if the result after dividing by 60 might some value in decimals values , which are probably minutes and we don't need it now.
    let hour = Math.floor( num / 60 );

    // calculating minutes by taking the reminder by 60 i.e the left over after calculating hours
    let min = num % 60;

    // combinig hours and minutes in the format asked H:M
    let time = hour +':'+ min;
    
    // return the time calculated
    return time; 
           
}


// call the function to convert minutes to huors : minutes representation and you can give your favourate number as argument; I am using '126' as an example.
let time = TimeConvert(126);

//Display the result 
console.log(time);