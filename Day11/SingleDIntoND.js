/**Converting one dimensional array into n dimensional array using slice.
const input = covertArryInOneDimension(["a", "b", "c", "d"], 2);

// Output
[
  ["a", "b"],
  ["c", "d"],
];
*/

let covertArryInOneDimension=(arr,num1)=>{
  let   num=arr.length/num1
    var newArr=[]
    for(let i=0;i<arr.length;i+=num){
        newArr.push(arr.slice(i,i+num));
       
    }
    return newArr
}
const input = covertArryInOneDimension(["a", "b", "c", "d"], 2);
console.log((input));