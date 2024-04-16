// 이벤트 매개 변수
// exit 이벤트 연결
process.on('exit', (code) => {
    console.log('프로세스가 종료되었습니다.');
    console.log(`exit 이벤트 매개 변수 ${code}`);
});

// uncaughtExeption 이벤트 연결
process.on('uncaughtException', (error) => {
    console.log('예외가 발생했습니다.');
    console.log(`uncaughtException 이벤트 매개 변수 ${error}`);
});

// 예외를 강제로 발생시킵니다.
error.error.error();