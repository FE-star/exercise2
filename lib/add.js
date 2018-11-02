function add(a, b) {
  if ((!a && a != 0) || (!b && b != 0) ) return
  a = a + '';
  b = b + '';
  // 长度补齐
  while(a.length > b.length) {
    b = '0' + b;
  }
  while(b.length > a.length) {
    a = '0' + a;
  }
  // 默认没有进位
  let addNum = 0;
  const result = [];
  for (let i = a.length - 1; i >= 0; i--) {
    let anum = a.charAt(i) - 0;
    let bnum = b.charAt(i) - 0;
    
    const sum = anum + bnum + addNum;

    if (sum > 9) {
      addNum = 1;
      result.unshift(sum - 10);
    } else {
      addNum = 0;
      result.unshift(sum);
    }
  }
  // 最高位相加有进位，再往更高的最高位添加进位
  if (addNum) {
    result.unshift(addNum);
  }
  // 防止出现'0001' + '1' = '0002'的情况出现
  return result.join('').replace(/^0+/, '');
}

module.exports = add