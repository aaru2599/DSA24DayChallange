const input = ["priya", 0, "", false, null, undefined, "ate", NaN, 9];

const truthyVal = (arr) => {
    // console.log(arr);
    const result = arr.filter((item) => typeof item === 'string' || (!isNaN(item) && item !== null && item !== undefined))
    return result
}
console.log(truthyVal(input));
// Output
// ["priya", "ate", 9];