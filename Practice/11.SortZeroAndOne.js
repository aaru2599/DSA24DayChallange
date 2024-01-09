const sortZeroAndOne = () => {
    let num = "1100101";

    let count1 = 0;
    let count0 = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] === "1") {
            count1++
        }
        if (num[1] === "0") {
            count0++
        }
        
    }

    // let num = "1100101".split("")
    // console.log(num);
    // // let temp;
    // for (let i = 0; i < num.length; i++) {
    //     for (let j = i + 1; j < num.length; j++) {
    //         if (num[i] > num[j]) {
    //             let temp = num[i];
    //             num[i] = num[j];
    //             num[j] = temp
    //         }
    //     }
    // }
    // return num.join("")

}
console.log(sortZeroAndOne());