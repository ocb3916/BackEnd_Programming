// fs.readFileSync() 메소드를 사용해 동기적으로 파일 읽기
const fs = require('fs');

const file = fs.readFileSync('textfile.txt');
console.log(file);
console.log(file.toString());

// - 파일의 크기가 굉장히 크다면 line 4 에서 line 5 으로 이동할 때 코드가 정지할 가능성이 있음
// − 문제를 해결을 위해 쓰레드 기능을 사용해야 함
// − Node.js에는 쓰레드의 기본 이념이 들어 있음