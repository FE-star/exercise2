function add(_a, _b) {
  const a = _a.split('').map(n => +n)
  const b = _b.split('').map(n => +n)
  let sign = 0
  let res = ''
  console.log(222, a, b)
  while (a.length || b.length) {
    const n = a.pop() || 0
    const m = b.pop() || 0
    const sum = n + m + sign
    let str = Math.floor(sum % 10)
    sign = Math.floor(sum / 10)
    res = str + res
  }
  if (sign === 1) {
    res = '1' + res
  }
  return res
  // 实现该函数
}

console.log(add("42329", "21532"))
module.exports = add