//상품을 정의하는 interface _ 객체의 구조를 정의 하는 타입
interface Iproduct {
  name : string, 
  price : number,
  discountAmot : number,
}

//구조를 검사를 하겠다.
class Product implements Iproduct {
    name: string;
    price: number;
    discountAmot : number;
    constructor(name : string, price : number) {
      this.name = name;
      this.price = price;
      this.discountAmot = 0;
    }

    //getName를 안해주면 값을 가져올 수가 없음
    // 이름을 반환해주겠다
    // 타입을 지정한걸 반환해줘야함!
    getName() : string {
      return this.name;
    }

    getPrice() : number {
      return this.price - this.discountAmot;
    }

    //void는 안써도 됨! 하지만 다른작업자들이 알수 있도록.. 기본이 void_void는 리턴을 할 수 없당.
    setDisCountAmount(amount : number) : void {
      this.discountAmot = amount;
    }
}

class ProducthManager {
  // product class로 객체만 담을 수 있는 배열
  products : Product[];
  constructor() {
    this.products = [];
  }

  setCreateProduct(_product : Product) {
    this.products.push(_product)
  }
  getProduct(index :number) : Product {
    return this.products[index];
  }
}

const product01 : Product = new Product("Mac", 1000);
product01.setDisCountAmount(200); //1000원에서 200원할인된거
const producthManager : ProducthManager = new ProducthManager();
producthManager.setCreateProduct(product01);

console.log(producthManager.getProduct(0).getPrice());

// 고정 금액 할인
// 할인율 할인
// 특별 할인