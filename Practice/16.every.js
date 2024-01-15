const everyMeth = () => {
    const arr = [1, 2]
    const isArrTrue = arr.every((val, index) => {
        console.log("val", val);
        console.log(arr.indexOf(val));
        arr.indexOf(val) === index
    })
    return isArrTrue
}
console.log(everyMeth());