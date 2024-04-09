class Product {
    constructor(name, weight, value) {
        this.name = name;
        this.weight = weight;
        this.value = value;
    }

    print() {
        console.log(`${this.name} ${this.weight}g당 ${this.value}원으로 책정.`);
    }

    calculate(weight) {
        console.log(`${this.name} ${weight}g은 ${weight / this.weight * this.value}원입니다.`);
    }
}

let product = new Product("돼지삼겹살", 100, 1690);
product.print();
product.calculate(200);

let product1 = new Product("닭고기", 100, 900);
product1.print();
product1.calculate(500);