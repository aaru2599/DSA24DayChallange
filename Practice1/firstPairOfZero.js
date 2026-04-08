/* Find the first pair whose sum is zero
Input: [-3, 1, 3, 4, -1]

Output: [-3, 3] */

// const firstPairOfZero=(arr)=>{
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;i<arr.length;j++){
//         if(arr[i]+arr[j]===0){
//             return [arr[i],arr[j]]
//         }
//     }
// }

// }
// console.log(firstPairOfZero([-3, 1, 3, 4, -1]));

/* . Find all pairs whose sum is zero
Input: [-2, 2, -1, 1, 3]

Output:

[[-2, 2], [-1, 1]] */

const findAllPair = (arr) => {
const result=[];
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]===0){
            result.push([arr[i],arr[j]])
        }
    }
}
return result

};
console.log(findAllPair([-2, 2, -1, 1, 3]));
