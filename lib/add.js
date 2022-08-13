function add(a, b) {
  // 实现该函数
  const bigIntA = BigInt(a);
  const bigIntB = BigInt(b);
  return (bigIntA + bigIntB).toString();
}

module.exports = add;
