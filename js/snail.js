// Solution for Snail Sort
// URL: https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1
const assert = require('node:assert');

function transpose(arr) {
    return arr[0].map((col, c) => arr.map((row, r) => arr[r][c]));
}

function rot90ct(arr) {
    return transpose(arr).reverse()
}

function snail(arr) {
    const res = []
    while(arr.length > 0) {
        res.push(...arr.shift())
        if(arr.length > 1) {
            arr = rot90ct(arr)
        } else {
            arr = arr.map((el) => el.reverse())
        }
    }
    return res
}

// Tests
assert.deepEqual(snail([[]]), []);
assert.deepEqual(snail([[1]]), [1]);
assert.deepEqual(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
assert.deepEqual(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
assert.deepEqual(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);
