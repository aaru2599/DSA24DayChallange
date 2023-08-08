// Star Pattern
// *****
// ****
// ***
// **
// *
let starPattern = (num) => {
    let result = "";
    for (let i = num; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            result = result + "* ";

        }
        result=result+"\n"
    }
    return result
}
console.log(starPattern(8))