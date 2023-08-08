// To find the length of the array in custom way
function ArrLength(arr,index=0){
if(arr[index]==undefined){
    return index
}   
//perform recurson
return ArrLength(arr,index+1)
}
console.log(ArrLength([1,2,3,4,5," "]));