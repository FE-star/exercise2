function add(data1, data2) {
  const result = []
  const baseNum = 10
  const intData1 = parseInt(data1)
  const intData2 = parseInt(data2)
  const data1Arr = data1.split('')
  const data2Arr = data2.split('')
  const data1Len = data1Arr.length
  const data2Len = data2Arr.length
  const maxLen = Math.max(data1Len, data2Len)
  // 进位标志
  let sign = 0
  // 补0处理
  const repair = (target, moreLen) => {
    for (let i = 0; i < moreLen; i++) {
      target.unshift(0)
    }
  }
  // 对比是否需要进行补0处理
  const compare = () => {
    if (data1Len > data2Len) {
      repair(data2Arr, maxLen - data2Len)
    } else if (data1Len < data2Len) {
      maxLen = data2Le
      repair(data1Arr, maxLen - data1Len)
    }
  }
  // 进位 
  const addSign = () => sign++
  // 重置进位标志
  const resetSign = () => sign = 0
  // 对于安全整数的处理方法
  const safeFun = () => `${intData1 + intData2}`
  // 对于非安全整数的处理方法
  const unSafeFun = () => {
    compare()
    let i = maxLen
    while(i--) {
      const tempResult = parseInt(data1Arr[i]) + parseInt(data2Arr[i]) + sign
      resetSign()
      if (tempResult >= baseNum) {
        const restNum = tempResult - baseNum
        result.unshift(restNum)
        sign = 1
        // 判断最后一位是否需要进位
        i === 0 && result.unshift(sign)
      } else {
        result.unshift(tempResult)
      }
    }
    return result.join().replace(/,/g, '')
  }
  if (Number.isSafeInteger(intData1) && Number.isSafeInteger(intData2)) {
    return safeFun()
  } else {
    return unSafeFun()
  }
}

module.exports = add