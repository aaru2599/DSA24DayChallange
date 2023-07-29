// To check ending of the string matches with given character/s using inbuilt function\

function EndingString(givenString,word) {
    givenString=givenString.toLowerCase();
    word=word.toLowerCase();
    return givenString.endsWith(word)
    
}
console.log(EndingString("Hello, World","world"));
