const fibonacci = function (str) {
  let number = parseInt(str);
  if (number < 0) {
    return "OOPS";
  } else if (number === 0) {
    return 0;
  }

  let fibonacciSequence = [];
  fibonacciSequence[0] = 1;
  fibonacciSequence[1] = 1;

  for (let i = 2; i < number; i++) {
    fibonacciSequence[i] = fibonacciSequence[i - 2] + fibonacciSequence[i - 1];
  }
  return fibonacciSequence[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
