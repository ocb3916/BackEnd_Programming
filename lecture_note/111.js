const fs = require('fs');
const async = require('async');

fs.readFile('a.txt', (error, file) => {
    console.log(file.toString());
})

fs.readFile('b.txt', (error, file) => {
    console.log(file.toString());
})

fs.readFile('c.txt', (error, file) => {
    console.log(file.toString());
})

// 실행시켜보면 a,b,c 출력 순서가 계속 바뀌는 것을 확인할 수 있다.
// 비동기처리