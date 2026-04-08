/* Count vowels and their occurrences
Input: "education"

Output:

{ a: 1, e: 2, i: 1, o: 1, u: 1 } */

const countVowels = (str) => {
  const vowels = "aeiou";
  const counts = {};
  for (let char of str) {
    if (vowels.includes(char)) {
      counts[char] = (counts[char] || 0) + 1;
    }
  }
  return counts
};
console.log(countVowels("education"));
