function add(a, b) {
  /**
   * 网上大神的写法
   * 膜拜一下
   */
  // var res='', c=0;
  // a = a.split('');
  // b = b.split('');
  // while (a.length || b.length || c){
  //     c += ~~a.pop() + ~~b.pop();
  //     res = c % 10 + res;
  //     c = c>9;
  // }
  // return res.replace(/^0+/,'');


  // ------   大数相加
  // ---- 基本思路 先将字符串转换成数组, 一位一位进行相加, 最后拼接起来
  // 1. 先将字符串按位分割成数组
  a = a.split('').reverse();
  b = b.split('').reverse();

  const minLen = a.length > b.length ? a.length : b.length;
  let addNum = 0;
  let total = '';
  for (let i = 0; i < minLen; i++) {
    const aNum = parseInt(a[i], 10);
    const bNum = parseInt(b[i], 10);
    // console.log('aNum: ', aNum, ' bNum: ', bNum);
    let totalNum = aNum + bNum + addNum;
    if (totalNum >= 10
      && !(a.length == b.length && i == minLen - 1)) {
      total = totalNum % 10 + total;
      addNum = Math.floor(totalNum / 10);
    } else {
      total = totalNum + total;
      addNum = 0;
    }
  } 
  // 2. 检查是否有比 minLen 长度达的数组, 进行最后的运算
  if (a.length > minLen) {
    total = (parseInt(a[a.length - 1], 10) + addNum) + total;
  } else if (b.length > minLen) {
    total = (parseInt(b[b.length - 1], 10) + addNum) + total;
  }
  return total;
}

module.exports = add