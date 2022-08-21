function add(a, b) {
  // 实现该函数
  // 非数字报错
  if(isNaN(a) || isNaN(b)) throw Error('需要传入数字或字符串型数字')
  const maxLength = 16
  // 边界：16位以内可以正常相加
  if(String(a).length<maxLength && String(b).length<maxLength) {
    return String(Number(a) + Number(b))
  }

  // 以10位数作一个阈值进行分割
  const aList = a.match(/\d{1,10}/g)
  const bList = b.match(/\d{1,10}/g)
  
  // 两数的最大长度作为结果数组的长度，+1一个长度防止满十进一
  let resultLength = Math.max(aList.length, bList.length)
  let addResultList = Array(resultLength+1).fill('')
  let aLength = aList.length - 1
  let bLength = bList.length - 1
  // 从尾部开始计算，两两相加后把结果加到结果数组上
  // 如果两数相加长度大于a/b的最大长度，说明是首位满十，往结果数组的前一位进一
  while(aLength>=0 || bLength>=0) {
    const resultTemp = Number(aList[aLength] || 0) + Number(bList[bLength] || 0)
    // 判断长度是否溢出
    if(resultTemp.length > Math.max(aList[aLength].length, bList[bLength].length)) {
      addResultList[resultLength - 1] = 1
      resultTemp = resultTemp.slice(1)
    }
    addResultList[resultLength] = addResultList[resultLength] + resultTemp

    aLength--
    bLength--
    resultLength--
  }

  const result = addResultList.join('')

  return result
}

module.exports = add