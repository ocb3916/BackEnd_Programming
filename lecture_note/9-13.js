// 여러 파일을 비동기적으로 읽기
const fs = require('fs');
const async = require('async');

async.parallel([
    (callback) => {fs.readFile('a.txt', callback);},
    (callback) => {fs.readFile('b.txt', callback);},
    (callback) => {fs.readFile('c.txt', callback);},
], (error, results) => {
    // 출력
    console.log(results);
    console.log(results.toString());
});