function add(a, b) {
  var alist = a.split('').reverse();
  var blist = b.split('').reverse();
  var result = [], flag = 0;
  var len = Math.max(alist.length, blist.length);

  for (var i = 0; i < len; i++) {
    var c = parseInt(alist[i] || 0) + parseInt(blist[i] || 0) + flag;
    flag = c > 9 ? 1 : 0;
    result.push(c % 10)
  }
  if (flag === 1) {
    result.push(flag);
  }
  var total = (result.reverse().join('') + '').replace(/^0+/, '');
  return total;
}

module.exports = add
