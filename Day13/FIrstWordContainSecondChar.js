
/**  Checking all letters of second words should present in first word, 
 in the same order using indexOf without indexing i.e for-of loop
    step1:Lowercase both strings
    Step2:give index value as negative of 1
    step3:perform for of loop
    step4:check if second word of char is not present in first word then return false
                if present then return true        
*/

let charCheck = (str1, str2) => {
    //we need to lowercase both word
    str1 = str1.toLowerCase();//arvind
    str2 = str2.toLowerCase();//ind
    let index=-1;
    // with for of loop 
    for(let char of str2){
        index=str1.indexOf(char,index+1 )//(i,0)=3
        if(index===-1){
            return false
        }
    }
    return true

}

const firstWord="Arvind"
const secondWord="ind"

console.log(charCheck(firstWord,secondWord));




// Checking all letters of second words should present in first word, 
// in the same order using indexOf with indexing


let charCheck1 = (frtWord,secWord) => {
    //we need to lowercase both word
    frtWord = frtWord.toLowerCase();//arvind
    secWord = secWord.toLowerCase();//ind
    let index=-1;
    //with indexing value
    for(let i=0;i<frtWord.length;i++){
        let char=frtWord[i]
        index=str1.indexOf(char,index+1 )//(i,0)=3
        if(index===-1){
            return false
        }
    }
    return true

}

const firstWord1="Arvind"
const secondWord1="ind"

console.log(charCheck(firstWord1,secondWord1));