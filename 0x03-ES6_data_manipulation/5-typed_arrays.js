/**
 * buffer array with a given position set to a given value.
 * @param {Number} length - length of the buffer.
 * @param {Number} position - position to modify.
 * @param {Number} value -value to be stored in the position.
 * @author <https://github.com/>
 * @returns {DataView}
 */
export default function createInt8TypedArray(length, position, val) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  
  const buffer = new ArrayBuffer(length);
  const int8Array = new Int8Array(buffer);
  int8Array[position] = val;
  
  return new DataView(buffer);
}
