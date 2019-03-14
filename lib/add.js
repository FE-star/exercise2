// 大数相加需要考虑溢出的问题
function add() {
  // 实现该函数
  // let list = Array.prototype.slice.call(arguments);
  // return list.reduce((prev, next) => Number(prev) + Number(next), '0').toString()
  let list = Array.prototype.slice.call(arguments);
  var res='', c=0;
  a = list[0].split('');
  b = list[1].split('');
  while (a.length || b.length || c){
      c += ~~a.pop() + ~~b.pop();
      res = c % 10 + res;
      c = c>9;
  }
  return res.replace(/^0+/,'');
}
module.exports = add