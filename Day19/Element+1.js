// Create a new array by adding one to each elements of the existing array
// const input = [1, 2, 3, 4];

// // Output
// [2, 3, 4, 5];

let elemAdd = (input) => {
    let newArr = [];
    for (let i = 0; i < input.length; i++) {
        let elem = input[i] + 1
        newArr.push(elem)
    }
    return newArr

}
const input = [1, 2, 3, 4];
console.log(elemAdd(input));