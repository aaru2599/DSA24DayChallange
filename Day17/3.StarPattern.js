// Number Pattern
// 11111
// 2222
// 333
// 44
// 5

let starPattern=(num)=>{
    let result="";
for(let i=1;i<=num;i++){
    for(let j=i;j<=num;j++){
        result+=i+" "
        // console.log(i);
    }
    result+="\n"
}
return result
}
console.log(starPattern(5));