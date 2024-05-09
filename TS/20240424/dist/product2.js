class FlatDiscount {
    constructor(amount) {
        this.amount = amount;
    }
    getDisCountPric(price) {
        return price - this.amount;
    }
}
class PercentDiscount {
    constructor(amount) {
        this.amount = amount;
    }
    getDisCountPric(price) {
        return price * (1 - this.amount / 100);
    }
}
class FlastPersent {
    constructor(flatAmount, persentAmount) {
        this.flatAmount = flatAmount;
        this.persentAmount = persentAmount;
    }
    getDisCountPric(price) {
        const FlatDiscount = price - this.flatAmount;
        return FlatDiscount * (1 - this.persentAmount / 100);
    }
}
class Products {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
}
class ProducntDiscount {
    constructor(product, discount) {
        this.product = product;
        this.discount = discount;
    }
    getPrice() {
        return this.discount.getDisCountPric(this.product.getPrice());
    }
}
const _product01 = new Products("Mac", 100000);
const _product02 = new Products("Window", 20000);
const _flatdiscount = new FlatDiscount(10000);
const _persentDiscount = new PercentDiscount(10);
const _flatPersentDiscount = new FlastPersent(10000, 10);
const discount01 = new ProducntDiscount(_product01, _flatdiscount);
console.log(discount01.getPrice());
const discount02 = new ProducntDiscount(_product02, _persentDiscount);
console.log(discount02.getPrice());
const discount03 = new ProducntDiscount(_product01, _flatPersentDiscount);
console.log(discount03.getPrice());
