function add() {
  // 实现该函数
  var reg = new RegExp(/^\d+$/);  // 未考虑负
  if (!reg.test(arguments[0]) || !reg.test(arguments[1]) ) {
    return new Error('expect a positive integer');
  }
  // 低位 对应 个位
  let arr1 = arguments[0].split('').reverse();  // 未去前缀0
  let arr2 = arguments[1].split('').reverse();
  let maxLen = arr1.length > arr2.length? arr1.length : arr2.length;
  let res = new Array(maxLen).fill(0);
  for (let i = 0; i< maxLen; i++) {
    let t1 = arr1[i] ? arr1[i] - 0 : 0;
    let t2 = arr2[i] ? arr2[i] - 0 : 0;
    let sum = t1 + t2;
    res[i+1] = parseInt( sum / 10 );  // js 默认浮点运算
    res[i] += sum % 10;
  }
  if (res[res.length - 1] === 0) {
    res.length--;
  }
  return res.reverse().join('');
}

module.exports = add