/* Find the longest word in a sentence
Description: Return the longest word from a sentence.

Input: "JavaScript is extremely powerful"

Output: "extremely" */

const longestWord=(str)=>{
let longest=""
const strArr=str.split(" ")
console.log(strArr);

for(let word of strArr){
    if(longest.length<word.length){
        longest=word
    }
}
return longest
}
console.log(longestWord("JavaScript isdddfsdfsdfdsfdsf extremely powerful"));
