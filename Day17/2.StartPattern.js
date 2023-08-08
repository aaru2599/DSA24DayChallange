// Star Pattern
// *****
// *****
// *****
// *****
// *****

let starPattern=(num)=>{
    let result="";
for(let i=0;i<num;i++){
for(let j=0;j<num;j++){
    result=result+"* "
}

 result=result+"\n"; 
}
return result

}
console.log(starPattern(5));