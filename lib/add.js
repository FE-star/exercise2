function add(value_1, value_2) {
  if(!value_1 && !value_2) {
    return '0'
  }
  if(!value_1 || value_1.length === 0) {
    return value_2
  }
  if(!value_2 || value_2.length === 0) {
    return value_1
  }
  // 实现该函数
  let value_1_arr = value_1.split('')
  let value_2_arr = value_2.split('')
  let value_1_length = value_1_arr.length - 1
  let value_2_length = value_2_arr.length - 1
  // 进位标志
  let indictor = 0
  // 结果
  let result = []
  for(;(value_1_length >= 0 && value_2_length >= 0) || (indictor !== 0); value_1_length--, value_2_length--) {
    let num_1 = 0
    let num_2 = 0
    if(value_1_length >= 0) {
      num_1 = Number(value_1_arr[value_1_length])
    }
    if(value_1_length >= 0) {
      num_2 = Number(value_2_arr[value_2_length])
    }
    if(isNaN(num_1) || isNaN(num_2)) {
      return '0'
    }
    let resultTemp =  num_1 + num_2 + indictor
    result[result.length] = resultTemp % 10
    indictor = parseInt(resultTemp / 10)
  }
  // 容易遗漏 这个判断得加到 for 循环里面去
  // if(indictor !== 0) {
  //   result.push(indictor)
  // }
  if(value_1_length >= 0) {
    return result.concat(value_1_arr.slice(0, ++value_1_length)).reverse().join('')
  }
  if(value_2_length >= 0) {
    return result.concat(value_2_arr.slice(0, ++value_2_length)).reverse().join('')
  }
  return result.reverse().join('')
}

module.exports = add