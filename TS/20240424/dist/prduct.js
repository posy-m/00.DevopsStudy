class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.discountAmot = 0;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price - this.discountAmot;
    }
    setDisCountAmount(amount) {
        this.discountAmot = amount;
    }
}
class ProducthManager {
    constructor() {
        this.products = [];
    }
    setCreateProduct(_product) {
        this.products.push(_product);
    }
    getProduct(index) {
        return this.products[index];
    }
}
const product01 = new Product("Mac", 1000);
product01.setDisCountAmount(200);
const producthManager = new ProducthManager();
producthManager.setCreateProduct(product01);
console.log(producthManager.getProduct(0).getPrice());
