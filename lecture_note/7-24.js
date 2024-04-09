let array = [52, 273, 32, 64, 72];

console.log('--- forEach() method ---');
array.forEach((item, index) => {
    console.log(`- ${index}번째 요소는 ${item}입니다.`);
});

console.log();
console.log('--- map() method ---');
let outputA = array.map((item, index) => {
    return item * item;
});
console.log(outputA);

console.log();
console.log('--- filter() method ---');
let outputB = array.filter((item, index) => {
    return item % 2 == 0;
});
console.log(outputB);