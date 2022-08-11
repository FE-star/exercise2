function add(a, b) {
  const numReg = /^\d+$/
  if (!a || !a.match(numReg) || !b || !b.match(numReg)) {
    return NaN
  }

  const maxLen = Math.max(a.length, b.length);
  let preGte10 = 0; // 进位
  let sum = '';
  for (let i = maxLen - 1; i >= 0; i--) {
    const result = parseInt(a[i] || 0) + parseInt(b[i] || 0) + preGte10;
    preGte10 = result >= 10 ? 1 : 0;
    sum = result % 10 + sum;
  }
  return preGte10 ? 1 + sum : sum;
}

module.exports = add