// 4 Ways to empty an array. You need to comeup with 4 different approaches


let removeArr=(input)=>{
while(input.length>0){
    input.pop()
}   
return input

}
console.log(removeArr([1,2,3,4,5,6]));

// ================Another Way==============

let removeArr1=(input1)=>{
     input1=[]
    return input1
}
console.log(removeArr1([1,2,3,4,5,6]));



// ================Another Way==============


let removeArr2=(input2)=>{
    let emptyArr=input2.slice(input2.length)
    return emptyArr
}
console.log(removeArr2([1,2,3,4,5,6]));

// ================Another Way==============


let removeArr3=(input3)=>{
    input3.splice(0,input3.length)
    return input3
}
console.log(removeArr3([1,2,3,4,5,6]));


// ================Another Way==============


let removeArr4=(input3)=>{
   input3.length=0
    return input3
}
console.log(removeArr4([1,2,3,4,5,6]));