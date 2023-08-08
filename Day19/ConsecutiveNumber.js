// Adding an elements to the array when elements are consecutive numbers upto 10
// const inputA = [1, 2, 3, 4];

// // Output
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// /********************************/

// const inputB = [4, 2, 4, 3, 1];

// // Output
// ("Not a consecutive since 4 is repeating");
function ConsecutiveNumber(input) {
    let arr = input.sort();
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
             return `Not a consecutive since ${arr[i]} is repeating`
            }
        }
       
    }
    const newArr=[];
    for(let i=1;i<=10;i++){
        newArr.push(i)
    }
    return newArr

}
const inputA = [ 4,2, 4, 3, 1];
const inputB = [ 2, 4, 3, 1];

console.log(ConsecutiveNumber(inputA));
console.log(ConsecutiveNumber(inputB));