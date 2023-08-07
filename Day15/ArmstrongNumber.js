// Check Armstrong Number

let armstrongNum = (num) => {
    let strNum = num.toString();
    // console.log(strNum.length);
    let sum = 0;
    let len = strNum.length;
    let updateNum = parseInt(strNum)
    while (updateNum !== 0) {
        let digit = updateNum % 10;
        sum = sum + digit ** len
        updateNum = Math.floor(updateNum / 10);

    }
    // console.log(sum);
    if (sum !== num) {
        return false
    }
    return true

}

console.log(armstrongNum(153));