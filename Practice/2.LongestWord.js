/**
 * 
 * @param {*} input 
 * find the longest word in string
 * 
 * Step1:convert this string in to an array 
 * step2:declare a longWord as empty
 * step3:iterate bthe array
 *       Check if element length is greater then declared variable 
 *       then initialize thye variable with element
 *Step4:return that longWord element
     */

const longestWord = (input) => {
    let longWord = "";
    let inputArr = input.split(" ")
    // console.log("inputArr",inputArr);
    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i].length > longWord.length) {
            longWord = inputArr[i]
        }
    }
    return longWord

}
let string = "Hello my name is Ankit , i am from morena"
console.log(longestWord(string));