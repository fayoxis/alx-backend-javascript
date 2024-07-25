class Car {
  #brand;
  #motor;
  #color;

  constructor(brand, motor, color) {
    this.#brand = brand;
    this.#motor = motor;
    this.#color = color;
  }

  static [Symbol.species] = this;

  cloneCar() {
    return new this.constructor[Symbol.species]();
  }
}

export default Car;
