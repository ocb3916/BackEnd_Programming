function callTenTimes(callback) {
    for (let i = 0; i < 10; i++) {
        callback();        
    }
}

callTenTimes(() => {
    console.log("함수 출력");
});