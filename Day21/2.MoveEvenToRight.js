// Sort an array of an element by parity means even then odd elements
// const input = sortByParity([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// // Output
// [2, 4, 6, 8, 1, 3, 5, 7, 9];

// function sortByParity(arr) {
//     arr.sort((a, b) => {
//       if (a % 2 === 0 && b % 2 !== 0) {
//         return -1; // a comes before b
//       } else if (a % 2 !== 0 && b % 2 === 0) {
//         return 1; // b comes before a
//       } else {
//         return a - b; // maintain the relative order for even or odd elements
//       }
//     });
  
//     return arr;
//   }
  
//   const input = [11,12, 2, 3, 4, 5, 6, 7, 8, 9];
//   const output = sortByParity(input);
//   console.log(output);
  

//   ===================Another way=====================

function sortByParity(arr) {
const evenElem=arr.filter(num=>num%2==0)
const oddElem=arr.filter(num=>num%2!==0)
// console.log(evenElem);
// console.log(oddElem);
return evenElem.concat(oddElem)

}
const input = [11,12, 2, 3, 4, 5, 6, 7, 8, 9];
  const output = sortByParity(input);
  console.log(output);