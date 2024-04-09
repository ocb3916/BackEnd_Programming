const javascriptObject = [
    {
        name: '윤인성',
        region: '서울'
    }, {
        name: '윤명월',
        region: '도쿄'
    } , {
        name: '오찬빈',
        region: '사천'
    }
];

//JSON.stringify() 메소드로 자바스크립트 객체를 JSON 문자열로 변경.
const outputA = JSON.stringify(javascriptObject);
const outputB = JSON.stringify(javascriptObject, null, 2);
console.log(typeof(outputA));
console.log(outputA);
console.log(outputB);
console.log('-------------------');

//JSON.parse() 메소드로 JSON 문자열을 자바스크립트 객체로 변경.
const outputC = JSON.parse(outputB);
console.log(typeof(outputC));
console.log(outputC);