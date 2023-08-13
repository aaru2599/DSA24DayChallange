let moveZerosV1=(arr)=>{
    for(let i=0;i<arr.length;i++){
       for(let j=0;j<arr.length;j++){
        if(arr[i]<arr[j]){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp
        }
       }
    }
    return arr

}

console.log(moveZerosV1([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0]));


