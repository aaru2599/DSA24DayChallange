const febonacci = () => {
    let a = 0;
    let b = 1;
    for (let i = 0; i < 10; i++) {
      console.log( a);
        let temp = a + b;
        a = b;
        b = temp
    }
    return a
}
console.log(febonacci());