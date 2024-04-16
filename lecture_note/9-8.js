// url 모듈
const url = require('url');

const parsedObject = url.parse('https://www.google.com/search?q=t3xture&oq=t3xture&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDI1MjRqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8');
console.log(parsedObject);