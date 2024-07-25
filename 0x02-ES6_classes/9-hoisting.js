export default class HolbertonClass {
  #size;
  #location;

  constructor(size, location) {
    this.#size = size;
    this.#location = location;
  }

  set size(value) {
    this.#size = value;
  }

  get size() {
    return this.#size;
  }

  set location(value) {
    this.#location = value;
  }

  get location() {
    return this.#location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return this.location;
    }
    if (hint === 'number') {
      return this.size;
    }
    return null;
  }
}
