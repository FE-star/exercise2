function add(a, b) {
  // 实现该函数
  if (!a && !b) return '0'
  if (!a) return b
  if (!b) return a
  a = '0' + a
  b = '0' + b
  let arrBigA = a.split(''), //将数字转成字符串
    arrBigB = b.split(''),
    result = [],
    temp = '',
    carry = 0,
    distance = a.length - b.length, //计算两个数值字符串的长度差
    len = distance > 0 ? a.length : b.length;

  if (distance > 0) {
    for (let i = 0; i < distance; i++) {
      arrBigB.unshift('0');
    }

  } else {
    for (let i = 0; i < Math.abs(distance); i++) {
      arrBigA.unshift('0');
    }
  }

  for (let i = len - 1; i >= 0; i--) {
    temp = +arrBigA[i] + (+arrBigB[i]) + carry;
    if (temp > 10) {
      carry = 1;
      result.push((temp + '')[1]);
    } else {
      carry = 0;
      result.push(temp);
    }
  }

  result = result.reverse().join('').replace(/^0/, '');
  return result+''

}

module.exports = add