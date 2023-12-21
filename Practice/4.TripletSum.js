/**
 * 
 * @param {*} arr 
 * @returns 
 * Program to Find a triplet that sum to a given value
 */
const tripletSum = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === 24) {
                    return `${arr[i]}, ${arr[j]}, ${arr[k]}`
                }
            }
        }
    }
}
const array = [12, 3, 4, 1, 6, 9]

console.log(tripletSum(array));

const threeSum=(array,target)=>{
for(let i=0;i<array.length;i++){
    const firstNo=array[i]
    for(let j=i+1;j<array.length;j++){
        const secNo=array[j]
        const thirdNo=array[j+1]
        if((firstNo+secNo+thirdNo)===target)
        {
            return [ firstNo, secNo, thirdNo]
        }
        const newObj={}
        newObj[thirdNo]=true
        if(newObj.hasOwnProperty(thirdNo)){
            return [ firstNo, secNo, thirdNo]
        }
    }
}
}
console.log(threeSum([1,2,3,4,5,6],8));



/**
 * Step 1   - Iterate the first loop
 * Step 2   - Iterate the second loop & keep saving all variables into object
 * Step 3   - Find the difference & find k
 * @param {*} arr
 * @param {Number} k
 */
const findThreePair = (arr, k) => {
    for (let i = 0; i < arr.length; i++) {
      const firstNo = arr[i];
  
      const mapping = {};
  
      for (let ii = i + 1; ii < arr.length; ii++) {
        const secondNo = arr[ii];
        const diff = k - (secondNo + firstNo);
  
        if (mapping.hasOwnProperty(diff)) {
          return [firstNo, secondNo, diff];
        }
  
        mapping[secondNo] = true;
      }
    }
  };
  
  const findThreePairV2 = (arr, k) => {
    for (let i = 0; i < arr.length; i++) {
      const firstNo = arr[i];
  
      const mapping = new Map();
  
      for (let ii = i + 1; ii < arr.length; ii++) {
        const secondElem = arr[ii];
        const diff = k - (firstNo + secondElem);
        if (mapping.has(diff)) {
          return [firstNo, secondElem, diff];
        }
  
        mapping.set(arr[ii], true);
      }
    }
  
    return null;
  };
  
  //console.log(findThreePairV2([1, 2, 3, 4, 5, 6, 7, 8, 9], 9));
  
  const generateRandomArray = (size) => {
    const arr = [];
    for (let i = 0; i < size; i++) {
      arr.push(Math.floor(Math.random() * 10000)); // Adjust the range if needed
    }
    return arr;
  };
  
  const testPerformance = () => {
    const inputArray = generateRandomArray(50000);
    const k = 4600;
  
    const startTimeV1 = performance.now();
    findThreePair(inputArray, k);
    const endTimeV1 = performance.now();
    const executionTimeV1 = endTimeV1 - startTimeV1;
  
    const startTimeV2 = performance.now();
    findThreePairV2(inputArray, k);
    const endTimeV2 = performance.now();
    const executionTimeV2 = endTimeV2 - startTimeV2;
  
    console.log(
      `Execution time for findThreePair: ${executionTimeV1.toFixed(
        4
      )} milliseconds`
    );
    console.log(
      `Execution time for findThreePairV2: ${executionTimeV2.toFixed(
        4
      )} milliseconds`
    );
  };
  
  testPerformance();
  