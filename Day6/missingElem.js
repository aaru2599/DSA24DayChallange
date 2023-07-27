function findMissingAndSum(arr) {
    const n=arr.length+1

   const sum1=((n)*(n+1))/2;
//   const sum=Number(sum1)
   let sum2=0;
    for(let i=0;i<arr.length;i++){
        sum2+=arr[i]
       
    }
    const missingNum=sum1-sum2
    return missingNum
    
  }
  
  // Example usage:
//   const myArray =;
//   const result = findMissingAndSum(myArray);
  console.log(findMissingAndSum([1, 2, 4, 6, 3, 7, 8])); // Output: 27 (sum of 1, 3, 4, 7, and the missing element 2)
  