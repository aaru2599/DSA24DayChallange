// Remove or Delete elements from an array using various ways
let removeElem=(arr,elem)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]===elem){
            arr.splice(i,1)
        }
    }
    return arr
    
}
console.log(removeElem([1,2,4,6,7,5],5));