// process 객체의 속성과 메소드를 사용
console.log('-process.arch: ', process.arch);
console.log('-process.platform: ', process.platform);
console.log('-process.connected: ', process.connected);
console.log('-process.execArgv: ', process.execArgv);
console.log('-process.exitCode: ', process.exitCode);
console.log('-process.mainModule: ', process.mainModule);
console.log('-process.release: ', process.release);
console.log('-process.memoryUsage: ', process.memoryUsage);
console.log('-process.uptime(): ', process.uptime());


// 강제 종료
process.exit();

// 강제 종료 되었으므로 이 부분은 실행되지 않습니다.
console.log("테스트");
console.log("테스트");
console.log("테스트");