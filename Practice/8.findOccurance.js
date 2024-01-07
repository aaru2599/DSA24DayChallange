const findOccurance = (str) => {
    let arr = ""
    let count = 1
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count = count + 1;
        }
        else {
            arr = arr.concat(count).concat(str[i])
            count = 1

        }
    }
    return arr
}
const str = "AAAABBBCCDAA"
console.log(findOccurance(str));