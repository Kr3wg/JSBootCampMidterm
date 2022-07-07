function counter(num) {
  const result = [];
  for (let i = 1; i <= num; i++) {
    result.push(i);
  }
  return result;
}

module.exports = { counter };
