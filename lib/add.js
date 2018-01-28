function add(a, b) {
  var lenA = a.length
  var lenB = b.length
  var len = lenA > lenB ? lenA : lenB
  if (lenA > lenB) {
    for (var i = 0; i < lenA - lenB; i++) {
      b = '0' + b
    }
  } else {
    for (var i = 0; i < lenB - lenA; i++) {
      a = '0' + a
    }
  }
  var arrA = a.split('').reverse()
  var arrB = b.split('').reverse()
  var arr = []
  for (i = 0; i < len; i++) {
    arr.push(parseInt(arrA[i]) + parseInt(arrB[i]))
  }
  for (i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
      arr[i] -= 10
      if (arr[i + 1])
        arr[i + 1] = parseInt(arr[i + 1]) + 1
      else
        arr[i + 1] = 1;
    }
  }

  return arr.reverse().join('')
}


module.exports = add