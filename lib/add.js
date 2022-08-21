function add(a, b) {
  // 实现该函数
  if (a.length < b.length) [a, b] = [b, a]
  b = new Array(a.length - b.length).fill('0').join('') + b
  let carry = 0
  let nums = []
  for (let i = a.length - 1; i >= 0; i--) {
    let num = carry + parseInt(a[i]) + parseInt(b[i])
    nums.push(num % 10)
    carry = parseInt(num / 10)
  }
  if (carry) nums.push(carry)
  return nums.reverse().join('')
}

module.exports = add