let nestedArray = [
    [1, 2, 3],
    [4, 5, 6, [1, 2, 3, [4, 5, 6]],
        [7, 8, 9]
    ]
];

const flatterArray = (array) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        let element = array[i]
        if (Array.isArray(element)) {
            result.push(...flatterArray(element));
        }
        else {
            result.push(element)
        }
    }
    return result
}
console.log(flatterArray(nestedArray));