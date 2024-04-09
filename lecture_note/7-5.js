let primitiveNumber = 273;
let primitiveNumber1 = 456;

Number.prototype.method = () => {
    return 'Primitive Number';
};

console.log(primitiveNumber.method());
console.log(primitiveNumber1.method());

//기본 자료형에 프로토타입으로 메소드 추가.
//Number 객체 모두에게 method 추가.