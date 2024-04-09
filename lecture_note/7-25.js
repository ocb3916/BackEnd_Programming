const _ = require('lodash');

const array = [{
    name: '고구마',
    price: 1000
}, {
    name: '감자',
    price: 500
}, {
    name: '바나나',
    price: 400
}];

const outputA = _.sortBy(array, (item) => {return item.price});
console.log(outputA);

const outputB = _.sortBy(array, (item) => {return item.name})
console.log(outputB);