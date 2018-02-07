function add(a, b) {
  // 实现该函数
  var res = '', c = 0;
  // 转数组
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || c) {
    // 取各数组最后一位转成数值后相加
    c += ~~a.pop() + ~~b.pop();
    res = c % 10 + res;
    // 是否需要进位
    c = c > 9;
  }
  // 将开头的0替换为空字符
  return res.replace(/^0+/, '');
}

module.exports = add