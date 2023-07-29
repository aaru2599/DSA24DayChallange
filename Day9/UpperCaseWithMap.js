// Uppercase of each first letter of a words using Array map function

function UpperCase(str) {
    const arr=str.split(" ");
    const resultWord=arr.map((word)=>{
        if(word.length>0){
            return word[0].toUpperCase()+word.slice(1)
        }
        return word
    });
    return resultWord.join(" ")
    
}
console.log(UpperCase("hello world, how are you?"));