// 方法一 使用很多技巧
// 1. ~ 表示取反，~0 为 -1，~~0 为 0，需要注意的是 ~~null 值为 0
// 2. c = c > 9 然后 c = c + ... Boolean 值强制类型转换：true 1, false 0
function add(a, b) {
  var res = "",
    c = 0;
  // 使用 split 将数字字符串转成字符串数组
  a = a.split("");
  b = b.split("");
  // 简洁之处
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = c % 10 + res;
    c = c > 9;
  }
  // 将开头的 0 都是替换为空字符
  return res.replace(/^0+/, "");
}
// 方法二 不推荐，使用多个循环，复杂化了
function add2(a, b) {
  // Javascript 大数相加精度问题，它会丢弃大于 9007199254740992 后的位数，导致精度丢失、
  // 参考文章：http://www.plqblog.com/views/article.php?id=29

  // 加 0 防止相加会进位
  a = "0" + a;
  b = "0" + b;

  // 使用 split 将数字字符串转成字符串数组
  // res: 相加的结果
  // temp: 表示对应位数相加的结果的临时变量
  // flag: 进位值
  // distance: 计算两个数值字符串的长度差
  // len: 取位数最大的字符串长度
  var arrA = a.split(""),
    arrB = b.split(""),
    res = [],
    temp = "",
    flag = 0,
    distance = a.length - b.length,
    len = distance > 0 ? a.length : b.length;

  // 在长度小的那个数值字符串前面添加distance个0，这样两个数值的位数就保持一致
  if (distance > 0) {
    for (let i = 0; i < distance; i++) {
      arrB.unshift("0");
    }
  } else {
    for (let i = 0; i < Math.abs(distance); i++) {
      arrA.unshift("0");
    }
  }

  // 从数组的最后一位开始向前遍历，把两个数组对应位置的数值字符串转成整形后相加，记得加上进位值 flag
  for (let i = len - 1; i >= 0; i--) {
    temp = +arrA[i] + +arrB[i] + flag;
    if (temp > 10) {
      flag = 1;
      // 放入该两位数的第二位
      res.push((temp + "")[1]);
    } else {
      flag = 0;
      res.push(temp);
    }
  }

  // 将数组翻转，同时重新转化为字符串，同时将开头的 0 都是替换为空字符
  res = res
    .reverse()
    .join("")
    .replace(/^0/, "");

  return res;
}

module.exports = add;
