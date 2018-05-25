function add(n, m) {
  // 操作数类型判断, 要求为字符串。不满足条件则抛出异常。
  if (typeof n !== 'string' || typeof m !== 'string') {
    throw new Error('数据类型错误, 大数相加操作数为字符串!');
  }

  // 数据反转, 方便后面的遍历求和
  n = n.split('').reverse();
  m = m.split('').reverse();

  // 获取较长的位数, 并作为后面对应位数遍历的最大值
  const maxLength = Math.max(n.length, m.length);

  // 计算过程中, 临时变量
  let tempN = 0; // 临时存储第1个操作数
  let tempM = 0; // 临时存储第2个操作数
  let tempAdd = 0; // 临时存储对应位上的数相加的和
  let extNum = 0; // 满10进1，保存进的值(1 或 0)

  // 计算结果
  const res = []; // 应位上的书相加的和

  // 遍历每一位上的数字，并求和。记录满十进一
  for (let index = 0; index < maxLength; index++) {
    // 缺位补0
    tempN = n[index] || 0;
    tempM = m[index] || 0;

    // 对应位上的数字求和
    tempAdd = Number(tempN) + Number(tempM);

    // 进一(extNum 为进 1)
    if (extNum) {
      tempAdd += extNum;
    }

    // 满十(存储需要进的 1)
    extNum = tempAdd >= 10 ? 1 : 0;

    // 最后一位满十进的一直接保存在当前求得的和中, 非最后一位则取 %10 后的值
    if (index === (maxLength - 1) && extNum) {
      res.push(tempAdd);
    } else {
      res.push(tempAdd % 10);
    }
  }

  // 返回计算后的数时注意翻转
  return res.reverse().join('');
}

module.exports = add;