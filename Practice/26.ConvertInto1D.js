const covertArryInOneDimension = (arr, num) => {
    // console.log(arr);
    const result = [];
    let divLen = arr.length / num;
    // console.log(divLen);
    for (let i = 0; i < arr.length; i += divLen) {
        result.push(arr.slice(i, i + divLen))
    }
    return result
}
// Output
// [
//   ["a", "b"],
//   ["c", "d"],
// ];
const input = covertArryInOneDimension(["a", "b", "c", "d"], 2);
console.log(input);
