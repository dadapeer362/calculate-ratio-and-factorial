const ratioOfTwoNumbers = require("../ratio");
const factorialOfNumber = require("../factorial");

function ratioAndFactorial(num1, num2, num) {
  let ratio = ratioOfTwoNumbers(num1, num2);
  let factorial = factorialOfNumber(num);
  let result = {
    ratio: ratio,
    factorial: factorial,
  };
  return result;
}

module.exports = ratioAndFactorial;
