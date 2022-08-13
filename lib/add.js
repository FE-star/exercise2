function add(str1, str2) {
  // 实现该函数
  //  先获取最长的
  let maxLen = Math.max(str1.length, str2.length);
  const arr1 = str1.split('');
  const arr2 = str2.split('');
  let count = [];
  let ifTen = false;
  while (arr1.length || arr2.length || ifTen) {
    const currentStr1 = arr1.pop() || 0;
    const currentStr2 = arr2.pop() || 0;
    let c = parseInt(currentStr1) + parseInt(currentStr2);
    if (ifTen) {
      c = c + 1;
      ifTen = false;
    }
    if (c >= 10) {
      ifTen = true;
      count.unshift(c % 10);
    } else {
      count.unshift(c);
    }
  }
  const result = count.join('');
  return result;
}
module.exports = add;
