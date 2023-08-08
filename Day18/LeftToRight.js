// let arr=[1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0]
// we need to move 1 in starting and 0 in last

// Step1:function created and after that create one empty array 
// step2:create empty variable as count that will give the count of 1
// step3:in for loop we are comparing every  element with 1 if true 1's count will be increase and 
    // also push that 1 into empty array 
// step4:after pushing 1 we need to push rest 0's  
// step5:Return containerArray

function moveZerosAndOnes(arr) {
    let left = 0; // Index for the leftmost position to fill with 1
    let right = arr.length - 1; // Index for the rightmost position to fill with 0

    for (let i = 0; i < arr.length; i++) {
        if (i > right) {
            break;
        }

        if (arr[i] === 1) {
            // Swap the current value with the leftmost available position
            [arr[i], arr[left]] = [arr[left], arr[i]];
            left++;
        } else if (arr[i] === 0) {
            // Swap the current value with the rightmost available position
            [arr[i], arr[right]] = [arr[right], arr[i]];
            right--;

            // Re-check the current value after swapping
            if (arr[i] === 1) {
                [arr[i], arr[left]] = [arr[left], arr[i]];
                left++;
            }
        }
    }

    return arr;
}

let arr = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0];
console.log(moveZerosAndOnes(arr));
