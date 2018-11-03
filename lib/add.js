function add(strNum1, strNum2) {
  // 实现该函数
  strNum1 = strNum1 + '';
  strNum2 = strNum2 + '';
  let i = strNum1.length - 1;
  let j = strNum2.length - 1;
  let ret = [];
  let gt = 0;
  if (i > j) {
    strNum2.padStart(i, '0');
  } else {
    strNum1.padStart(j, '0');
  }
  while (i >= 0 || j >= 0) {
    let cur = Number(strNum1.charAt(i)) + Number(strNum2.charAt(j));
    cur += gt;
    if (cur >= 10 && i !== 0) {
      gt = 1;
      ret.unshift((cur + '').split('')[1]);
    } else {
      gt = 0;
      ret.unshift(cur);
    }
    i--;
    j--;
  }

  return ret.join('');
}

module.exports = add