function sum(a, b) {
    let result = 0;
    if (a < b) {
        while (a <= b) {
            result += a;
            a++;
        }
    }
    else {
        while (a >= b) {
            result += a;
            a--;
        }
    }

    return result;
}

console.log(sum(5, 3));