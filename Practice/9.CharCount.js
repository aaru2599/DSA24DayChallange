const charCount=(input)=>{
    let count=0
for(let i=0;i<input.length;i++){
    if(input[i]==="A"){
        count++
    }
}
return count
}
const str = "AAAABBBCCDAA"
console.log(charCount(str));


