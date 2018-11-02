function add(strA, strB) {
  // 实现该函数
  strA = strA + '';
  strB = strB + '';
  var lenA = strA.length;
  var lenB = strB.length;
  var len = lenA > lenB ? lenA : lenB;
  var carry = false;
  var res = '';
  for (var i = 1; i <= len ; i++) {
    var carryVal = carry ? 1 : 0;
    var a = lenA >= i ? strA[lenA - i] * 1 : 0;
    var b = lenB >= i ? strB[lenB - i] * 1 : 0;
    var sum = carryVal + a + b;
    carry = sum >= 10;
    res = (sum % 10) + res;
  }
  res = (carry ? '1' : '') + res;
  return res;
}

module.exports = add