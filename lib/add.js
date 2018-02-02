function add(a, b) {
  // 实现该函数
  var aa = a.split('').reverse();
  var bb = b.split('').reverse();
  var len = aa.length > bb.length ? aa.length : bb.length;
  var flag = 0;
  var cc = [];
  var tmp;
  for (var i = 0; i < len + 1; i++) {
    tmp = parseInt(aa[i] || 0) + parseInt(bb[i] || 0) + flag;
    flag = Math.floor(tmp / 10);
    cc[i] = tmp % 10 + '';
  }
  if(cc[len]=='0') cc.pop();
  return cc.reverse().join('');

}

module.exports = add
