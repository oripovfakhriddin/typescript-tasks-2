class Product {
  constructor(
    public name: string,
    public price: number,
    public quantity: number
  ) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  totalPrice() {
    return `${this.price} + ${this.quantity}`;
  }
}

const p2 = new Product("Pepsi", 14000, 2);

console.log(p2);
