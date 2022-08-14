function add(s1, s2) {
  // 实现该函数
  if ((typeof s1 !== 'string') || (typeof s2 !== 'string')) {
    throw new Error('入参类型错误')
  }
  
  // 简单考虑数字，暂不考虑其它异常输入，比如'000000'
  if (!s1.match(/^\d+$/) || !s2.match(/^\d+$/)) {
    throw new Error('入参为字符串，但不是数字')
  }

  let i = s1.length - 1
  let j = s2.length - 1
  let next = 0
  let result = ''
  while (i >= 0 && j >= 0) {
    let sum = Number(s1[i]) + Number(s2[j]) + next
    let current = sum % 10
    next = Math.floor(sum / 10)
    result = current + result 
    i--
    j--
  }

  while (i >= 0) {
    let sum = Number(s1[i]) + next
    let current = sum % 10
    next = Math.floor(sum / 10)
    result = current + result 
    i--
  }

  while (j >= 0) {
    let sum = Number(s2[j]) + next
    let current = sum % 10
    next = Math.floor(sum / 10)
    result = current + result 
    j--
  }

  if (next) {
    result = next + result 
  }

  return result
  
}

module.exports = add