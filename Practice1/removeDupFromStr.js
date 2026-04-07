// Remove duplicate characters from a string

const removeDup = (str) => {
  const count = {};
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  return Object.keys(count).join("");
};
console.log(removeDup("Programming"));
