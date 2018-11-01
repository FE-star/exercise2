function add(a,b) {
  // 实现该函数
  // 将字符串分割成数组
  a = a.split('')
  b = b.split('')
  let flag = 0
  let result = ''

  while(a.length || b.length || flag) {
    // ~为按位取反 ~~返回数字
    flag += ~~a.pop() + ~~b.pop()
    // 隐式转换成字符串
    result = (flag%10) + result
    flag = ~~(flag>9)    
  }
  return result
}
module.exports = add