// Check if a string is an Anagram

/**function Anagram(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    arr1 = str1.split("");
    arr2 = str2.split("");
    if (arr1.length !== arr2.length) {
        return false
    }
    else {

        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr2.length; j++) {
                if (arr1[i] === arr2[j]) {
                  arr2.splice(j,1); 
                  console.log(arr2);
                }
                // break;
            }
        }
    }
    return (arr2.length>0)?false:true


}
console.log(Anagram("mandre","Arvind"));

*/

function AnagramString(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    arr1 = str1.split("").sort().join();
    arr2 = str2.split("").sort().join();
    return (arr1===arr2)?true:false
   
}
console.log(AnagramString("Anagram", "anagram"));
console.log(AnagramString("abbc", "abcd"));




