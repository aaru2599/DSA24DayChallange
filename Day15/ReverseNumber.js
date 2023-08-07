// Reverse of a nuber using converting into string with or withour builtin methods

let reverseNumber=(num)=>{

    let NumString=num.toString();
    let arr=NumString.split("").reverse().join("");

    const digit=parseInt(arr)
    console.log(typeof(digit));
    return digit
}
console.log(reverseNumber(12353));