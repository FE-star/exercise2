function add(x, y) {
  // 实现该函数
  var result='', z=0;
  x = x.split('');
  y = y.split('');
  while (x.length || y.length || z){
      z += ~~x.pop() + ~~y.pop(); //转为数字相加
      result = z % 10 + result;
      z = z > 9;
  }
  return result.replace(/^0+/,'');//去掉开头的0
}

module.exports = add