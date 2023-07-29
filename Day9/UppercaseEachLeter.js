/** 
function capitalizeFirstLetterEachWord(inputString) {
    let capitalizedString = '';
    let capitalizeNextLetter = true;
  
    for (let i = 0; i < inputString.length; i++) {
      const currentChar = inputString[i];
  
      if (capitalizeNextLetter && currentChar >= 'a' && currentChar <= 'z') {
        capitalizedString += currentChar.toUpperCase();
      } else {
        capitalizedString += currentChar;
      }
  
      // Determine if the next letter should be capitalized
      capitalizeNextLetter = currentChar === ' ' || currentChar === ',' || currentChar === '?' || currentChar === '!';
    }
  
    return capitalizedString;
  }
  
  // Example usage:
  const inputString = "hello world, how are you?";
  const capitalizedString = capitalizeFirstLetterEachWord(inputString);
  console.log(capitalizedString);
  
*/

function capitalizeFirstLetterEachWord(inputString) {
    arrStr = inputString.split(" ");
    str = "";
    for (let i = 0; i < arrStr.length; i++) {
        const elem = arrStr[i]
        str = str + elem[0].toUpperCase() + elem.slice(1)
        //    console.log(arrStr[i]);         
        if (i < arrStr.length - 1) {
            str = str + " ";
        }
        
    }
    return str
}// Example usage:
const inputString = "hello world, how are you?";
const capitalizedString = capitalizeFirstLetterEachWord(inputString);
console.log(capitalizedString);



