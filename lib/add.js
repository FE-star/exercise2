var should = require('should')
// 4abc7dacd7ee34b5a2b3f0bb02f036f5136847b3
function add() {
  // 实现该函数
  const numsArray = [...arguments].map(item => {
    return [...(item+'')].map(item => { return +item})
  })
  const numArrayAdd = function(nums1, nums2){
    nums1 = nums1.reverse()
    nums2 = nums2.reverse()
    const length = nums1.length > nums2.length ? nums1.length : nums2.length
    const resultArray = []
    let addBitFlag = 0
    let addItem1 = 0
    let addItem2 = 0
    let res = 0
    
    for(let i = 0;(i < length || addBitFlag !== 0);i++){
      addItem1 = nums1[i] === undefined ? 0 : nums1[i]
      addItem2 = nums2[i] === undefined ? 0 : nums2[i]
      res = addItem1 + addItem2 + addBitFlag
      if(res > 9){
        addBitFlag = 1
        res = (res % 10)
      } else {
        addBitFlag = 0
      }
      resultArray[i] = res
    }
    return resultArray.reverse()
  }

  const sum = numsArray.reduce((prev, cur) => {
    return numArrayAdd(prev, cur)
  })
  return sum.join('')
}

module.exports = add