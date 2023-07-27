/**Remove Duplicate characters from String
 *  Step01:Lowercase string so we can easily compaire
 *  Step02:Convert String into Array
 *  Step03:Treaverse every char via loop
 *         compare every element with each other
 *         if comparision is true remove the element from its place with splice() 
 *  Step04:Convert Array into string with join()function
  
 */
function dupChar(params) {
    params=params.toLowerCase();
    arr=params.split("");
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                arr.splice(j,1)
                // j--;
            }
        }
    }
    console.log(arr.length);
    return arr.join("")

    

}
console.log(dupChar("Arvind mandre"));