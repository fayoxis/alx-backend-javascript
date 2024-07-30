/**
 * buffer array with a given position set to a given value.
 * @param {Number} length - length of the buffer.
 * @param {Number} position - position to modify.
 * @param {Number} value -value to be stored in the position.
 * @author <https://github.com/>
 * @returns {DataView}
 */
export default function createInt8TypedArray(length, position, val) {
  if (position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const view = new Uint8Array(buffer);

  view[position] = val;

  return view;
}

export default createInt8TypedArray;
