function add(a,b) {

  // 判断传入参数类型
  if (typeof(a) !== 'string' || typeof(b) !== 'string') {
    throw new Error('传入参数需是字符类型')
  }
  a = a.split('').reverse()
  b = b.split('').reverse()
  // 取得ab两者最大长度
  let maxLength = Math.max(a.length, b.length)
  // 临时变量
  let tempA = 0
  let tempB = 0
  let tempNum = 0 // 临时相加和
  let judge = 0 // 判断相加是否进1
  let result = []

  for(let index = 0; index <maxLength; index++) {
    tempA = a[index] || 0
    tempB = b[index] || 0
    tempNum = Number(tempA) + Number(tempB)
    // temNum要加入之前的judge
    if (judge) {
      tempNum+=judge
    }
    judge = tempNum >= 10 ? 1 : 0
    if(index === maxLength-1 && judge) {
      result.push(tempNum)
    }else{
      result.push(tempNum%10)
    }
  }

  return result.reverse().join('')

}

module.exports = add