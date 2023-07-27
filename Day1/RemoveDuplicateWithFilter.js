/**Remove Duplicate characters from array of element using filter 
*  
 * 
*/



function removeDuplicates(array) {
    const newArr=array.filter(function(element, i) {
        return array.indexOf(element) === i;
      });
    return newArr
  }
  
  console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5, 6, 5, 3, 7]));
  // Example
//     const originalArray = [1, 2, 3, 2, 4, 1, 5, 6, 5, 3, 7];
//   const uniqueArray = removeDuplicates(originalArray);

//   console.log("Original Array:"v, originalArray);
//   console.log("Unique Array:", uniqueArray);


