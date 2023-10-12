// To find kth smallest or largest element in an array
// const input = findKthSmallestOrLargest[2,1,4,3,6,5,7], 3);

// // Output
// {
//   smallest: 3,
//   largest: 5,
// }

let findKthSmallestOrLargest = (input, n) => {
    let arr = input.sort()
    let obj = {};
    obj.smallest = arr[ n - 1]
    obj.largest = arr[arr.length - n]

    return obj
}
const input = findKthSmallestOrLargest([2, 1, 4, 3, 6, 5, 7], 3);
console.log(input);