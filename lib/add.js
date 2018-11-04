function add(a, b) {
  // 实现该函数
  let num1Arr = a.split(''),num2Arr = b.split(''),carry = 0,result = [],median = 0;

  while (num1Arr.length || num2Arr.length || carry) {
    median = ~~num1Arr.pop() + ~~num2Arr.pop() + carry
    if (median > 9) {
      median = median - 10;
      carry=1
    } else {
      carry = 0
    }
    result.unshift(median)
  }
  return result.join('')
}

module.exports = add