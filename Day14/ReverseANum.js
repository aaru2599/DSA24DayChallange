let ReverseNum=(num)=>{
      revNum="";
    var newNum=num.toString()
  for(let i=newNum.length;i>=0;i--){
    // console.log(newNum[i]);
      revNum=revNum+newNum[i]
    //  console.log(typeOf(revNum));

  }
  console.log(typeof(revNum));
  return revNum
  


}
console.log(ReverseNum(2134));