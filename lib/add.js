function add(a, b) {
  // 实现该函数
  var arrayA = a.split('');
  var arrayB = b.split('');
  var arrayAddSize = Math.max(arrayA.length, arrayB.length);
  var arrayAdd = []; // 求和之后的数组
  var current = 0; // 当前两个位的求和
  var carry = 0; // 进位
  for (var i = arrayAddSize - 1; i > -1; i--) {
    current = carry;
    if (i < arrayA.length) {
      current += Number(arrayA[i]);
    }
    if (i < arrayB.length) {
      current += Number(arrayB[i]);
    }
    arrayAdd.unshift(current % 10);
    carry = Math.floor(current / 10); // 获得进位，下个循环使用
  }
  if (carry > 0) {
    arrayAdd.unshift(carry);
  }
  return arrayAdd.join('');
}

module.exports = add