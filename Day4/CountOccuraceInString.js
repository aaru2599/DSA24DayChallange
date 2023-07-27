function OccuranceCheck(input) {
arr=input.split("");
const OutObj={};
for(let i=0;i<arr.length;i++){
    const key=arr[i].toLowerCase();
    if(OutObj.hasOwnProperty(key)){
        OutObj[key]=OutObj[key]+1;
    }
    else{
        OutObj[key]=1;
    }
}
return OutObj

    
}
console.log(OccuranceCheck("ArvindMandre"));