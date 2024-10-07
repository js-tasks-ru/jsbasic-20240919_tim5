function getMinMax(str) {
  let words = str.split(' ');
  let min = Infinity;
  let max = -Infinity;
  let hasNumbers = false;
  for (let word of words) {
    if (!isNaN(parseFloat(word))) {
      let num = parseFloat(word);
      if (num < min) {
        min = num;
      }

      if (num > max) {
        max = num;
      }

      hasNumbers = true;
    }
  }

  if (hasNumbers) {
    return { min, max };
  } else {
    return { min: Infinity, max: -Infinity };
  }
}