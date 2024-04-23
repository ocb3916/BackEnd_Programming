// 복잡한 비동기 코드
// 모듈을 추출합니다.
const fs = require('fs');
// 파일A를 읽습니다.
fs.readFile('a.txt', (error, fileA) => {
    // 파일B를 읽습니다.
    fs.readFile('b.txt', (error, fileB) => {
        // 파일C를 읽습니다.
        fs.readFile('c.txt', (error, fileC) => {
            console.log(fileA);
            console.log(fileB);
            console.log(fileC);
        });
    });
});