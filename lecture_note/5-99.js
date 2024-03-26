let num = 0;

function addNum() {
    this.num = 100;
    num++;
    console.log(num);
    console.log(this.num);
}

addNum();