// Remove Character and numbers in a string

let CharNum=(str)=> {
    str=str.toLowerCase();

  var str1="";
   var str2="";
  for( let i=0;i<str.length;i++){
   const ch=str.charAt(i);
    if(ch>='a' && ch<='z'){
        str1=str1+ch;
    }
    if(ch>='0' && ch<='9'){
        str2=str2+ch

    }
  } 
  return  `${str1} ${str2}`
}
console.log(CharNum("Arvi1543nd123"));
// let charCh=(a,b)=>(a+b);
// console.log(charCh(1,4));