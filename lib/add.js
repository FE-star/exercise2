function add(num1, num2) {
  // 实现该函数
  let res = ''
  let i = num1.length - 1, j = num2.length - 1, flag = 0
  while (i >= 0 || j >= 0 || flag !== 0) {
      if (i >= 0) flag += num1.charCodeAt(i--) - 48
      if (j >= 0) flag += num2.charCodeAt(j--) - 48
      res = '' + flag % 10 + res
      flag /= 10
      // 向下取整
      flag = ~~flag
  }
  return res
}

module.exports = add