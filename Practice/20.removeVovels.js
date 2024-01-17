// 2 Write a function that takes in a string and returns a new string with all the vowels removed.

const removeVovels = (str) => {
    let result = " ";
    for (let element of str) {
        if (element !== 'a' && element !== 'e' && element !== 'i' && element !== 'o' && element !== 'u') {
            result = result + element;
        }
    }
    return result
}
const str = "arvindmandre"
console.log(removeVovels(str));