/* Check if a string or number is a palindrome using reverse
Input: "madam"

Output: true */

const palindrom = (str) => {
  let leng = str.length - 1;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[leng - i]) {
      return false;
    }
  }
  return true;
};
console.log(palindrom("madam"));
