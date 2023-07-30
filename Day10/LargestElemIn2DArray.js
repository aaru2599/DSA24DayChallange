/**To find the largest elements fro the 2 dimensional array.
const input = [
  [1, 2, 3, 4],
  [5, 6, 7, 9],
  [45, 76, 2, 1],
  [89, 90, 87, 9],
];

// Output
[4, 9, 76, 90];
*/
let LargestElem = (input) => {
    var greater = 0;
    const newArr = [];
    // return input
    for (let i = 0; i < input.length; i++) {
        // consohle.log(input[i]);
       const num=input[i]
        for (let j = 0; j < num.length; j++) {
            if(num[j]>greater){
                greater=num[j];
            }
        }
        newArr.push(greater)
    }
    return newArr

}
const arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 9],
    [45, 76, 2, 1],
    [89, 90, 87, 9],
];
console.log(LargestElem(arr));
