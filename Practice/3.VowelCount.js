/**
 * 
 * @param {*} input 
 * @returns 
 * To find vowels and its count in a given string
 * Step1:create new empty object
 * Step2:iterate the string with for loop 
 *       Check if vowels availavle in string then only go to next step
 *       check if key present in object then increase the count
 *       if not then asign 1 as value  
 * Step3:return object
 */


const vowelsCount = (input) => {
    let newObj = {}
    for (let i = 0; i < input.length; i++) {
        let charKey = input[i].toLowerCase()

        if (charKey == "a" ||
            charKey == "e" ||
            charKey == "i" ||
            charKey == "o" ||
            charKey == "u") {
            if (newObj.hasOwnProperty(charKey)) {
                newObj[charKey] += 1
            }
            else {
                newObj[charKey] = 1
            }

        }
    }
    return newObj
}
console.log(vowelsCount("Ankit jain"));