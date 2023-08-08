// To find the occurance of the character in a string
// const input = findOccurance("cCaaAAbbbBBB")

// // Output
// { c: 1, C: 1, a: 2, A: 2, b: 3, B: 3 }

let findOccurance=(input="value")=>{

    let arr=input.split("")
    let obj={};
    for(let i=0;i<arr.length;i++){
        let key=arr[i];
        if(obj.hasOwnProperty(key)){
            obj[key]=obj[key]+1
        }
        else{
            obj[key]=1
        }
    }
    return obj
}
const input = findOccurance("cCaaAAbbbBBB")
console.log(input);
