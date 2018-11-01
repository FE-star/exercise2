function add(a, b) {
  a = a.split('')
  b = b.split('')
  let c = 0, sum = ''
  while(a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop()
    sum = c % 10 + sum
    c = c > 9
  }
  return sum.replace(/^0+/, '')
}

module.exports = add