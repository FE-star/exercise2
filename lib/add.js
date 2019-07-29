function add(a, b) {
  // 实现该函数
  if (typeof a !== 'string' || typeof b !== 'string') {
    console.log('参数必须为字符串');
    return;
  }
  a = '0' + a;
  b = '0' + b;
  const scale = 10;
  let aArr = a.split('');
  let bArr = b.split('');
  let aLen = aArr.length;
  let bLen = bArr.length;
  let maxLen = Math.max(aLen, bLen);
  let dis = aLen - bLen;
  let carry = 0;
  let res = [];
  if (dis > 0) {
    for (let i = 0; i < dis; i++) {
      bArr.unshift(0);
    }
  } else {
    for (let i = 0; i < -dis; i++) {
      aArr.unshift(0);
    }
  }
  for (let i = maxLen - 1; i >= 0; i--) {
    let temp = Number(aArr[i]) + Number(bArr[i]) + carry;
    carry = temp >= scale ? 1 : 0;
    temp = temp >=  scale ? temp % scale : temp;
    res.unshift(temp);
  }
  return res.join('').replace(/^0/, '');
}

module.exports = add