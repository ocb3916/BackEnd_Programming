// fs.readFile() 메소드를 사용해 비동기적으로 파일 읽기
const fs = require('fs');

fs.readFile('textfile.txt', (error, file) => {
    console.log(file);
    console.log(file.toString());
    // 현재 단계의 코드를 종료
});
// 현재 단계의 코드를 종료

// − line 4 에서 line 8 으로 이동하는 시간이 0초에 가까움
// − 즉, 코드는 진행하고 Node.js의 뒷단에서 파일을 읽어 들이는 처리가 수행됨
// − 이러한 뒷단에서 처리가 모두 끝나면, 그때 콜백 함수 부분을 실행함
// − 콜백 함수의 첫 번째 매개 변수는 오류객체이고, 두 번째 매개 변수가 원하는 값임
// https://sirius7.tistory.com/44