function add(str1, str2) {
  // 实现该函数
  var arr1 = str1.split('')
  var arr2 = str2.split('')
  var len1 = arr1.length
  var len2 = arr2.length
  var maxLen = len1
  var longArr = arr1
  var minLen = len2
  var shortArr = arr2

  if (len1 < len2) {
    var maxLen = len2
    var longArr = arr2
    var minLen = len1
    var shortArr = arr1
  }

  var f = 0 // 进位
  var result = []
  for (var i = 0; i < maxLen; i++) {
    var res = 0
    if (minLen - 1 - i >= 0) {
      res = parseInt(longArr[maxLen - 1 - i]) + parseInt(shortArr[minLen - 1 - i]) + f
    } else {
      res = parseInt(longArr[maxLen - 1 - i]) + f
    }

    if (res >= 10) {
      f = 1
      result.push(res - 10)
    } else {
      f = 0
      result.push(res)
    }
  }
  // 最后的进位不能丢
  if (f) {
    result.push(f)
  }

  return result.reverse().join('')
}

module.exports = add