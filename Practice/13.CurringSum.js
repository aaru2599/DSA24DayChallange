function CurringSum(a) {
    return (b)=>{
        console.log(a,b);
        return (c)=>{
            console.log(c);
            return a+b+c
        }
    }
}



console.log(CurringSum(10)(20)(30));
// console.log(CurringSum(10)(20)(20)(10));
// console.log(CurringSum(10)(20)(20)(20)(10) );