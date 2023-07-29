/**Write a program that prints the numbers from 1 to 100. 
But for multiples of three, print "Fizz" instead of the number, and 
for the multiples of five, print "Buzz". 
For numbers which are multiples of both three and five, print "FizzBuzz"
*/
function FizzBuzz(input) {
  for(let i=1;i<input;i++){
    const num=i;

    if(num%3==0){
        console.log("Fizz"); 
    }
     if(num%5==0){
       console.log("Buzz");
    }
    if(num%3===0 && num%5===0){
        console.log("FizzBUzz"); 
    }
    if(num%3!==0 && num%5!==0){
        console.log(i);
    }
  }  
}
console.log(FizzBuzz(100));
