let string = 'Hello World';

string = string.toLowerCase().replace(' ', '|').split('|');

console.log(string);