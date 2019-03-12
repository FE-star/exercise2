function add(x, y) {
  let carry = 0
  let sumStr = ''
  for(let i = 1; i <= Math.max(x.length, y.length); i++) {
    const a = +x.charAt(x.length - i) || 0
    const b = +y.charAt(y.length - i) || 0
    const sum = a + b + carry
    carry = sum >= 10 ? 1 : 0
    sumStr = sum % 10 + sumStr
  }
  if (carry) {
    sumStr = carry + sumStr
  }
  return sumStr
}

module.exports = add