function add(a, b) {
  // 实现该函数
  var arrA = a.split('').reverse(),
      arrB = b.split('').reverse(),
      result = [],
      carry = 0,
      length = Math.max(arrA.length, arrB.length)

  for (var i = 0; i < length; i++) {
    var t = (+arrA[i] || 0) + (+arrB[i] || 0) + carry
    if (t > 9) {
      carry = 1
      t -= 10
    } else {
      carry = 0
    }
    result.push(t)
  }

  if (carry) {
    result.push(1)
  }

  return result.reverse().join('')
}

module.exports = add
