function add() {
  // 实现该函数
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += +arguments[i];
  }
  return sum + '';
}

function strSum() {
  /**
   * 1. 把字符串变字符数组
   * 2. 初始化变量：和数组、默认空的加数数组、记录上一位的进位制
   * 3. 从末尾开始相加，把个位数存储在和数组中，把进位制存储在进位值变量中
   * 4. 
   */
  var sum = '';
  var carryFlag = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum = strAdd(sum, arguments[i]);
  }
  return sum;
}

function strAdd(var1, var2) {
  var1 = var1.split('');
  var2 = var2.split('');
  var sumArr = [];
  var carryFlag = 0;
  for (var i = var1.length - 1, j = var2.length - 1; i >= 0 || j >= 0; i--, j--) {
      var add1 = i < 0 ? 0 : +var1[i];
      var add2 = j < 0 ? 0 : +var2[j];
      var sum = add1 + add2 + carryFlag;
      sumArr.unshift(sum%10);
      carryFlag = Math.floor(sum/10);
  }
  if (carryFlag > 0) {
    sumArr.unshift(carryFlag);
  }
  return sumArr.join('');
}

module.exports = strSum