/**
 * 
 * @param {*} input 
 * @returns 
 * Step1:Create a empty object
 * step2: iterate every character in string 
 *        get every character as key
 * Step3:Check if character present in that object
 *       increase the key,else
 *       key value will be 1
 * step4:return Object              
 */


// with ternary operator
const findOccurrance = (input) => {
    let newStr = input.toLowerCase();

    const newObj = {};
    for (let i = 0; i < newStr.length; i++) {
        var charKey=newStr[i]
        if (charKey !== " ") {
            newObj.hasOwnProperty(charKey) ? (newObj[charKey] = newObj[charKey] + 1) : (newObj[charKey] = 1);
        }
    }
    return newObj;
};

let string = "Ankit jain";
console.log(findOccurrance(string));




// With if else Statement

// const findOccurrance = (input) => {

//     let newStr = input.toLowerCase()

//     const newObj = {};
//     for (let i = 0; i < newStr.length; i++) {
//         let charKey = newStr[i]
//         if (newObj.hasOwnProperty(charKey)) {
//             newObj[charKey] = newObj[charKey] + 1
//         }
//         else {
//             newObj[charKey] = 1
//         }
//     }
//     return newObj
// }
// let string = "Ankit jain";
// console.log(findOccurrance(string));


