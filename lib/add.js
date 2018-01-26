function add(num1, num2) {
  if (num1.length <= 16 && num2.length <= 16) {
    return ((+num1) + (+num2)).toString()
  }
  // 实现该函数
  // 看了下网上的思路自己实现了下，有点乱还待整理
  var newArr = []
  // 把传进来的两个字符串转换为数组，并把数组里的值转化为数字
  num1 = num1.split('').map((item) => {
    return +item
  })
  num2 = num2.split('').map((item) => {
    return +item
  })
  // 查看两个数组的长度差
  var distance = Math.abs(num1.length - num2.length)
  // 把长度小的那个数组前面补0，使得两个数组长度相等
  if (num1.length > num2.length) {
    for(var i = 0; i < distance; i++) {
      num2.unshift(0)
    }
  } else if (num1.length < num2.length) {
    for(var i = 0; i < distance; i++) {
      num1.unshift(0)
    }
  }
  // 两个数组相加放入新数组
  newArr = num1.map((num, index) => {
    return num + num2[index]
  })
  // 倒序查看新数组每一项，如果是两位数则此项前面那项进1，此项截取只保留个位数字
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