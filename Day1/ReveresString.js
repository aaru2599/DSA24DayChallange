/** String reverse with reversing of individual words
 * 
 *
 * Step01:First we have to create a function 
 * Step02:Break the string into Array with Split()function
 * Step03:treaverse the array and again break array element(String) into array
 *        Revere avery word
 *        join into string
 * Step04:Return reversed String with join

   
**/
function ReveresedString(params) {
    const reversedArray=[];
        const arr=params.split(" ");
    // console.log(arr);
    for(let i=0;i<arr.length;i++){
        reversedstr=arr[i].split("").reverse().join("")
        reversedArray.push(reversedstr)

    }
    return reversedArray.join(" ")

}
const Str="Hello..! this is Example of reverse String with individual word";
console.log(ReveresedString(Str));