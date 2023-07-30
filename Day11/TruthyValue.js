/**To find only truthy values from an array.
const input = ["priya", 0, "", false, null, undefined, "ate", NaN, 9];

// Output
["priya", "ate", 9];
*/
let truthuValue=(input)=>{
    var truth=[];
    for(let i=0;i<input.length;i++){
        if(input[i])
        truth.push(input[i])

    }
    return truth
}
const input1 = ["priya", 0, "", false, null, undefined, "ate", NaN, 9];
console.log(truthuValue(input1));


// Other way with the use of filter function

const input = ["priya", 0, "", false, null, undefined, "ate", NaN, 9];
const truthyValues =input.filter((value)=>value)

console.log(truthyValues);
