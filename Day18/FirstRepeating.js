// Find first repeating character with its index from an array. You need to tell which element is having the first repetation inside an array
// const input = [1, 0, 2, 3, 4, 4, 5, 7, 7];

// // output
// 4;
let firstRepeating=(input)=>{
    for(let i=0;i<input.length;i++){
        if(input[i]==input[i+1]){
            return input[i+1]
        }
    }
    return -1

}
const input = [1, 0, 3, 3, 4, 4, 5, 7, 7];
const input1 = [1, 0, 3,  4, 5, 7];
console.log(firstRepeating(input));
console.log(firstRepeating(input1));