function add(a,b) {
  // 实现该函数
  a = parseInt(a)
  b = parseInt(b)
  let c = 0
  c = parseInt(a) + parseInt(b)
  c = c.toString()
  return c
}

module.exports = add