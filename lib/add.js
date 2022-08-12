const reg = /^\d+$/
function add(num1, num2) {
  if (!reg.test(num1) || !reg.test(num2)) {
    return false
  }
  let res = num1 * 1 + num2 * 1
  const isSafeInteger = Number.isSafeInteger
  if (isSafeInteger(res) && isSafeInteger(num1 * 1) && isSafeInteger(num2 * 1)) {
    return res + ''
  }

  let maxLen = Math.max(num1.length, num2.length)
  const str1 = num1.padStart(maxLen, 0)
  const str2 = num2.padStart(maxLen, 0)
  let flag = 0
  let temp = 0
  let result = ''
  while (maxLen-- > 0) {
    temp = str1[maxLen] * 1 + str2[maxLen] * 1 + flag
    flag = Math.floor(temp/10)
    result = temp%10 + result
  }
  if (flag === 1) {
    result = '1' + result
  }
  return result
}

module.exports = add