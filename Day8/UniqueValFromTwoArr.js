function UniqueValue(params1, params2) {
    const arr = params1.concat(params2)
    // console.log(arr);
    let temp;
    for (let i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp
                // const arr1=arr
                // for(let i=0;i<arr1.length;i++){
                    if(arr[i]==arr[j]){
                        arr1.splice(j,1)
                
                    }
                  }
              
            }
            
        }
        
        return arr1
    }
  
 
    

console.log(UniqueValue([1,2,3,5,7],[1,2,4,6,7]));




function UniqueValue(arr1,arr2) {
    const arr=arr1.concat(arr2)
   const  arr3=arr.sort();
   const uniqueArray=[];
    console.log(arr3);
    for(let i=0;i<arr3.length;i++){
        if(arr3[i]!==arr3[i+1]){
              uniqueArray.push(arr3[i])  
        }
        else{
            i++;
        }
    }
    return uniqueArray
}

const arr1 = [1, 2, 4, 5, 7, 9];
const arr2 = [1,2,3,5,6,6];
console.log(UniqueValue(arr1, arr2));