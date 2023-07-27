// Swapping of 2 numbers without third variable

function SwapNumWith3rdVar(a,b) {
a=a+b;
b=a-b;
a=a-b
return `${a} ${b}`
    
}
console.log(SwapNumWith3rdVar(10,20));