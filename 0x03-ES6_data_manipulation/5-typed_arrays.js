/**
 * buffer array with a given position set to a given value.
 * @param {Number} length - length of the buffer.
 * @param {Number} position - position to modify.
 * @param {Number} value -value to be stored in the position.
 * @author <https://github.com/>
 * @returns {DataView}
 */
const createInt8TypedArray = (length, position, value) => {
  if (position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  view.setInt8(position, value);

  return new Int8Array(buffer);
};

export default createInt8TypedArray;
