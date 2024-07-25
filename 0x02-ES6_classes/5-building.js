class Building {
  constructor(sqft) {
    this._sqft = sqft;
    this._validateEvacuationWarningMessage();
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }

  _validateEvacuationWarningMessage() {
    if (new.target !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }
}

export default Building;
