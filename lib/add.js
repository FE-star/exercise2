function add(a, b) {
  // 实现该函数
  var result = [];

  var aArray = a.split('');
  var bArray = b.split('');
  var length = Math.max(aArray.length, bArray.length);

  var hasCarry = false;
  for (var i = length - 1; i >= 0; i--) {
    var aValue = aArray[i] || 0;
    var bValue = bArray[i] || 0;
    aValue = parseInt(aValue);
    bValue = parseInt(bValue);

    var addValue = aValue + bValue + (hasCarry ? 1 : 0);
    result[i] = addValue % 10;
    hasCarry = addValue > 9;
  }
  if (hasCarry) {
    result.unshift(1);
  }

  return result.join('');
}

module.exports = add
