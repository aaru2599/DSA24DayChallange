const uniqueVal = (input1, input2) => {
    const arr = [...input1, ...input2];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === i) {
            result.push(arr[i])
        }
    }

    return result;
};

const inputA = [1, 2, 3, 4, 5, 1];
const inputB = [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8];
console.log(uniqueVal(inputA, inputB));
