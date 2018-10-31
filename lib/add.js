function add(opt1, opt2) {
  // 实现该函数
  let array1 = opt1.split("").reverse(); //反转数组 避免对齐数位
  let array2 = opt2.split("").reverse();
  const MaxLength = Math.max(array1.length, array2.length);
  let result = [],
    sum = 0,
    offset = 0,
    remian = 0;
  for (var i = 0; i < MaxLength; i++) {
    sum = offset;
    if (i < array1.length) {//高位不够 不参与计算
      sum += Number(array1[i]);
    }
    if (i < array2.length) {
      sum += Number(array2[i]);
    }
    offset = Math.floor(sum / 10);
    remian = sum % 10;
    result[i] = remian;
  }
  if (offset != 0) {// 检查最高位
    result[i + 1] = offset;
  }
  return result.reverse().join("");
}

module.exports = add;
