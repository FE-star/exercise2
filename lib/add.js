function add(a, b) {
  let result = ''
  let flag = false
  while(a.length || b.length || flag) {
    let x = Number.parseInt(a.substr(-14) || 0, 10)
    let y = Number.parseInt(b.substr(-14) || 0, 10)
    a = a.substr(0, a.length - 14)
    b = b.substr(0, b.length - 14)
    let item = x + y + flag
    flag = false
    if (item > Math.pow(10, 14) - 1) {
      flag = true
      item = String(item).substr(-14)
    }
    result = item + result
  }
  return result
}

module.exports = add