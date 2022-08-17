function add (num1, num2) {
  // 实现该函数
  // 实现思路，通过余数进行组合
  const n1Arr = num1.split('');
  const n2Arr = num2.split('');
  let carry = 0;
  let str = ''
  while (n1Arr.length > 0 || n2Arr.length > 0) {
    const n1 = n1Arr.pop() || 0;
    const n2 = n2Arr.pop() || 0;
    let sum = Number(n1) + Number(n2) + carry
    carry = Math.floor(sum / 10);
    let remainder = sum % 10
    str = remainder + str
  }
  
  if (carry !== 0) {
    str = carry + str
  }

  return str
}

module.exports = add