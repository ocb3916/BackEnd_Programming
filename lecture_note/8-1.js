function callThreeTimes(callback) {
    // 조건문으로 예외 처리
    if (callback) {
        for (let i = 0; i < 3; i++) {
            callback();
        }    
    }
    else
        console.log("매개 변수 callback을 함수로 지정해주세요.");
}

callThreeTimes(function () {
    console.log("hello");
});
// 정상 실행

callThreeTimes();
// 예외 발생