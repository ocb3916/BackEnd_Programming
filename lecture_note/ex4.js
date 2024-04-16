// String.prototype.contain = (input) => {
//     return this.indexOf(input) > -1;
// };
// this를 인식하지 못한다.

String.prototype.contain = function(input) {
    console.log(this);
    console.log(input);
    return this.indexOf(input) > -1;
};

console.log("안녕하세요.".contain("안녕"));
console.log("안녕하세요.".contain("데굴데굴"));