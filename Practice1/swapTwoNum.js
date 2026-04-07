/* Swap two numbers using a third variable
Input: a = 5, b = 10

Output: a = 10, b = 5

 */

// const swapTwoNum=()=>{
// let a = 5, b = 10;
// let c=a;
// a=b;
// b=c
// return {a,b}
// }
// console.log(swapTwoNum());

const swapTwoNum = () => {
  let a = 5,
    b = 10;
  a = a + b;
  b = a - b;
  a = a - b;
  return { a, b };
};
console.log(swapTwoNum());
