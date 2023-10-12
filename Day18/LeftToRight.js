function partitionArray(arr) {
    let countOne = 0;

    // Count the number of zeros
    for (let num of arr) {
        if (num === 1) {
            countOne++;
        }
    }

    // Fill the array with "1"s
    for (let i = 0; i < arr.length; i++) {
        if (i < countOne) {
            arr[i] = 1;
        } else {
            arr[i] = 0;
        }
    }
    return arr
}

// let arr = ;


// Print the modified array
console.log(partitionArray([1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0]));
