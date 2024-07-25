export default class Car {
  // Constructor function to initialize the car object
  constructor(brand, motor, color) {
    // Assign the brand parameter to the _brand property
    this._brand = brand;
    // Assign the motor parameter to the _motor property
    this._motor = motor;
    // Assign the color parameter to the _color property
    this._color = color;
  }

  // Static method accessor using the Symbol.species well-known symbol
  static [Symbol.species]() {
    // Return the constructor function itself (Car)
    return this;
  }

  // Method to create a new instance of the same class
  cloneCar() {
    // Create a new instance of the class using the constructor returned by Symbol.species
    return new this.constructor[Symbol.species]();
  }
}
