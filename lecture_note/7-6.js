let primitiveNumber = new Number();
let primitiveNumber1 = new Number();

primitiveNumber.method = function () {
    return 'Primitive Number';
};

console.log(primitiveNumber.method());
console.log(primitiveNumber1.method());

//primitiveNumber 인스턴스 하나에게만 method 추가.