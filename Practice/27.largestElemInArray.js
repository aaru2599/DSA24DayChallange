/**
 * To find the largest elements fro the 2 dimensional array.
const input = [
  [1, 2, 3, 4],
  [5, 6, 7, 9],
  [45, 76, 2, 1],
  [89, 90, 87, 9],
];

// Output
[4, 9, 76, 90];
 */
const largestElem = (arr) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        let elem = arr[i];
        let largest = elem[0];

        for (let j = 0; j < elem.length; j++) {

            if (elem[j] > largest) {
                largest = elem[j];

            }
        }
        result.push(largest)
    }
    return result
}
const input = [
    [1, 2, 3, 4],
    [5, 6, 7, 9],
    [45, 76, 2, 1],
    [89, 90, 87, 9],
];
console.log(largestElem(input));