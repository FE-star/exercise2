function add(string1, string2) {
  // 实现该函数
  /**
   * 方法一，不能实现大数相加
   */
  // return (Number(string1) + Number(string2)).toString()

  /**
   * 方法二，只能适合非负数相加
   * 思路：
   * 1. 将字符串拆分成单个元素的数组，把元素颠倒过来
   * 2. 从前往后，同一index的元素相加，转成字符串，再拆分成数组
   * 3. 将相加的结果的最后一位放进结果数组里
   * 4. 如果还有元素(进位)，放到下一轮相加
   * 5. 循环完成了。结果都在数组里
   * 6. 反转数组元素，合并
   * 7. 还要匹配第一位是0的，去掉
   */
  // 大数相加
  let list1 = string1.split('').reverse()
  let list2 = string2.split('').reverse()
  let resultList = []
  let carry = 0
  const cycleNumbers = Math.max.apply(Math, [string1.length, string2.length])

  let i = 0
  while (i <= cycleNumbers) {
    unitTotalList = (Number(list1.shift() || '0')  + Number(list2.shift() || '0') + carry).toString().split('')
    resultList.push(unitTotalList.pop());

    carry = Number(unitTotalList.pop() || '0')
    // console.log('carry:', carry)

    i++
  }
  // console.log("resultList:", resultList);

  return resultList.reverse().join('').replace(/^0/gi, '')

  /**
   * other
   */
}

module.exports = add
