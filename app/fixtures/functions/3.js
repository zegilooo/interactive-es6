const sumNumbers = function(...args) {
  let total = 0;

  // BONUS: could you rewrite this using a reduce?
  args.forEach(function(x) {
    total = total + x;
  });

  return total;
}

assertEqual(sumNumbers(1, 2, 4), 6);
