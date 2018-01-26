function add(a, b) {
  // 实现该函数
  a = '0' + a
  b = '0' + b

  var arrA = a.split(''),
      arrB = b.split(''),
      result = [],
      carry = 0,
      t,
      difference = Math.abs(arrA.length - arrB.length),
      length = arrA.length >= arrB.length ? arrA.length : arrB.length,
      sum

  if (arrA.length > arrB.length) {
    for (var i = 0; i < difference; i++) {
      arrB.unshift('0')
    }
  } else if (arrA.length < arrB.length) {
    for (var i = 0; i < difference; i++) {
      arrA.unshift('0')
    }
  }

  for (var i = length - 1; i >= 0; i--) {
    t = Number(arrA[i]) + Number(arrB[i]) + carry
    if (t > 9) {
      carry = 1
      result.unshift(t - 10)
    } else {
      carry = 0
      result.unshift(t)
    }
  }

  if (result[0] == 0) {
    result.splice(0, 1)
  }

  sum = result.join('')

  return sum
}

module.exports = add
