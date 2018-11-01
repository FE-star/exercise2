const simpleAdd = (a = 0, b = 0, c = 0) => {
  const value = Number(a) + Number(b) + Number(c)
  if (value > 9) {
    return {
      flag: String(value).split('')[0],
      value: String(value).split('')[1]
    }
  } else {
    return {
      flag: 0,
      value
    }
  }
}

function add(a, b) {
  // 实现该函数
  const arr_a = a.split('').reverse()
  const length_a = arr_a.length
  const arr_b = b.split('').reverse()
  const length_b = arr_b.length

  let maxLength
  let minLength
  let maxArr
  let minArr
  if(length_a >= length_b) {
    maxLength = length_a
    minLength = length_b
    maxArr = arr_a
    minArr = arr_b
  } else {
    maxLength = length_b
    minLength = length_a
    maxArr = arr_b
    minArr = arr_a
  }
  let _flag = 0
  const valueArr = []
  for(let i = 0; i < maxLength; i++){
    const { flag, value } = simpleAdd(maxArr[i], i < minLength ? minArr[i] : 0, _flag)
      valueArr.push(value)
      _flag = flag
  }
  // 处理最后一次进位
  if (_flag > 0) {
    valueArr.push(_flag)
  }
  return valueArr.reverse().join('')
}

module.exports = add