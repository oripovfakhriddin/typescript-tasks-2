class Car {
  constructor(
    public company: string,
    public model: string,
    private year: number,
    protected fuelType: string
  ) {
    this.company = company;
    this.model = model;
    this.year = year;
    this.fuelType = fuelType;
  }
  getAge() {
    return `2023 - ${this.year}`;
  }


  getInfo() {
    return `${this.company}si da ishlab chiqariladigan ${this.model} avtomobili ${this.fuelType}da yuradi ${this.getAge()} yildan buyon ishlab chiqarilmoqda`;
  }
}


const p1 = new Car("Tesla", "Model X", 2022, "energy");

console.log(p1);