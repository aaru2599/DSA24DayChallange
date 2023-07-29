function LargestTwo(input) {
    let temp;
    for(let i=0;i<input.length;i++){
        for(let j=i+1;j<input.length;j++){
            if(input[i]>input[j]){
                temp=input[i];
                input[i]=input[j];
                input[j]=temp
                // console.log(input);
                lastTwoElem=[input[input.length-2],input[input.length-1]]
            }
        }
    }
    return lastTwoElem
}
console.log(LargestTwo([1,2,4,7,9,7,6,5,4,3]));
