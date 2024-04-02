function findSmallestElemnt(arr) {
    let min = Number.MAX_VALUE;

    for (let i of arr) {
        if (i < min) {
            min = i;
        }
    }

    return min;
}

let arr = [365, 398, 123, 435, 56, 765];

console.log(findSmallestElemnt(arr));