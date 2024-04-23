const request = require('request');

const url = 'https://namu.wiki/w/%EA%B9%80%EB%82%98%EB%9D%BC(%ED%94%84%EB%A1%9C%EA%B2%8C%EC%9D%B4%EB%A8%B8)'
request(url, (error, response, body) => {
    console.log(body);
});