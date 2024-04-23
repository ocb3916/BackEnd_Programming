// 콜백 지옥 해결
// 모듈을 추출합니다.
const fs = require('fs');
const async = require('async');
// 파일A를 읽습니다.
async.parallel({
    fileA: (callback) => {
        fs.readFile('a.txt', callback);
    },
    fileB: (callback) => {
        fs.readFile('b.txt', callback);
    },
    fileC: (callback) => {
        fs.readFile('c.txt', callback);
    }
}, (error, results) => {
        console.log(results.fileA);
        console.log(results.fileB);
        console.log(results.fileC);
        console.log(results.fileA.toString());
        console.log(results.fileB.toString());
        console.log(results.fileC.toString());
});
