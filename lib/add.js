function add(a, b) {
  // 实现该函数
  a = String(a).split('');
  b = String(b).split('');
  var len_a = a.length;
  var len_b = b.length;

  var len_extra_digits = len_a - len_b;
  if (len_extra_digits < 0) {
    len_extra_digits = len_b - len_a;
    a = [b,b=a][0];
  };
  
  //console.log('start!\n');
  var result = [];
  var digit_carry = 0;
  for (let i=Math.max(len_a, len_b)-1;i>=0;i--) {
    var digit_a = parseInt(a[i]);
    var digit_b = (i - len_extra_digits) >= 0 ? parseInt(b[i - len_extra_digits]) : 0;
    //console.log(digit_a, digit_b);
    var digit_sum = String(digit_a + digit_b + digit_carry);
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
