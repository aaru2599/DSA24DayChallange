/* Find factorial of a number
Description: Calculate the factorial of a given non-negative integer.

Input: 5

Output: 120 */

const findFactorial = (num) => {
  if (num === 0) return 1;
  return num * findFactorial(num - 1);
};
console.log(findFactorial(5));
