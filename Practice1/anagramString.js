/*  Check if two strings are anagrams
Description: Determine whether two strings contain the same characters in the same frequency.

Input: "listen", "silent"

Output: true */
const anagramString = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let count = {};
  for (let char of str1) {
    count[char] = (count[char] || 0) + 1;
  }
  console.log(count);
  for (let char of str2) {
    if (!count[char]) return false;
    count[char]--;
  }
  return true;
};
console.log(anagramString("listen", "ilent"));
