function add(a, b) {
  const maxLength = Math.max(a.length, b.length);
  const num1 = a.padStart(maxLength, '0');
  const num2 = b.padStart(maxLength, '0');
  let res = '';
  let carry = 0;
  for (let i = num1.length - 1; i >= 0; --i) {
    const count = parseInt(num1[i]) + parseInt(num2[i]) + carry;
    carry = Math.floor(count / 10);
    res = count % 10 + res;
  }
  if (carry) {
    res = '1' + res;
  }
  return res;
}

module.exports = add