const avgNum=(arr)=>{
    let result=0
    for(let num of arr){
        result=(result+num)
    }
    return result/arr.length
}
console.log(avgNum([1,2,5,3]));