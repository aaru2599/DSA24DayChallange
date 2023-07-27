/**
 * To check the string or number is palindrome or not
 * ( ex: 121,madam,anna) using reverse method
 * @param {*} input 
 * @returns 
 */

function PalindromString(input="value") {
    //  var input=Number(inp)
    input=input.toLowerCase();

    var revInput=input.split("").reverse().join("")
    if(input===revInput){
        return true
    }
    return false

    
}
console.log(PalindromString("121"));