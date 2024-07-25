import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(newRange) {
    this._range = newRange;
  }

  cloneCar() {
    const Constructor = Object.getPrototypeOf(this).constructor[Symbol.species] || this.constructor;
    return new Constructor();
  }
}
