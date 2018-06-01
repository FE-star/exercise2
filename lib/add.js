function add(a, b) {
  // 实现该函数
  a = String(a).split('');
  b = String(b).split('');
  len_a = a.length;
  len_b = b.length;

  len_extra_digits = Math.abs(len_a - len_b);
  if (len_a >= len_b) {
    extra_digits = a.slice(0, len_extra_digits)
  } else {
    extra_digits = b.slice(0, len_extra_digits);
    a = [b,b=a][0];
  };

  //console.log('start!\n');
  result = [];
  digit_carry = 0;
  for (i=Math.max(len_a, len_b)-1;i>=0;i--) {
    digit_a = parseInt(a[i]);
    digit_b = (i - len_extra_digits) >= 0 ? parseInt(b[i - len_extra_digits]) : 0;
    //console.log(digit_a, digit_b);
    digit_sum = String(digit_a + digit_b + digit_carry);
    if (digit_sum.length === 2){
      digit_carry = 1;
      result.push(digit_sum[1]);
    } else {
      digit_carry = 0;
      result.push(digit_sum);
    };
  };
  if (digit_carry === 1) { result.push(digit_carry); };
  result = result.reverse().join('');
  //console.log(result);
  
  return result;
}

module.exports = add
