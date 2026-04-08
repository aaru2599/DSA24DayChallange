/* 

4. Find the longest common prefix from an array of strings
Input: ["flower", "flow", "flight"]

Output: "fl"*/

const longestSubstring = (str) => {
  for (let i = 0; i < str[0].length; i++) {
    let char = str[0][i];
    for (let j = 1; j < str.length; j++) {
      if (str[j][i] !== char) {
        return str[0].slice(0, i);
      }
    }
  }
  return str[0];
};
console.log(longestSubstring(["flower", "flow", "flight"]));
