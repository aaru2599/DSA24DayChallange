const input = ["priya", 0, "", false, null, undefined, "ate", NaN, 9];

const truthyVal = (arr) => {
    // console.log(arr);
    const result=[];
    for(let i=0;i<arr.length;i++){
        const elem=arr[i]
        if(elem){
            result.push(elem)
        }
    }
    return result
}
console.log(truthyVal(input));
// Output
// ["priya", "ate", 9];