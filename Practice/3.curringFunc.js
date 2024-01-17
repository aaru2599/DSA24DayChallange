function xyz(a) {
    return (b)=>{
        return (c)=>{
            return a+b+c
        }
    }
}

console.log(xyz(10)(10)(10) );