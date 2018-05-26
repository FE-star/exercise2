const add = (a, b) => {
  a = '0' + a // 加0是因为两个最大的位数相加可能进位
  b = '0' + b

  // 将数字转换为字符串
  let arrA = a.split('')
  let arrB = b.split('')
  let result = []
  let temp = ''
  let carry = 0
  //计算两个数值字符串的长度差
  let distance = a.length - b.length
  let len = distance > 0 ? a.length : b.length

  // 在长度小的那个数值字符串前面添加distance个0, 这样两个数值的位数就保持一致了
  if (distance > 0) {
    for (let i = 0; i < distance; i++) {
      arrB.unshift('0')
    }
  } else {
    for (let i = 0; i < Math.abs(distance); i++) {
      arrA.unshift('0')
    }
  }

  // 从数组的最后一位向前开始遍历，把两个数组对应位置的数值字符串转成整型后相加
  // carry表示相加后的进位，比如最后一位相加是 6 + 7 = 13 这里进位carry是1
  // 在遍历的时候每次都加上上次相加后的carry进位
  for (let i = len - 1; i >= 0; i--) {
    temp = +arrA[i] + (+arrB[i]) + carry
    if (temp > 10) {
      carry = 1
      result.push((temp + '')[1])
    } else {
      carry = 0
      result.push(temp)
    }
  }
  result = result.reverse().join('').replace(/^0/, '')
  // console.log(result)
  return result
}

module.exports = add
