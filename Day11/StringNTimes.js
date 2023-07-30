// Print string n times in custom way using loops
let StringNTimes=(str,num)=>{
   var str1=""
    for(let i=1;i<=num;i++){
        // console.log();
        str1=`${str1}\n ${i} ${str};`
    }
    return str1

}
console.log(StringNTimes("Arvind",5));