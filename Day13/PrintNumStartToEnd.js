/**Print of all numbers from start to end given number
printSeries(1, 4);

// Output
1;
2;
3;
4;*/

let StartToEnd=(num1,num2)=>{
//    ;
    if(num1<=num2){

        console.log(num1+";");
        num1=num1+1;
     StartToEnd(num1,num2)


    }
    
}
console.log(StartToEnd(2,5));

for(let i=2;i<=5;i++){
    console.log(`${i}; `);
}