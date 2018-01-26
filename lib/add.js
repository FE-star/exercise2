function add(num1, num2) {
  if (num1.length <= 16 && num2.length <= 16) {
    return ((+num1) + (+num2)).toString()
  }
  // 实现该函数
  var newArr = []
  num1 = num1.split('').map((item) => {
    return +item
  })
  num2 = num2.split('').map((item) => {
    return +item
  })
  var distance = Math.abs(num1.length - num2.length)
  if (num1.length > num2.length) {
    for(var i = 0; i < distance; i++) {
      num2.unshift(0)
    }
  } else {
    for(var i = 0; i < distance; i++) {
      num1.unshift(0)
    }
  }
  newArr = num1.map((num, index) => {
    return num + num2[index]
  })
  for (var j = newArr.length - 1; j > 0; j--) {
    if (j === 0 && newArr[j] > 9) {
      newArr[j] = newArr[j]%10
      newArr.unshift(1)
      return
    }
    if (newArr[j] > 9) {
      newArr[j-1]++
      newArr[j] = newArr[j]%10
    } 
  }
  return newArr.join('').toString()
}

module.exports = add