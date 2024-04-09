export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    let idx = array.indexOf(value);
    let newValue = appendString + value;

    array[idx] = newValue;
  }

  return array;
}
