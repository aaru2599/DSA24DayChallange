// Fibonacci Series (0,1,1,2,3,5,8,13....)

function FibonacciSeries(params) {
    if(params<=0)return [];
    if(params===1) return [0]
    if(params===2) return [0,1]
    const fiboSeries=[0,1];
    for(let i=2;i<params;i++){
        const nextNum=fiboSeries[i-1]+fiboSeries[i-2];
        fiboSeries.push(nextNum)
    }
    return fiboSeries
    
}
console.log(FibonacciSeries(1));