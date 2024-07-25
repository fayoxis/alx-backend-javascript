import Car from './10-car';

// This is a class definition for an electric vehicle car (EVCar)
// It extends the Car class, inheriting its properties and methods
export default class EVCar extends Car {
  // Constructor function that takes in brand, motor, color, and range as arguments
  constructor(brand, motor, color, range) {
    // Call the parent class (Car) constructor with brand, motor, and color arguments
    super(brand, motor, color);
    // Set the range property of the EVCar instance using the setRange method
    this.setRange(range);
  }

  // Method to get the range of the EVCar instance
  getRange() {
    return this._range;
  }

  // Method to set the range of the EVCar instance
  setRange(value) {
    this._range = value;
  }

  // Method to create a new instance of the same class as the current instance
  // This is done using the species pattern and the Symbol.species well-known symbol
  cloneCar() {
    // Get the constructor of the derived class (EVCar or a class that extends EVCar)
    const SpeciesConstructor = super.constructor[Symbol.species] || this.constructor;
    // Create a new instance of the derived class using the SpeciesConstructor
    return new SpeciesConstructor();
  }
}

  cloneCar() {
    const Species = super.constructor[Symbol.species];

    return new Species();
  }
}
