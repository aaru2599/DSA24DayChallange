const uniqueOccurance = (arr) => {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        var key = arr[i]
        
        obj.hasOwnProperty(key) ?
            obj[key] = obj[key] + 1 :
            obj[key] = 1
    }
    // return obj
    const values=Object.values(obj)
    // console.log("values",values);
    const isValUnique=values.every((val,index)=>values.indexOf(val)===index)
    return isValUnique
}
const arr = [1, 2, 2, 1, 1, 3]
console.log(uniqueOccurance(arr));