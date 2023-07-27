/**Swapping of 2 numbers with third variable
 * 
 * 
 */
function SwapNumber(params1,params2) {
    if(!isNaN(params1,params2)){
        let param3=params1;
    params1=params2;
    params2=param3;
   return `${params1} ${params2}`
    }
    return "invalis input"
    
}
console.log(SwapNumber(10,20));
console.log(SwapNumber("Abcd"));