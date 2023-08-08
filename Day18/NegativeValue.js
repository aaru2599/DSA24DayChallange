// To find the negative values in an array or 2D Array
// const input = [
//   [1, -1],
//   [-1, -1],
// ];

// // Output
// 3;

function negativeValue(input) {
    //initialize count with zero
    let count = 0;
    //combined 2D array into single D
    const combinedArray = input.flat();

    console.log(combinedArray);
    //iterate every element with for loop
    for (let i = 0; i < combinedArray.length; i++) {
        // check if element are less then zero then count will be increase
        if (combinedArray[i] < 0) {
            count++;
        }
    }
    return count
}
const input = [
    [1, -1],
    [-1, -1],
];
console.log(negativeValue(input));  
