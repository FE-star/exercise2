function add(a, b) {
  // 实现该函数
  let arr, brr, plus = 0, final = [];
  const max = Math.max(a.length, b.length);
  arr = a.padStart(max, '0').split('');
  brr = b.padStart(max, '0').split('');

  for (let i = arr.length - 1; i >= 0; i--) {
    const num = (parseInt(arr[i]) + parseInt(brr[i]) + plus).toString();
    if (num > 9) {
      plus = 1
    } else {
      plus = 0;
    }
    const result = num.split('')[num.length - 1];
    final.unshift(result);
  }
  if (plus === 1) {
    final.unshift('1');
  }
  return final.join('');
}

module.exports = add