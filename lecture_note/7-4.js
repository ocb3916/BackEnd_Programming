let primitiveNumber = 273;

primitiveNumber.method = function () {
    return 'Primitive Number';
};

console.log(primitiveNumber.method());

//기본 자료형은 객체가 아니므로 속성과 메소드를 추가할 수 없다.