function SumOfNum(input, newNum) {
    const objContainer = {};
    for (let i = 0; i < input.length; i++) {
        const key = input[i];
        const num = newNum - key
        if (objContainer[num] !== undefined) {
            // console.log([key,num].length );
            return [key, num]
        }
        objContainer[key] = num

    }
    return "no pair found"

}
console.log(SumOfNum([3, 1, 4, -1, 8, 4], 0));



// const sumOFAnArray=(input)=>{
//     let count=0
// for(let i=0;i<input.length;i++){

//     if(input[i]+input[input.length-count]==0){
//         return [input[i],input[input.length-count]]
//     }
//     count++
// }

// }
// const arr=[1,2,3,-1,5]
// console.log(sumOFAnArray(arr));