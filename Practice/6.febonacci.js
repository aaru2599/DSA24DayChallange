const febonacci = () => {
    let a = 0;
    let b = 1;
    let result=""
    for (let i = 0; i < 10; i++) {
      let temp = a + b;
      a = b;
      b = temp
      // console.log( a);
        result=result+a+" "
    }
    return result
}
console.log(febonacci());