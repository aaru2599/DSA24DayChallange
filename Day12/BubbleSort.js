 function BubbleSort(input) {
    //run for loop to compare the elements
    for(let i=0 ; i<arr.length-1;i++){
        //second loop for next element comparision
        for(let j=0;j<arr.length-i-1;j++){
            //compare if First element is greter then second
            if(arr[j]>arr[j+1]){
                //swap the element
                const temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp
            }
        }
    }
    return arr
    
 }
 const arr=[5,4,6,3,1,2];
 console.log(BubbleSort(arr))