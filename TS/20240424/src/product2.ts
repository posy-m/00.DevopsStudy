// 할인의 구조를 정의
interface IDiscount {
  // 함수가 있어요. 할인가를 가져오는 함수
  getDisCountPric(price : number) : number
}
// interface 구조를 정의하는 곳
// 값을 사용하거나 함수의 내용을 작성할 수 없다.

// 가격만 수정하는 할인
// 기능단위로 클래스를 작성
// 고정 할인의 기능을 담당하는 클래스
//클래스를 기능별로 만드는게 나중에 유지보수 할때 쉽다.
class FlatDiscount implements IDiscount {
  amount : number
  constructor(amount : number) {
    this.amount = amount;
  }
  getDisCountPric(price: number): number {
    return price - this.amount;
  }
}

// 가격을 할인율을 적용하는 기능을 담당하는 클래스
class PercentDiscount implements IDiscount {
  amount : number
  constructor(amount : number) {
    this.amount = amount;
  }
  getDisCountPric(price: number): number {
    return price  * (1 - this.amount /100)
  }
}

//특별 할인 행사
//특별 할인기능만 담당하는 객체를 만들기 위한 클래스
class FlastPersent implements IDiscount {
  flatAmount : number
  persentAmount : number
  constructor (flatAmount : number, persentAmount : number) {
    this.flatAmount = flatAmount;
    this.persentAmount = persentAmount;
  }
  getDisCountPric(price: number): number {
    const FlatDiscount = price - this.flatAmount;
    return FlatDiscount * (1 - this.persentAmount / 100);
    
  }
}

class Products {
  name : string
  price : number
  constructor(name : string, price : number) {
    this.name = name;
    this.price = price;
  }

  getName() : string{
    return this.name
  }
  getPrice() : number {
    return this.price
  }
}

// ProducntDiscount 할인의 기능을 가지고 있는 객체를 받아서
// 할인을 적용
class ProducntDiscount {
  product : Products
  discount : IDiscount
  constructor(product : Products, discount : IDiscount) {
    this.product = product;
    this.discount = discount;
  }
  getPrice() : number {
    return this.discount.getDisCountPric(this.product.getPrice());
  }
}

const _product01 = new Products("Mac", 100000);
const _product02 = new Products("Window", 20000);

const _flatdiscount = new FlatDiscount(10000);
const _persentDiscount =new PercentDiscount(10);
const _flatPersentDiscount = new FlastPersent(10000, 10);

const discount01 = new ProducntDiscount(_product01, _flatdiscount);
console.log(discount01.getPrice());
const discount02 = new ProducntDiscount(_product02, _persentDiscount);
console.log(discount02.getPrice());
const discount03 = new ProducntDiscount(_product01, _flatPersentDiscount);
console.log(discount03.getPrice())
