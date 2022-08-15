// 参数转换成string类型，并进行14位拆分，返回数组（没有考虑小数）
function split(number) {
  if(typeof number === 'number' || typeof number === 'string'){
    const reg = /\B(?=(\d{4})+\b)/g
    number = number.toString()
    return number.replace(reg, ',').split(',')
  }
  return []
}

function add(number1, number2) {
  number1 = split(number1)
  number2 = split(number2)
  // 取数组长度大的进行循环相加
  let number = number1.length > number2.length ? number1 : number2
  // 把两个数组中的数值进行相加
  number = number.map((_item, index) => {
    return (Number(number1[index]) || 0) + (Number(number2[index]) || 0)
  });
  let relust = []
  let isBeyond = false
  // 倒叙（从后往前加）后把第15位加到数组的后一位中
  number.reverse().map((item, index) => {
    // 上一个相加超过14位的把第15位加到后面的数值中
    if(isBeyond){
      item = item + 1
      isBeyond = false
    }
    item = item.toString()
    // 如果是最后一组数值就不能切割出去给
    if(item.toString().length > 4 && index < number.length-1) {
      isBeyond = true
      return relust.unshift(item.substring(1))
    }
    relust.unshift(item)
  });
  return relust.join('')
}

module.exports = add;
