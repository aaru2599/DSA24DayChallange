/**Find factorial of user input number
 * 
 * 
 * Step1:Convert the input into the number use pf Number()function
 * Step2:Check if input is string then return invalid num
 * Step3:Declared a variavle and initialize with 1
 * Step4:traverse the number from number to 1
 *       multiply travers number with variable   
 * Step5:Return the variavle
 */

function factorial(input) {

num=Number(input)
   if(isNaN(num)){
return "please enter valid number";
   }
   else{
    let fact = 1;
    for (let index = num; index > 0; index--) {
        fact = fact * index

    }
    return fact

   }
}
console.log(factorial(5));
console.log(factorial("5"));
console.log(factorial("4ABc"));
