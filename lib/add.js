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

function add2(a, b) {
  var carry = 0,
      arr = []

  while (a.length > 0 || b.length > 0) {
    var res = (+a.substr(-14) || 0) + (+b.substr(-14) || 0) + carry
    a = a.substr(0, a.length - 14)
    b = b.substr(0, b.length - 14)

    if (String(res).length > 14) {
      carry = 1
      res = res.substr(-14)
    }
    arr.unshift(res)
  }

  if (carry == 1) {
    arr.unshift(1)
  }

  return arr.join('')
}

module.exports = {
  add: add,
  add2: add2
}
