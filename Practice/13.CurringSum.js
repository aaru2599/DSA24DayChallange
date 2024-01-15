function CurryingSum(a) {
    let sum = a;

    function addNext(b) {
        sum += b;
        return addNext;
    }

    addNext.toString = function () {
        return sum;
    };

    return addNext;
}

console.log(CurryingSum(10)(20)(20));
console.log(CurryingSum(10)(20)(20)(10));
