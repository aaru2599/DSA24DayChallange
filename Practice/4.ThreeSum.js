/**
 * 
 * @param {*} arr 
 * @returns 
 * Program to Find a triplet that sum to a given value
 */
const threeSum = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === 24) {
                    return [arr[i], arr[j], arr[k]]
                }
            }
        }
    }
}
const array = [12, 3, 4, 1, 6, 9]
console.log(threeSum(array));