function add(a, b) {
  // 实现该函数

  /* // 方法一：BigInt
  let result = BigInt(a) + BigInt(b)

  return result.toString() */

  // 方法二：直接相加
  /* let arr1 = a.split('').map(num => Number(num))
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

  return result.reverse().join('') */

  // 方法3 简洁版
  var res = '', // 存储最终结果
    c = 0; // 假设想加结果>=10，那么把10位缓存起来
  // 将字符串切割成数组，每一位单独相加
  a = a.split('')
  b = b.split('')

  // 不断循环相加，直到所有数字都加完为止
  while (a.length || b.length || c) {
    /* 
      一、c为Boolean：
        1. true与数字n相加，相当于1+n
        2. false与数字n相加，相当于0+n
      二、[Bitwise NOT (~)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT)
        1. 数字进行~~运算，例如~~3的结果为3
        2. a和b两个数组长度可能不一致，其中一个会先清空
        3. 假设a为[]，a.pop()为undefined
        4. ~~undefined的结果为0
      三、c += ~~a.pop() + ~~b.pop() 可以计算出每一位相加的结果
    */
    c += ~~a.pop() + ~~b.pop()
    /* 
      1. c的结果可能>=10，但每一位只能存储0-9的数字，因此要用c % 10取个位数
      2. 每位数要存储在结果的首尾
    */
    res = (c % 10) + res
    /* 
      判断c是否>=10，并进行下一次相加
    */
    c = c > 9
  }

  return res.replace(/^0+/, '')
}

module.exports = add
