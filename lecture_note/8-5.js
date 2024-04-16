function test() { //코드 8-5 finally 구문을 사용하지 않는코드
    try {
        // 예외를 발생시킵니다.
        const array = new Array(-2000);
    } catch (exception) {
        console.log(`${exception.name} 예외가 발생했습니다.`);
        console.log('함수가 종료되었습니다.');
    }
}
test();