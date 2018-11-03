function add(x, y) {
  // 实现该函数
  if(!x) return false;
  if(!y) return false;
  x = String(x);
  y = String(y);
  const arr1 = x.length >= y.length? x.split('').reverse() : y.split('').reverse();
  const arr2 = x.length >= y.length? y.split('').reverse() : x.split('').reverse();
  for (let i = 0, len = arr1.length; i < len; i++) {
    arr1[i] = ~~arr1[i] + ~~arr2[i];
    if (arr1[i]>= 10) {
      arr1[i] = ~~arr1[i] % 10;
      arr1[i + 1] = ~~arr1[i + 1] + 1;
    }
  }
  return arr1.reverse().join('');
}
module.exports = add