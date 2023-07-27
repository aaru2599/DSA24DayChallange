/**
 * String reverse without using inbult function
 *  Str="ReverseString"
 * Step1:Create a empty variable
 * Step2:Traverse the string from right to left
 * Step3:Store and concate every character with empty variable
 * Step4Return that concadinated string 
 * */

function ReverseString(input="value") {

   if(isNaN(input)){
    result="";
    for(let i=input.length;i>=0;i--){
        const char=input.charAt(i);
        result=result+char;
    }
    return result
   }
   return "invalid String   "
}
console.log(
ReverseString("Reversed String")

);