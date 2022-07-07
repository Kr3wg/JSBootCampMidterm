// Do not use Math.pow() in your solution.
function expo(num1, num2) {
  let res = 1;
  for (let i = 1; i <= num2; i++) {
    res *= num1;
  }
  return res;
}

module.exports = { expo };
