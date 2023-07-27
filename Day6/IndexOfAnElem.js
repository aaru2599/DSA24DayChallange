// To find the index of an element from an array

function IndexOfElem(arr, elem) {

    for (let i = 0; i < arr.length; i++) {
        const index= arr.indexOf(elem)
        if(index===-1){
            return "not found"
        }
      else{
        return index
      }
    }
    return "not found"
}


console.log(IndexOfElem([2, 4, 3, 6, 8, 7], 6));