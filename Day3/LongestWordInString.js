/**
 * To find longest word from a string using 
 * (for of Loop) means iterate by an elements not by indexing
 */
function LongestWord(input="value") {
    let longestWord="";
    let wordArr=input.split(" ");
    for(let word of wordArr){
        if(word.length>longestWord.length){
            longestWord=word;
        }
    }
    return longestWord
    
}
console.log(LongestWord("This is the longest word string"));