function add(a, b) {
  // 实现该函数

  // 判断是否为 big number
  if(![a, b].some(item => parseInt(item) > 2**53) || parseInt(a) < 2**53 - parseInt(b) ) { // 这里判断parseInt会丢失精度，但不影响比较大小
    return [a, b].reduce((prev, current) => parseInt(prev) + parseInt(current), 0).toString();
  }

  const arr1 = a.split('');
  const arr2 = b.split('');

  let minLengthArr = arr1
  let maxLengthArr = arr2

  if (arr1.length >= arr2.length) {
    maxLengthArr = arr1;
    minLengthArr = arr2;
  }

  const ret = []; // 最终结果
  let flag = 0; // 用作进位符号

  for (let i = maxLengthArr.length - 1; i >= 0; i--) {
    let temp = 0; // 临时变量记录每次相同所以相加之和
    if (minLengthArr.length > i) {
      temp = parseInt(minLengthArr[i]) + parseInt(maxLengthArr[i]) + flag;
    } else {
      temp = parseInt(maxLengthArr[i]) + flag;
    }

    if (temp > 9) { // 此时需要进位
      flag = 1;
      temp = temp - 10;
      ret.unshift(temp);
      if (i === 0) { // 判断数组边界情况
        ret.unshift(1);
      }
    } else {
      flag = 0;
      ret.unshift(temp);
    }
  }
  return ret.join('');
}

module.exports = add