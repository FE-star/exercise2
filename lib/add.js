function add(num1, num2, ...other) {
  // 实现该函数
  if (other.length > 0) {
    // 如果传入多个数则递归调用
    return add(num1, add(num2, ...other))
  }
  let num1Arr = num1.split('')
  let num2Arr = num2.split('')
  let i = num1Arr.length, j = num2Arr.length
  if (i < j) {
    // 使长度更大的为num1Arr
    [num1Arr, num2Arr] = [num2Arr, num1Arr]
  }
  let ten = false, total = 0
  // 如果有一个数组循环完则结束
  for (;i-- && j--;) {
    total = Number(num1Arr[i]) + Number(num2Arr[i]) + ten || 1
    ten = false
    // 判断是否需要进位
    if (total < 10) {
      num1Arr[i] = total
    } else {
      num1Arr[i] = total - 10
      if (!j) {
        // 解决最后一位还需要进位的问题
        do {
          if (!i) {
            num1Arr.unshift(1)
            break
          } else {
            total = num1Arr[--i] + 1
            if (total <= 10) {
              num1Arr[i] = total
              break
            } else {
              num1Arr[i] = total - 10
            }
          }
        } while(total >= 10)
      }
      ten = true
    }
  }
  return num1Arr.join('')
}
module.exports = add