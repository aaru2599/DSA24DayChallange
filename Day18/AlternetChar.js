// Make alternate character to upper case
// const input = "Priya Bagde";

//  Output
// ("PrIyA BaGdE");

let alternetChar = (input = "value") => {
    let result = ""
    let str = input.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        ch=str.charAt(i)
        if (i % 2 !== 0) {
           
            result=result+str.charAt(i)
        }
        else{
            result=result+str.charAt(i).toUpperCase()
        }
    }
    return result

}
const input = "Priya Bagde"
console.log(alternetChar(input));