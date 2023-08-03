let stringSort=(input="value")=>{
//convert string into arr
    const arr=input.split("")
    // console.log(elemArr);
    //run a loop for arr
    for(let i=0;i<arr.length-1;i++){
        //run second loop to compare the first elem with next
        for(let j=0;j<arr.length-i-1;j++){
            //if corrent elem is greater then next
            if(arr[j]>arr[j+1]){
                //swapp the elem
                const temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;

            }
        }
    }
    return arr

}
const str="bcdaegihj"
console.log(stringSort(str));