const UpperCase = () => {
    let myName = "mY NaMe is ArViNd"
    let arr = myName.split(" ")
    let str = ""
    // console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i].toLowerCase()+" "
        // console.log(word);
        str = str + word[0].toUpperCase() + word.slice(1)

    }
    return str

}
console.log(UpperCase());