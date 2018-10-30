function add(x, y) {
  // 实现该函数
  let a = String(x);
  let b = String(y);
  let index = 0,carry = 0;
  let answer = [];
  if (/[^\d+]/.test(a) || /[^\d+]/.test(b)) return NaN;
  while(index < a.length && index < b.length) {
    const bita = parseInt(a[a.length - index - 1]) || 0;
    const bitb = parseInt(b[b.length - index - 1]) || 0;
    const result = bita + bitb + carry;
    if (result > 10) {
      answer.unshift(result - 10);
      carry = 1;
    } else {
      answer.unshift(result);
      carry = 0;
    }
    index++;
  }
  return answer.join('');
}

module.exports = add
