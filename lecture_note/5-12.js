/*
다음 함수를 만드시오.

 

º 함수 이름: power

  - 매개 변수를 하나 넣으면 제곱해 준다(예 : power(2) = 4).

  - 매개 변수를 2개 넣으면 <첫 번째 매개 변수>의 <두 번째 매개 변수> 제곱만큼 해 준다(예 : power(2, 3) = 8).

º 함수 이름: multiply

º 매개 변수로 넣은 값을 모두 곱해준다(예 : multiply(1, 2, 3, 4, 5) = 120).
*/

function power(x, y) {
    if (!y)
        return x * x;
    else
        return x ** y;
}

function multiply() {
    let result = 1
    for (let i = 0; i < arguments.length; i++) {
        result *= arguments[i];
    }
    return result;
}

console.log(power(3));
console.log(power(3, 5));
console.log(multiply(1, 2, 3, 4, 5));