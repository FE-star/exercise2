function add(val1, val2) {
  // 增加一位，两数相关最高位可能会有进位
  val1 = '0' + val1; 
  val2 = '0' + val2;
  // 转化为数组形式
  var var1Arr = val1.split("");
  var var2Arr = val2.split("");
  var distance = var1Arr.length - var2Arr.length;
  // 前面补位0
  if (distance > 0) {
    for (var i = 0; i < distance; i++) {
      var1Arr.unshift('0')
    }
  } else {
    for (var i = 0; i < Math.abs(distance); i++) {
      var2Arr.unshift('0')
    }
  }

  var result = []; //保存结果
  var carryBit = 0; //两数相关进位
  var maxLength = distance > 0 ? var1Arr.length : var2Arr.length;
  for (var i = maxLength - 1; i > 0; i--) {
    var subSum = Number(var1Arr[i]) + Number(var2Arr[i]) + carryBit;
    // 大于0，保留进位
    if (subSum > 10) {  
      carryBit = 1;
      result.push((subSum + '')[1]);
    } else {
      carryBit = 0;
      result.push(subSum);
    }
  }
  // 反转
  result.reverse();
  // 去除最前面的0
  result = result.join('').replace(/^0/, '');
  return result;
}

module.exports = add