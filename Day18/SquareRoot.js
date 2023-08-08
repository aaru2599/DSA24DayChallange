// To find the square root of every element of an array
// const output = [4, 9, 16, 25, 36];

// // Output
// [2, 3, 4, 5, 6];
let squareRoot=(input)=>{
    let result=[]

    for(let i=0;i<input.length;i++){
        let element=input[i]
        const sqrtElem=Math.sqrt(element)
        result.push(sqrtElem)

    }
    return result
}
const input = [4, 9, 16, 25, 36,18];
console.log(squareRoot(input));