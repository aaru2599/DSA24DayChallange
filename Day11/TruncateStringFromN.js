// Truncate the string upto specific character. For 
// ex ("I am priya", 3) => "I am..."
let TruncateString=(str,num)=>{
    let truncateSTr=str.slice(0,num);
   
    return  truncateSTr+"..."
}
console.log(TruncateString("i am a Programmer",4));