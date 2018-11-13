function add(a, b) {
  // 实现该函数
  // a, b => String
  a = String(a).split('');
  b = String(b).split('');
  let res = '', c =0;
  while (a.length || b.length || c){
    c += ~~a.pop() + ~~b.pop();
    res = c % 10 + res;
    c = c > 9;
  }
  return res.replace(/^0+/,'');
}

module.exports = add