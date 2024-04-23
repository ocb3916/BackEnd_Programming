const request = require('request');
const cheerio = require('cheerio');

const url = 'https://namu.wiki/w/%EA%B9%80%EB%82%98%EB%9D%BC(%ED%94%84%EB%A1%9C%EA%B2%8C%EC%9D%B4%EB%A8%B8)';
request(url, (error, response, body) => {
    const $ = cheerio.load(body);

    $('.wtwRx7lj.vVW85IK9').each((index, element) => {
        let title;
        for (let i = 4; i < 13; i++) {
            title = $(element).find(`tr:nth-child(${i}) > td:nth-child(1)`).text().trim();
            console.log(title);
            console.log();
        }
        
    });
});