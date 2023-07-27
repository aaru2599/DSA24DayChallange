function LargestElement(input) {
    let largElem = input[0];
    let secLargElem = input[1];
  
    for (let i = 0; i < input.length; i++) {
      if (largElem < input[i]) {
        secLargElem = largElem; // Update secLargElem with the previous largest element
        largElem = input[i];    // Update largElem with the new largest element
      } else if (input[i] > secLargElem && input[i] !== largElem) {
        secLargElem = input[i]; // Update secLargElem if a new second-largest element is found
      }
    }
  
    return [largElem, secLargElem];
  }
  
  console.log(LargestElement([6,8,2,6,7,8]));
  