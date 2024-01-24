// To check if given number is prime or not
const primeNum = (num) => {
    let a = 1;
    let b = 2;
    for (let i = 2; i < num; i++) {
        // let elem = num[i];
        if (num % i === 0) {
            return "Not prime"
        }
    }
    return "Prime"

}
console.log(primeNum(11));