// To find the second largest number in an array
let secondLargest=(input)=>{

    let arr=input.sort()
    console.log(arr);
    let secondLarge=arr.length-2
    return arr[secondLarge]
}
console.log(secondLargest([2,3,7,5,6,9]));