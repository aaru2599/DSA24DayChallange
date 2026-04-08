/* Generate Fibonacci series up to N terms
Input: 7

Output: [0, 1, 1, 2, 3, 5, 8] */

// const fibonacci=(num)=>{
//     if(num<=0) return []
//     if(num===1) return [0]
// const result=[0,1];
// for(let i=2;i<num;i++){
//     result.push(result[i-1]+result[i-2])
// }
// return result

// }
// console.log(fibonacci(7));
const fib=(n)=>{
if(n<=1) return n
return fib(n-1)+fib(n-2)
}

const fibonacci=(num)=>{

const result=[];
for(let i=0;i<num;i++){
    result.push(fib(i))
}
return result
}
console.log(fibonacci(6));

