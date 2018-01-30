function add(a, b) {
  // 实现该函数
  var arrA = a.split('').reverse(),
      arrB = b.split('').reverse(),
      result = [],
      carry = 0,
      length = Math.max(arrA.length, arrB.length),
      t, i

  for (i = 0; i < length; i++) {
    t = (+arrA[i]) + (+arrB[i]) + carry
    if (t > 9) {
      carry = 1
      result.push(t - 10)
    } else {
      carry = 0
      result.push(t)
    }
  }

  if (carry) {
    result.push(1)
  }

  result = result.reverse().join('')
  return result
}

module.exports = add
