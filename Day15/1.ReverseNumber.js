// Reverse of a number

let revNumber=(num)=>{
    let revNum=0
   while(num!==0){
    let digit=num%10;
   revNum=revNum*10+digit;
   num=Math.floor(num/10)
   }
return revNum 
}
console.log(revNumber(1234));