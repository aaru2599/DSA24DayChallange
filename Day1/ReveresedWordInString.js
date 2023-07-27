function reversedWord(input){


    const arr=input.split(" ")
    // console.log(arr);
    const reveresedArray=arr.reverse();
    // console.log(reveresedArray);
    return reveresedArray.join(" ")
}
const str="Hello ! This is Arvind"
console.log(reversedWord(str));