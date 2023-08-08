// To check whether particular word/number present in sentence or not using inbuilt function


let wordCheck=(str,word)=>{
    str=str.toLowerCase();
    word=word.toLowerCase();
    if(str.includes(word)){
        return true
    }
    return false
}
console.log(wordCheck("Hello World ","hello"));
console.log(wordCheck("Hello World ","what"));