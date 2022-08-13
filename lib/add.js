function add(str1, str2) {
  // 判断是否传了两个数
  if (arguments.length !== 2) return arguments[0]
  // 判断参数类型
  if (typeof str1 !== 'string' || typeof str2 !== 'string') throw Error('请传入字符串类型的数值')

  // 找出两个数之间的大数
  let maxLength = Math.max(str1.length, str2.length)

  // 将两个字符串长度填充至相等
  str1 = str1.padStart(maxLength, '0')
  str2 = str2.padStart(maxLength, '0')

  let count = 0;
  let j = 0; // 记录进位
  let sum = "" // 总和

  // 从末尾数开始相加
  for (let i = maxLength - 1; i >= 0; i--) {
    count = parseInt(str1[i]) + parseInt(str2[i]) + j;
    j = Math.floor(count / 10);
    sum = count % 10 + sum
  }
  if (j === 1) {
    sum = '1' + sum
  }

  return sum
}
console.log(add('42329', '21532'));

module.exports = add