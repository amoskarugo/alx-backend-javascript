export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  for (const value of array) {
    const newValue = appendString + value;
    newArr.push(newValue);
  }

  return newArr;
}
