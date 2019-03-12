function add(...rest) {
  // 实现该函数
  let sumArr = [];
  let prefix = 0;
  
  for (const numStr of rest) {
    prefix = 0;
    const numArr = numStr.split('').reverse();
    for (let i = 0; i < numArr.length; i++) {
      const addSum = i < sumArr.length ? parseInt(sumArr[i]) : 0
      const sum = prefix + parseInt(numArr[i]) + addSum;
      if (sum >= 10) {
        prefix = 1
        sumArr[i] = sum % 10
      } else {
        prefix = 0
        sumArr[i] = sum
      }
    }
  }

  if (prefix !== 0) {
    sumArr.push(prefix)
  }

  return sumArr.reverse().join('')
}

module.exports = add