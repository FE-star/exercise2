function add(a, b) {
  // 实现该函数
  var aArr = a.split(""),
  bArr = b.split("");
  var temp = 0, // 记录10进制是否加一
      res = ""; // 记录结果, 以字符串的形式表示
  while (aArr.length || bArr.length || temp) {
      temp += ~~aArr.pop() + ~~bArr.pop(); //这里累计是因为, temp作为10进制时, 需要进一操作
      res = (temp % 10) + res; // 对10取余, 获取个位数, 因为res是字符串, 所以对于个十百千万的位置问题, 会自动递增, 需要注意, res一定要放在后面, 不能使用+= 因为, 运算时从后往前运算的
      temp = temp >= 10 ? 1 : 0 // 为10进制, 且需要进一时, 设置为1, 否则为0
  }
  return res
}
module.exports = add