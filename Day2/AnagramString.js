/**Check if a string is an Anagram
 * 
 * @param {*} input 
 * @returns 
 */
function palindromString(input="value") {
    input=input.toLowerCase();
    str="";
    for(let i=input.length-1;i>=0;i--){
        const char=input.charAt(i);
        str=str+char
    }
    if(str===input){
        return true
    }
    return false
    
}
console.log(palindromString("Madam"));