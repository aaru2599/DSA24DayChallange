// To check the string or number is palindrome or not( ex: 121,madam,anna)
//  using diving length by 2 and then comparing


function palindrom(input) {
    input=input.toLowerCase()
    let j=input.length-1;
    let len=input.length-1;
    for(let i=0;i<len;i++){
        const currentElem=input[i];
        const lastElem=input[j-i];

         if(currentElem!==lastElem){
            return false
        }
        return true
    
    }
    
    
}
console.log(palindrom("Madam"));
