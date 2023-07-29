// Find first duplicate element from an array

function FirstDup(input) {
    const dupElem={}
    for(let i=0;i<input.length;i++){
        const elem=input[i];
        if(dupElem[elem]){
            return elem
        }
        else{
            dupElem[elem]=true
        }

    }
    return elem
    
}
console.log(FirstDup([1,2,3,2,4,1]));