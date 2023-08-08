// let arr=[1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0]
// we need to move 1 in starting and 0 in last

// Step1:function created and after that create one empty array 
// step2:create empty variable as count that will give the count of 1
// step3:in for loop we are comparing every  element with 1 if true 1's count will be increase and 
    // also push that 1 into empty array 
// step4:after pushing 1 we need to push rest 0's  
// step5:Return containerArray


function SwapElement(input) {
    const containerArray=[]
    let count=0;
    for(let i=0;i<input.length;i++){
        if(input[i]==1){
            count++
            containerArray.push(1);
        }
    }
   let zerolength= input.length-count
//    console.log(zerolength);
    for(let i=0;i<zerolength;i++){
        containerArray.push(0)
    }
    return containerArray
    
}
let arr=[1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0]
console.log(SwapElement(arr));