function add(a, b) {
  // 实现该函数
  var carry = 0, result = [],
      maxLen = Math.max(a.length, b.length), i = maxLen;
  // 拿出每位字符串转成数字，进行从低位开始相加
  while (i--) {
    var sum = (+a[i - maxLen + a.length] || 0) + (+b[i - maxLen + b.length] || 0) + carry;
    carry = parseInt(sum / 10); // 进位的数
    // console.log('carry', carry, 'reserve', sum % 10);
    result.unshift(sum % 10); // 去掉进位的保留数
  }
  if (carry) result.unshift(carry); // 保留最后一个进位
  return result.join('');
}

module.exports = add
