function add(a, b) {
  // 实现该函数
  let carry = 0;
  let length = a.length > b.length ? a.length : b.length;
  let sum = [];
  const format = str => str.length === length ? str : '0'.repeat(length - str.length) + str;
  format(a);
  format(b);
  for(let i=length-1; i>-1; i--){
    let remain = 0;
    let singleSum = parseInt(a[i]) + parseInt(b[i]) + carry;
    if(singleSum >= 10) {
      remain = singleSum - 10;
      carry = 1;
    } else {
      remain = singleSum;
      carry = 0;
    }
    sum[i] = remain;
  }
  return carry ? '1' + sum.join('') : sum.join('');
}

module.exports = add