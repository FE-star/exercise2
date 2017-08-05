function add(a,b) {
  // 实现该函数
  // 倒序
  var aList = a.split('').reverse()
  var bList = b.split('') .reverse()
  var max = Math.max(aList.length, bList.length)
  // 结果
  var cList = []
  // 进位
  var flag = 0
  for (var i = 0, l=max; i < l; i++) {
    var tmp = (+aList[i] || 0) + (+bList[i] || 0) + flag
    flag = 0
    console.log(tmp)
    if (tmp > 9) {
      tmp = tmp - 10
      flag = 1
    }
    cList.push(tmp)
    console.log(cList)
  }
  // console.log(aList, bList);
  if (flag === 1) {
    return '1' + cList.reverse().join('')
  } else {
    return cList.reverse().join('')
  }
  
}

module.exports = add