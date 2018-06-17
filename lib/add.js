function add() {
  // 实现该函数
  // 暂仅考虑测试用例中的情况，类型、参数等不做判断
  let aArr = arguments[0].split('').reverse();  // reverse为了对齐
  let bArr = arguments[1].split('').reverse();;
  let rArr = [];
  let maxLen = aArr.length > bArr.length ? aArr.length : bArr.length;
  for (let i = 0; i < maxLen; i++) {
    let _tempA = aArr[i] ? aArr[i] - 0 : 0;
    let _tempB = bArr[i] ? bArr[i] - 0 : 0;
    let _sum = _tempA + _tempB + (rArr[i] ? rArr[i] : 0);
    rArr[i] = _sum % 10;
    if(parseInt(_sum / 10)) rArr[i + 1] = parseInt(_sum / 10);
  }
  return rArr.reverse().join('');
}

module.exports = add