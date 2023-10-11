/**
 * 
 * @param {*} num 
 * @returns 
 * step1: Create a function that will accept a parameter
 * Step2: run a while loop which will run till num is greater then 0
 * Step3: We need last digit of num for that we will do num%10
 * Step4: Initialize result with 0 and multiply result with 10 and add with last digit
 * Step5: Remove the last digit of num 
 */

const revereseInteger=(num)=>{
    let result=0
   while(num>0){

    let lastDigit=num%10;
    // console.log(lastDigit);
    result=result*10+lastDigit;
    // console.log(newNum);
num=parseInt(num/10);

   }
   return result
}
const num=123456
console.log(revereseInteger(num));
