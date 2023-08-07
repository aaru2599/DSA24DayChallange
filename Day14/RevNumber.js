/**  Reverse of a nuber using converting into string with or withour builtin methods
step1:give a declare a number and initialize with 0
step2:run a while loop it will execute till num is not going to 0
step3:we need last digit of num so use % for get the last digit
step4:multiplied the initialized num and add with recieved digit
step5:we need to remove last digit of num so we have to use Math.Floor it will give the Number not in decimal
*/

let revNum=(num)=>{
    var newNum=0;
    while(num!==0){
        let digit=num%10
        // console.log(digit);
        newNum=newNum*10+digit;
        // console.log(newNum);
        // Math.Floor() is used to round a number down to the nearest integer,
        //  which is less than or equal to the original number.
        num=Math.floor(num/10); 
        
       
        
    }
    return newNum
    
    // return result
}
console.log((revNum(1234)));


