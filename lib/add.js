function add(a, b) {
  // 实现该函数
  const bigA = BigInt(a);
  const bigB = BigInt(b);
  return (bigA + bigB).toString()
}

module.exports = add