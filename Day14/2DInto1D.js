/** Convert 2D/3D array into 1D using reduce function and inbuilt function i.e flat
// input
const arr = [
  ["a", "b"],
  ["c", "d"],
  ["e", "f"],
];

// Output
["a", "b", "c", "d", "e", "f"];
*/


const arr = [
    ["a", "b"],
    ["c", "d"],
    ["e", "f"],
  ];
  
  const conversionArr=arr.reduce((para1,para2)=>{
    return para1.concat(para2)
    
  },[]);
  console.log(conversionArr);  


// ---------------------Another way to Solve the problem---------------------------

function FlatterArr(arr) {
  const flatArr=arr.flat()
  return flatArr
}

const arr1 = [
  ["a", "b"],
  ["c", "d"],
  ["e", "f"],
];
console.log(FlatterArr(arr1));

// ========================Another way to solve this issue===================

function Addition(params) {
  
  const result=params.reduce((accumelator,currentValue)=>accumelator.concat(currentValue))
  return result
}

const input = [
  ["a", "b"],
  ["c", "d"],
  ["e", "f"],
];
console.log(Addition(input));
