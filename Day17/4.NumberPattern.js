// Number pattern
// 12345;
// 2345;
// 345;
// 45;
// 5;

let numPattern = (num) => {

    let result = "";
    for (let i = 1; i <= num; i++) {
        for (let j = i; j <= num; j++) {
            result=result+j;
            // console.log(j);


        }
        result=result+"\n"
    }
    return result
}
console.log(numPattern(5));