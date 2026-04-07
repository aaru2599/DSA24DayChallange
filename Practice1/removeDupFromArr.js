/* Remove duplicate elements from an array and count occurrences
Description: Given an array of numbers, return:

an array of unique elements
an object representing the frequency of each element
Input: [1, 2, 2, 3, 3, 3]

Output:

{
  unique: [1, 2, 3],
  count: { 1: 1, 2: 2, 3: 3 }
} */

//   const removeDupFromArr=(arr)=>{
// const count={};
// for(let elem of arr){
//     count[elem]=(count[elem]||0)+1
// }
// const unique=Object.keys(count).map(Number)
// return {unique,count}
//   }
//   console.log(removeDupFromArr([1, 2, 2,  3, 3]));

/*  Remove duplicate elements using filter
Description: Remove duplicate values from an array using the filter method.

Input: [1, 2, 2, 3, 4, 4]

Output: [1, 2, 3, 4] */

const removeDup = (arr) => {
  const res = arr.filter((char, index, arr) => arr.indexOf(char) === index);
  return res;
};

console.log(removeDup([1, 2, 2, 3, 4, 4]));
