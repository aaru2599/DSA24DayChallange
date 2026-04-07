/* Reverse a string without reversing individual words
Description: Reverse the order of words in a sentence without changing the letters inside each word.

Input: "Hello World From JavaScript"

Output: "JavaScript From World Hello" */

// const revString=(str)=>{
// let res=""
// const strArr=str.split(" ")
// console.log(strArr);
// for(let i=strArr.length-1;i>=0; i--){
//     res=res+" "+strArr[i]
// }
// return res.trim()

// }

// console.log(revString("Hello World From JavaScript"));

/*  */
/*  */
/*  */
/* Reverse a string with individual words reversed
Description: Reverse the entire string including characters of each word.

Input: "Hello World"

Output: "dlroW olleH"

 */

const revString = (str) => {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res = res + str[i];
  }
  return res;
};
console.log(revString("Hello World"));
