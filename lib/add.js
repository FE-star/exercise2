function add(num1, num2) {
  // 实现该函数
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let sum = '';
  for (; i >= 0 || j >= 0 || carry > 0; i--, j--) {
      const digit1 = i < 0 ? 0 : num1.charAt(i) - '0';
      const digit2 = j < 0 ? 0 : num2.charAt(j) - '0';
      const digitSum = digit1 + digit2 + carry;
      sum = `${digitSum % 10}${sum}`;
      carry = Math.floor(digitSum / 10);
  }
  return sum;
}

module.exports = add