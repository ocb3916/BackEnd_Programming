const fs = require('fs');

try {
    const file = fs.readFileSync('none.txt'); // 디렉토리에 존재하지 않는 파일
    console.log(file);
    console.log(file.toString());
} catch(e) {
    console.log('there is error as reading file.');
    console.log(e);
}