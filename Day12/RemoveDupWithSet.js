// Remove Duplicates from 2 arrays using Set method
let RemoveDup=(arr1,arr2)=>{
arr=arr1.concat(arr2)
const newArr=new Set(arr);    
console.log(newArr);
const arrResult=Array.from(newArr)
return arrResult
}
console.log(RemoveDup([1,2,3,5,4],[1,4,7,6,8]));