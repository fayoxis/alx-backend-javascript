export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  static [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const SpeciesConstructor = this.constructor[Symbol.species];
    return new SpeciesConstructor();
  }
}
