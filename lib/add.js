function bigNumberSum(a, b) {
  var res = '', temp = 0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || temp) {
    temp += ~~a.pop() + ~~b.pop();
    res = (temp % 10) + res;
    temp = temp > 9;
  }
  return res.replace(/^0+/, '');
}

function add(a, b) {
  // 实现该函数
  const num1 = parseInt(a, 10);
  const num2 = parseInt(b, 10);
  if (num1 > Number.MAX_SAFE_INTEGER || num2 > Number.MAX_SAFE_INTEGER) {
    return bigNumberSum(a, b);
  }
  return num1 + num2 + '';
}

module.exports = add