function add(a, b) {
  // 实现该函数
  var result = [];
  var len = Math.max(a.length, b.length);
  var i = len;
  var carry = 0;
  while(i--) {
    var sum = (+a[i - len + a.length] || 0) + (+b[i - len + b.length] || 0) + carry;
    carry = parseInt(sum/10);
    result.unshift(sum%10);
  }
  if (carry) result.unshift(carry);
  return result.join('');
}

module.exports = add