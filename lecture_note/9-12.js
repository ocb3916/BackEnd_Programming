// 여러 파일을 동기적으로 읽기
const fs = require('fs');

const a = fs.readFileSync('a.txt');
const b = fs.readFileSync('b.txt');
const c = fs.readFileSync('c.txt');

console.log(a, b, c);
console.log(a.toString(), b.toString(), c.toString());