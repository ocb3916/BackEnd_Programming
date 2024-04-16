let id = setInterval(() => {
    console.log("출력합니다.");
}, 1000);

setTimeout(() => {
    clearInterval(id);
}, 3000);

//setTimeout(함수, 시간) 형태이나, 함수부분에 return이 없는 함수를 넣으면 에러가 난다. 그런 함수의 경우 화살표함수나 익명함수를 이용해야 한다.