Array.prototype.groupBy = function (fn) {
    return this.reduce((result,item)=>{
const key=fn(item);
if(!result[key]){
    result[key]=[]
}
result[key].push(item);
return result
    },{})
}; 

// Example 1
const example1Array = [
    {"id": "1"},
    {"id": "1"},
    {"id": "2"}
];
const example1Fn = function (item) {
    return item.id;
};
const example1Output = example1Array.groupBy(example1Fn);
console.log(example1Output);

// Example 2
const example2Array = [
    [1, 2, 3],
    [1, 3, 5],
    [1, 5, 9]
];
const example2Fn = function (list) {
    return String(list[0]);
};
const example2Output = example2Array.groupBy(example2Fn);
console.log(example2Output);

// Example 3
const example3Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const example3Fn = function (n) {
    return String(n > 5);
};
const example3Output = example3Array.groupBy(example3Fn);
console.log(example3Output);
