export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);

  if (buffer.byteLength < position) {
    return Error('Position outside range');
  }

  const arr = new DataView(buffer);
  arr.setInt8(position, value);

  return arr;
}
