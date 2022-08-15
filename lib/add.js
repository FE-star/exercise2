// 参数转换成string类型，并进行5位拆分，返回数组（没有考虑小数）
function split(number) {
  if(typeof number === 'number' || typeof number === 'string'){
    const reg = /\B(?=(\d{4})+\b)/g
    number = number.toString()
    return number.replace(reg, ',').split(',')
  }
  return []
}

function add(number1, number2) {
  // 倒叙,从后往前加
  number1 = split(number1).reverse()
  number2 = split(number2).reverse()
  // 取数组长度大的进行循环相加
  let number = number1.length > number2.length ? number1 : number2
  let relust = []
  let isBeyond = false
  // 把两个数组中的数值进行相加
  number = number.map((item, index) => {
    let num = (Number(number1[index]) || 0) + (Number(number2[index]) || 0)
    // 上一个相加超过4位的把第5位加到后面的数值中
    if(isBeyond){
      num = num + 1
      isBeyond = false
    }
    num = num.toString()
    // 如果是最后一组数值就不能切割出去给
    if(num.length > 4 && index < number.length - 1) {
      isBeyond = true
      return relust.unshift(num.substring(1))
    }
    relust.unshift(num)
  });
  return relust.join('')
}

module.exports = add;
