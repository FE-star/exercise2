function add(num1, num2) {
  // 实现该函数
  let maxLength = Math.max(num1.length, num2.length);
  num1 = num1.padStart(maxLength, '0');
  num2 = num2.padStart(maxLength, '0');

  let temp = 0;
  let flag = 0;
  let result = '';
  for (let i = maxLength - 1; i >= 0; i--) {
    temp = parseInt(num1[i]) + parseInt(num2[i]) + flag;
    flag = Math.floor(temp / 10);
    result = (temp % 10) + result;
  }

  if (flag === 1) {
    result = '1' + result;
  }
  return result;
}

module.exports = add;
