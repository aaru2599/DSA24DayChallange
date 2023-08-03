/** Unique values only from 2 arrays i.e. union values
const inputA = [1, 2, 3, 4, 5, 1];
const inputB = [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8];

// Output
[1, 2, 3, 4, 5, 6, 7, 8];
*/
let uniqueValue=(arr1,arr2)=>{
const arr=arr1.concat(arr2);
const newSet=new Set(arr);
const array=Array.from(newSet)
return array

}
const inputA = [1, 2, 3, 4, 5, 1];
const inputB = [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8];

console.log(uniqueValue(inputA,inputB));


// const inputA = [1, 2, 3, 4, 5, 1];
// const inputB = {
//     name:"Arvind",
//     age:21,
//     Add:"chhindwara"

// };

// const spredop= {...inputB}
// console.log(...inputA, spredop);