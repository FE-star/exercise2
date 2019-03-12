function add(a, b) {
  // 实现该函数
  var res = '',
    temp = 0;
  a = a.split('');  
  b = b.split(''); // 分割成数组
  
  while (a.length || b.length || temp) {
    temp += ~~a.pop() + ~~b.pop();  // ~~ 转换成Number类型
    res = (temp % 10) + res;  // temp 取个位数相加到res上
    temp = temp > 9;  // 逢十进一
  }
  return res.replace(/^0+/, '');  // 剔除前面的0

}

module.exports = add