/*Find Duplicate Objects in Array

// Output:
// [{ a:1, b:2 }]
 */
// const arr = [
//   { a: 1, b: 2 },
//   { a: 3, c: 4 },
//   { b: 5, c: 6 }
// ];

// const objectFrequency=(arr)=>{
// const grouped={}
// for(let elem of arr){
// const keys=Object.keys(elem)
// console.log(keys);
// for(let key of keys){
// grouped[key]=(grouped[key]||0)+1
// }
// }
// return [grouped]

// }
// console.log(objectFrequency(arr));


const arr = [
  { a: 1, b: 2 },
  { a: 1, b: 2 },
  { a: 2, b: 3 }
];

const foundDuplicates=(arr)=>{
const map=new Map()
const result=[];
for(let obj of arr){
    console.log(obj);
    const key=JSON.stringify(obj);
map.set(key, (map.get(key)||0)+1)
    console.log("@AM",map.entries())
}
for(let [key, count] of map.entries()){
    console.log({key,count});
    if(count>1){
        result.push(key)
    }
}
return JSON.parse(result)
}
console.log(foundDuplicates(arr));

