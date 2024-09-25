function factorial(n) {
  // ваш код...
let result = 1;
  let i = 1;
  while (i <= n) {
    result *= i;
    i++;
  }
  return result;
}
console.log(factorial(0));
console.log(factorial(3));
console.log(factorial(5));
