function add(num1, num2) {
  // 实现该函数
  let len1 = num1.length;
  let len2 = num2.length;
  let sum = '';
  let carry = 0;
  while(len1 || len2 || carry) {
    let cur = (len1 ? Number(num1.charAt(--len1)) : 0) + (len2 ? Number(num2.charAt(--len2)) : 0) + carry;
    sum = cur % 10 + sum;
    carry = Math.floor(cur / 10);
  }
  return sum;
}

module.exports = add