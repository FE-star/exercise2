function add(num1, num2) {
  // 实现该函数
  let maxLength = Math.max(num1.length, num2.length);
  // num1和num2位数对齐，位数较小的前面补0
  num1 = num1.padStart(maxLength, '0');
  num2 = num2.padStart(maxLength, '0');
  let res = '';// 存放最后得到的结果
  let figure = 0;// figure = 两个数字对应位数数值相加 + 进位
  let currentNum = 0;// 对应位数的结果
  let carry = 0;// 进位
  for (let i = num1.length - 1; i >= 0; i--) {
    figure = parseInt(num1[i]) + parseInt(num2[i]) + carry;
    currentNum = figure % 10;
    carry = Math.floor(figure / 10);

    res = currentNum + res;
  }
  // 首位进位
  if (carry) {
    res = carry + res
  }
  console.log(res);
  return res
}


module.exports = add