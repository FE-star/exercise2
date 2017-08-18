
function add(a, b) {

  var aList = a.split('').reverse();
  var bList = b.split('').reverse();

  var maxLength = Math.max(aList.length, bList.length);

  var result = [];

  var flag = 0;
  for (var i = 0; i < maxLength; i++) {
      var temp = (+aList[i] || 0) + (+bList[i] || 0) + flag;

      flag = 0;
      if (temp > 9) {
        flag = 1;
        temp = temp - 10;
      }
      result.push(temp);
  }

  // 处理最高位
  if (flag > 0) {
    result.push(flag);
  }

  return result.reverse().join('');
}


module.exports = add
