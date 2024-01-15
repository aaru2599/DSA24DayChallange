
/**
 * 
 * @param {*} arr 
 * @returns 
 * Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.
 * 
 * Step1:First find the occurance count of every element
 * Step2:Push into the object
 * Step3:Compare the value of that object with each other
 * Step4:return compared result
 */


// const uniqueOccurance = (arr) => {
//     let obj = {}
//     for (let i = 0; i < arr.length; i++) {
//         var key = arr[i]

//         obj.hasOwnProperty(key) ?
//             obj[key] = obj[key] + 1 :
//             obj[key] = 1
//     }
//     // return obj
//     const values = Object.values(obj)
//     // console.log("values",values);
//     const result = values.every((val, index) => values.indexOf(val) === index)
//     return result
// }
// const arr = [1, 2]
// console.log(uniqueOccurance(arr));

/**
 * @param {number[]} arr
 * @return {boolean}
 * 
 * Step1:First find the occurance count of every element
 * Step2:Push into the object
 * Step3:Convert the values of object into the array
 * Step4:Push that array into set so duplicates will remove
 * Step5:Then compare the length old array and new set array and return it. 
 */
var uniqueOccurrences = function (arr) {
    let obj = {};
    for (let key of arr) {
        obj.hasOwnProperty(key) ?
            obj[key] = obj[key] + 1 :
            obj[key] = 1
    }
    const newArr = Object.values(obj);
    const newSet = [...new Set(newArr)];
    return newSet.length === newArr.length

};
arr = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]
console.log(uniqueOccurrences(arr));