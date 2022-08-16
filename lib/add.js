// 实现大数相加
function add(num1, num2) {
  const num1Arr = num1.split('').reverse();
  const num2Arr = num2.split('').reverse();
  const result = [];
  let carry = 0;
  let len = Math.max(num1Arr.length, num2Arr.length);
  for (let i = 0; i < len; i++) {
    const sum = Number(num1Arr[i]) + Number(num2Arr[i]) + carry;
    carry = Math.floor(sum / 10);
    result.push(sum % 10);
  }
  if (carry) {
    result.push(carry);
  }
  return result.reverse().join('');

}

module.exports = add