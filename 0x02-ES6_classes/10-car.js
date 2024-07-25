export default class Car {
  // The constructor function initializes the properties of the Car object
  constructor(brand, motor, color) {
    this._brand = brand; // The brand of the car
    this._motor = motor; // The motor of the car
    this._color = color; // The color of the car
  }

  // This static getter returns the constructor of the current class
  // This is used for the cloneCar() method to create a new instance of the same class
  static get [Symbol.species]() {
    return this.prototype.constructor;
  }

  // This method creates a new instance of the Car class
  // using the constructor returned by the Symbol.species getter
  cloneCar() {
    return new (this.constructor[Symbol.species])();
  }
}
