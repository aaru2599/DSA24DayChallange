/**
 * 
 * @param {*} arr 
 * @param {*} n 
 * @param {*} s 
 * @returns 
 * Step1:create a arrow function that accept parameters
 * Step2:run a loop on array
 * Step3:initialize current sum as 0 and run a loop which whouls be start from previous looped element
 * Step4:Add the elements from start initial element
 * Step5:Check if currentSum is equal to the given sum 
 *          then return 
 * 
 * 
 */

const subArraySum = (arr, n, s) => {
    for (let i = 0; i < n; i++) {
        let currentSum = 0;
        for (let j = i; j < n; j++) {
            currentSum+= arr[j]
            if (currentSum === s) {
                return [i , j ]
            }
        }

    }

    return [-1]
}
N = 10, S = 15
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(subArraySum(arr, N, S));