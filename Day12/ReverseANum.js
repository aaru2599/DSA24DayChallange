let ReverseNum=(num)=>{
      revNum=0;
    const newNum=num.toString()
  for(let i=newNum.length;i>=0;i--){
    // console.log(newNum[i]);
     revNum=revNum+newNum[i]

  }
  return revNum
  


}
console.log(ReverseNum(2134));