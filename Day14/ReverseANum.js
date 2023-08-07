// Reverse of a nuber using converting into string with or withour builtin methods

let ReverseNum=(num)=>{
    let newNum=num.toString()
      let arr=newNum.split("").reverse().join("")
      console.log(typeof(arr));
      const digit=parseInt(arr)
      console.log(typeof(digit));
      return arr
  


}
console.log(ReverseNum(2134));