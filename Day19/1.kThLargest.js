// let kthLargest = (arr, k) => {
//     if (k <= 0 || k > arr.length) {
//         return undefined; // Invalid k value
//     }

//     let kLargest = Array(k).fill(Number.NEGATIVE_INFINITY);
//     console.log(kLargest);

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > kLargest[k - 1]) {
//             for (let j = 0; j < k; j++) {
//                 if (arr[i] > kLargest[j]) {
//                     kLargest.splice(j, 0, arr[i]);
//                     kLargest.pop();
//                     break;
//                 }
//             }
//         }
//     }

//     return kLargest[k - 1];
// };

// const arr = [10, 5, 4, 3, 48, 6, 2, 33, 10];
// const k = 5; // Change this to the desired k value
// console.log(`The ${k}th largest number is: ${kthLargest(arr, k)}`);





// var findKthLargest = function (nums, k) {
//     let kthCont=[]
//     for (let i = 0; i < nums.length; i++) {
//          kthCont = nums.slice(i, k)
//         kthCont.sort();


//         if (kthCont[0] < nums[k]) {
//             kthCont.push(nums[k])
//             kthCont.slice(1);
//             k++;
//         }
//         return kthCont[0]

//     }

// };
// let nums = [3, 2, 1, 5, 6, 4]
// let k = 3
// console.log(findKthLargest(nums, k));



// var findKthLargest = function (nums, k) {
//     let kthCont = [];

//     for (let i = 0; i < nums.length; i++) {
//         kthCont = nums.slice(i, i + k); // Fix the slice indices
//         console.log("kthCont",kthCont);
//         let largest=kthCont[kthCont.length-1]
//         for(let j=0;j<kthCont.length;j++){
//             if(kthCont[j]<largest){
//                largest=kthCont[j] 
//                kthCont[0]=largest
//                console.log("[kthCont]",kthCont[0]);
//             }
//         }
//         // kthCont.sort().reverse(); // Sort in descending order

//         if (kthCont[0] < nums[i + k]) {
//             kthCont.pop(); // Remove the smallest element
//             kthCont.push(nums[i + k]);
//             console.log(kthCont);
//         }
//     }
    
//     return kthCont[0]; // Move this outside the loop
// };

// let nums = [3, 2, 1, 5, 6, 4];
// let k = 4;
// console.log(findKthLargest(nums, k)); // Output: 4



var findKthLargest = function(nums, k) {
    let kthCont = [];

    for (let i = 0; i < nums.length; i++) {
        kthCont = nums.slice(i, i + k+1); // Fix the slice indices
        let largest = kthCont[0];

        for (let j = 0; j < kthCont.length; j++) {
            if (kthCont[j] > largest) {
                largest = kthCont[j];
            }
        }

        if (largest > nums[i + k]) {
            kthCont.shift(); // Remove the smallest element using shift()
            kthCont.push(nums[i + k]);
        }
    }

    return kthCont[0];
};

let nums = [3, 2, 1, 5, 6];
let k = 2;
console.log(findKthLargest(nums, k)); // Output: 5




