function add(a, b) {
  // 实现该函数
  let response = '',
    temp = 0
  a = a.toString().split('')
  b = b.toString().split('')
  while (a.length || b.length || temp) {
    temp += ~~a.pop() + ~~b.pop()
    response = (temp % 10) + response
    temp = temp > 9
  }
  return response.replace(/^0+/, '')
}

module.exports = add
