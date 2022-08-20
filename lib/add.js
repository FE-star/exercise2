function add(num1, num2) {
  // 实现该函数
  // 利用BigInt
  // return String(BigInt(num1) + BigInt(num2))
  // 字符串截取进位
  const safeLength = 14;
  let a = num1;
  let b = num2; // 保留一份参数值
  let flag = 0, // 进位标识
      res = ''; // 结果
  while(a.length || b.length || flag) {
    const andSum = String(parseInt(a.substr(-safeLength) || 0, 10) + parseInt(b.substr(-safeLength) || 0, 10));
    res = parseInt(andSum.substr(-safeLength) || 0, 10) + flag + res;
    flag = andSum.length > safeLength;
    a = a.substr(0, a.length - safeLength);
    b = b.substr(0, b.length - safeLength);
  }
  return res
}

module.exports = add