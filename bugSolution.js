function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3

//Alternative solution with type conversion
function foo(a, b) {
  return Number(a) + Number(b);
}

console.log(foo(1, '2')); // Output: 3