// let kthLargest=(arr)=>{
//     let largest=0;
//     let secondlarge=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>n){
//             m=n;
//             n=arr[i]
             
//             console.log(arr);

//         }
//         else if(arr[i]>m && arr[i]<n){
//             m=arr[i];
//         }
//     }
//     console.log(n);
//     return m                                                                                                  
// }
// const arr = [10, 5, 4, 3, 48, 6, 2, 33, 10];
// console.log(kthLargest(arr));

// let kthLargest=(arr,k)=>{
//     let  newArr=[]
//     for(let i=0;i<arr.length;i++){
       
//         if(k<arr.length){
//          newArr=(arr.splice(i,k))
            
//             // console.log(newArr);
//         k++;

//         }
//             console.log(newArr);

//     }
// }
//  const arr = [10, 5, 4, 3, 48, 6, 2, 33, 10];
// console.log(kthLargest(arr,3));


function removeFirstElement(arr) {
    if (arr.length === 0) {
        return arr; // Return empty array if the input array is already empty
    }
    let arr1=arr.slice(0,3)
    
    return arr1; // Return a new array starting from index 1
}

const originalArray = [1, 2, 3, 4, 5];
const newArray = removeFirstElement(originalArray);

console.log(originalArray); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)
console.log(newArray);      // Output: [2, 3, 4, 5]



// const array = [1, 3, 5, 2, 6, 7, 4];
// const obj = {};

// for (let i = 0; i < array.length; i++) {
//   obj[i] = obj.hasOwnPropery(i) ? obj[i]++ : 1;
// }

// console.log(obj);

const array = [1, 3, 5, 2, 6, 7, 4,4];
const obj = {};

for (let i = 0; i < array.length; i++) {
  obj[array[i]] = obj.hasOwnProperty(i) ? obj[i] + 1 : 1;
}


console.log(obj);