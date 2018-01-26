/**
 * [add 大整数相加]
 * @param {Number} a [第一个数字]
 * @param {Number} b [第二个数字]
 * @return {String} [返回相加结果]
 */
function add(a, b) {
  // 加0是因为两个数相加可能会需要进位，如果不需要进位后面会将这个0删除掉
  var fir = '0' + a;
  var sec = '0' + b;


  // 将数字转换成数组
  var arrFir = fir.split('');
  var arrSec = sec.split('');
  // res为最后的输入结果数组
  var res = [];
  // 存储结果数组的每一位
  var temp = '';
  // 进位数字[0|1]
  var carry = 0;
  // 两个数字的位数差
  var distance = fir.length - sec.length;
  // 两个数按位相加的循环次数
  var len = Math.max(fir.length, sec.length);

  // 将两个数的位数保持一致，位数小的以0补齐
  // 比如 132, 1234,会将这个数转成['0', '1', '3', '2']、['0', '1', '2', '3', '4']
  if (distance > 0) {
    for (var i = 0; i < distance; i++) {
      arrSec.unshift('0');
    }
  } else {
    for (var i = 0; i < Math.abs(distance); i++) {
      arrFir.unshift('0');
    }
  }

  // 数组从后往前遍历，按位转成整形数字后相加
  // carry表示进位数，比如6+7=13，则carry为1，或者1+2=0，则carry为0，加到后一位上
  for (var j = len - 1; j >= 0; j--) {
    temp = +arrFir[j] + (+arrSec[j]) + carry;
    // 大于10，carry为1
    if (temp > 10) {
      carry = 1;
      // 去temp的十分位
      res.push((temp + '')[1]);
    } else {
      carry = 0;
      res.push(temp + '');
    }
  }
  // 先将res反转，然后转换成字符串，如果第一位是0的话需要将0去掉
  res = res.reverse().join('').replace(/^0/, '');
  return res;

}

module.exports = add;
