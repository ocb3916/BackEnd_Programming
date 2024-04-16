try {
    // 예외 객체 생성
    const error = new Error('메시지');
    error.name = '내 맘대로 오류';
    error.message = '오류의 메시지';

    // 예외를 발생시킵니다.
    throw error;
} catch (e) {
    // 예외 객체를 출력
    console.log(`${e.name} 예외가 발생했습니다.`);
    console.log(e.message);
}