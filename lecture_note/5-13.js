let 외부 = this;

// 1
console.log(`1번 위치: ${외부 == this}`);

// 2
(() => {
    console.log(`2번 위치: ${외부 == this} `);
})();

// 3
(function () {
    console.log(`3번 위치: ${외부 == this}`);
})();

// 4
function 이름() {
    console.log(`4번 위치: ${외부 == this}`);
}
이름();