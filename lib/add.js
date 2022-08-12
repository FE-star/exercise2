function add(a, b) {
  // 实现该函数

  /* // 方法一：BigInt
  let result = BigInt(a) + BigInt(b)

  return result.toString() */

  // 方法二：直接相加
  let arr1 = a.split('').map(num => Number(num))
  let arr2 = b.split('').map(num => Number(num))
  let result = []
  let i = arr1.length - 1
  let j = arr2.length - 1
  let plus = 0

  while ((i >= 0, j >= 0)) {
    let sum = arr1[i--] + arr2[j--] + plus

    if (sum > 9) {
      plus = 1
      sum = sum % 10
    } else {
      plus = 0
    }

    result.push(sum)
  }

  let k = i === 0 ? j : i
  let arr = i === 0 ? arr2 : arr1

  while (k >= 0) {
    sum = arr[k--] + plus

    if (sum > 9) {
      plus = 1
      sum = sum % 10
    } else {
      plus = 0
    }

    result.push(sum)
  }

  if (plus) {
    result.push(plus)
  }

  return result.reverse().join('')
}

module.exports = add
