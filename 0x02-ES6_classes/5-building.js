export default class Building {
  /**
   * @param {number} sqft - size of building
   *
   * Implement a getter and setter for sqft
   */
  constructor(sqft) {
    this._sqft = sqft;
    this.validateEvacuationWarningMessage();
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }

  validateEvacuationWarningMessage() {
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
