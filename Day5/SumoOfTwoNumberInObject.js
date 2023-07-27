function SumOfNum(input,num) {
    const objContainer={};
    for(let i=0;i<input.length;i++){
        const key=input[i];
        const num=10-key
        if(objContainer[num]!==undefined){
            return[key,num]  
        }
        objContainer[key]=num

    }
    return "no pair found"

}
console.log(SumOfNum([1,3,4,2,8,4],10));