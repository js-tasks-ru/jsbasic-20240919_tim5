function filterRange(arr, a, b) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    if (a <= currentElement && currentElement <= b) {
      result.push(currentElement);
    }
  }
  return result;
}
