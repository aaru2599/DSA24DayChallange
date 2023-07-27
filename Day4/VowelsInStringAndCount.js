// To find vowels and its count in a given string

function FindVovels(input = "value") {
    input = input.toLowerCase();
     let vowCount = 0;
     let vowels="";
     for (let i = 0; i < input.length; i++) {
        // let vowels = input[i]
        ch = input.charAt(i)
        if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
            vowCount++
            vowels=vowels+ch;
            console.log(vowels);
            // console.log(vowCount);

           
        }
    }
    return vowCount
}
console.log(FindVovels("Arvind"));