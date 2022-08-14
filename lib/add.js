function add(num1, num2) {
  // 实现该函数
  if(!isValid(num1) || !isValid(num2)) {
    return;
  }

  let result = ''
  let i = num1.length - 1
  let j = num2.length - 1
  let carry = 0

  while(i >= 0 && j >= 0) {
    let sum = parseInt(num1[i]) + parseInt(num2[j]) + carry
    carry = Math.floor(sum / 10)
    result = (sum % 10).toString() + result
    i--
    j--
  }

  while(i >= 0) {
    let sum = parseInt(num1[i]) + carry
    carry = Math.floor(sum / 10)
    result = (sum % 10).toString() + result
    i--
  }

  while(j >= 0) {
    let sum = parseInt(num2[j]) + carry
    carry = Math.floor(sum / 10)
    result = (sum % 10).toString() + result
    j--
  }

  if(carry) {
    result = carry.toString() + result
  }

  return result
}

function isValid(num) {
  if(/^[0-9]*$/.test(num)) {
    return true
  }
}

module.exports = add