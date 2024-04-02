function mul(a, b) {
    let result = 1;
    if (a < b) {
        while (a <= b) {
            result *= a;
            a++;
        }
    }
    else
        while (a >= b) {
            result *= a;
            a--;
        }
    return result;
}

console.log(mul(5, 3));