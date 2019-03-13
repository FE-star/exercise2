function add(a, b) {
  // 实现该函数
  var sum = parseInt(a) + parseInt(b)
  if (parseInt(a) > Number.MAX_SAFE_INTEGER || parseInt(a) > Number.MAX_SAFE_INTEGER) {
    return bigNumberSum(a, b);
  }
  return sum.toString()
}

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

module.exports = add