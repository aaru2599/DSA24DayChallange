// Star Pattern
// *
// **
// ***
// ****
// *****

let starPattern=(num)=>{
    let result="";
 for(let i=1;i<=num;i++){
    for(let j=1;j<=i;j++){
        result=result+"*"
        // console.log("*");
    }
result=result+"\n"
}
return result
}
console.log(starPattern(5));