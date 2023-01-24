export default function appendToEachArrayValue(array, appendString) {
  for (const val of array) {
    // eslint-disable-next-line
    array[array.indexOf(val)] = appendString + val;
  }

  return array;
}
