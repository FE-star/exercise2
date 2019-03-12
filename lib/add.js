function add(a, b) {
  let temp = 0
  let result = ''
  a = a.split('')
  b = b.split('')
  while(a.length || b.length || temp) {
    temp += ~~a.pop() + ~~b.pop()
    result = temp%10 + result
    temp = temp > 9
  }
  return result.replace(/^0+/,'')
}

module.exports = add