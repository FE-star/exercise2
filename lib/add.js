function add(numStr1, numStr2) {
  // 实现该函数
  var numReverseStrArr1 = numStr1.split("").reverse();
  var numReverseStrArr2 = numStr2.split("").reverse();
  var maxLen = Math.max(numReverseStrArr1.length, numReverseStrArr2.length);
  var flag = 0;
  var sumArr = [];
  for (var i = 0; i < maxLen; i++) {
    var sum = (+numReverseStrArr1[i]) + (+numReverseStrArr2[i]) + flag;
    flag = 0;
    sumArr.push(sum % 10);
    if (sum > 9) {
      flag = 1;
    }
  }
  if (flag === 1) {
    sumArr.push(flag);
  }

  return sumArr.reverse().join("");
}

module.exports = add