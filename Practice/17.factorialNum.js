const factorialNum = (num) => {
    let result = 1;
    if (num > 0) {

        result = num * factorialNum(num - 1)

    }
    return result
}
console.log(factorialNum(5));